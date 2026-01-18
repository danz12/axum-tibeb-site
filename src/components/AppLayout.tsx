import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import AboutContent from '@/components/pages/AboutContent';
import CollectionsContent from '@/components/pages/CollectionsContent';
import ContactContent from '@/components/pages/ContactContent';
import HomeContent from '@/components/pages/HomeContent';
import ReviewsContent from '@/components/pages/ReviewsContent';
import { collections as defaultCollections, contactInfo, heroImages, products } from '@/data/siteData';
import { COLLECTIONS_STORAGE_KEY, getStoredCollections } from '@/data/collectionsStore';

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [collectionsData, setCollectionsData] = useState(() => getStoredCollections());
  const [lang, setLang] = useState<'en' | 'am'>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('axum_lang') : null;
    return saved === 'am' ? 'am' : 'en';
  });
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('dark');

  const t = useMemo(() => {
    return (en: string, am: string) => (lang === 'am' ? am : en);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'am' : 'en';
      window.localStorage.setItem('axum_lang', next);
      toast.success(next === 'am' ? 'Language changed (Amharic)' : 'Language changed (English)');
      return next;
    });
  };

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === COLLECTIONS_STORAGE_KEY) {
        setCollectionsData(getStoredCollections());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const probeX = Math.floor(window.innerWidth / 2);
      const probeY = Math.floor(headerHeight + 6);
      const elements = document.elementsFromPoint(probeX, probeY);
      const themedElement = elements.find((el) => (el as HTMLElement).dataset?.headerTheme) as HTMLElement | undefined;
      const nextTheme = themedElement?.dataset.headerTheme === 'light' ? 'light' : 'dark';
      setHeaderTheme(nextTheme);
    };

    updateHeaderTheme();
    window.addEventListener('scroll', updateHeaderTheme, { passive: true });
    window.addEventListener('resize', updateHeaderTheme);
    return () => {
      window.removeEventListener('scroll', updateHeaderTheme);
      window.removeEventListener('resize', updateHeaderTheme);
    };
  }, [currentPage]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { name: t('Home', 'Home'), page: 'home' },
    { name: t('About', 'About'), page: 'about' },
    { name: t('Collections', 'Collections'), page: 'collections' },
    { name: t('Reviews', 'Reviews'), page: 'reviews' },
    { name: t('Contact', 'Contact'), page: 'contact' },
  ];

  const isActive = (page: string) => currentPage === page;

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  const handleSelectProduct = (productId: number) => {
    const match = products.find((product) => product.id === productId);
    if (match) {
      setSelectedProduct(match);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = t('Name is required', 'Name is required');
    if (!formData.phone.trim()) newErrors.phone = t('Phone number is required', 'Phone number is required');
    else if (!/^[0-9+\s-]{9,15}$/.test(formData.phone.replace(/\s/g, '')))
      newErrors.phone = t('Please enter a valid phone number', 'Please enter a valid phone number');
    if (!formData.message.trim()) newErrors.message = t('Message is required', 'Message is required');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const text = t(
        `Hi AXUM TIBEB, my name is ${formData.name}. My phone: ${formData.phone}. ${formData.message}`,
        `Hi AXUM TIBEB, my name is ${formData.name}. My phone: ${formData.phone}. ${formData.message}`
      );
      const url = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');

      toast.success(t('Opening WhatsApp...', 'Opening WhatsApp...'));

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutContent navigateTo={navigateTo} />;
      case 'collections':
        return (
          <CollectionsContent
            activeCategory={activeCategory}
            filteredProducts={filteredProducts}
            selectedProduct={selectedProduct}
            setActiveCategory={setActiveCategory}
            setSelectedProduct={setSelectedProduct}
            t={t}
          />
        );
      case 'reviews':
        return <ReviewsContent />;
      case 'contact':
        return (
          <ContactContent
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            t={t}
          />
        );
      default:
        return (
          <HomeContent
            collections={collectionsData.length ? collectionsData : defaultCollections}
            heroIndex={heroIndex}
            lang={lang}
            navigateTo={navigateTo}
            onSelectProduct={handleSelectProduct}
            t={t}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
        isActive={isActive}
        navigateTo={navigateTo}
        toggleLang={toggleLang}
        lang={lang}
        t={t}
        headerTheme={headerTheme}
      />
      {renderPage()}
      <Footer collections={collectionsData.length ? collectionsData : defaultCollections} navLinks={navLinks} navigateTo={navigateTo} />
      <FloatingActions t={t} />
    </div>
  );
};

export default AppLayout;

