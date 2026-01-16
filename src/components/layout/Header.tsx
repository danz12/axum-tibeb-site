import React from 'react';
import { MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

type NavLink = {
  name: string;
  page: string;
};

type HeaderProps = {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navLinks: NavLink[];
  isActive: (page: string) => boolean;
  navigateTo: (page: string) => void;
  toggleLang: () => void;
  lang: 'en' | 'am';
  t: (en: string, am: string) => string;
  headerTheme: 'light' | 'dark';
};

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  isActive,
  navigateTo,
  toggleLang,
  lang,
  t,
  headerTheme,
}) => {
  const isDark = headerTheme === 'dark';
  const headerBg = isScrolled
    ? isDark
      ? 'bg-black/45 backdrop-blur-md shadow-sm'
      : 'bg-white/90 backdrop-blur-md shadow-sm'
    : isDark
      ? 'bg-black/25 backdrop-blur-md'
      : 'bg-white/70 backdrop-blur-md';
  const primaryText = isDark ? 'text-white' : 'text-[#2C2C2C]';
  const secondaryText = isDark ? 'text-[#D4A574]' : 'text-[#8B2635]';
  const navBaseText = isDark ? 'text-white' : 'text-[#2C2C2C]';
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className={`max-w-7xl mx-auto px-4 py-4 ${isScrolled ? '' : 'md:py-6'}`}>
        <div className="flex items-center justify-between">
          <button onClick={() => navigateTo('home')} className="flex flex-col text-left">
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${primaryText}`}>{contactInfo.name}</span>
            <span className={`text-sm md:text-base transition-colors ${secondaryText}`}>{contactInfo.nameAmharic}</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                aria-current={isActive(link.page) ? 'page' : undefined}
                className={`text-sm font-medium transition-all hover:text-[#D4A574] ${isActive(link.page) ? 'text-[#D4A574]' : navBaseText}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${contactInfo.phoneE164}`} className="px-4 py-2 bg-[#8B2635] text-white text-sm font-medium rounded-lg hover:bg-[#6d1e2a] transition-colors">{t('Call Now', 'Call Now')}</a>
            <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#1da851] transition-colors">{t('WhatsApp', 'WhatsApp')}</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 ${primaryText}`} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col py-4">
              <div className="px-6 pb-3">
                <button onClick={toggleLang} className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#FAF9F6] border border-[#D4A574]/30 text-[#2C2C2C] font-medium">
                  <span>{t('Language', 'Language')}</span>
                  <span className="text-[#8B2635]">{lang === 'en' ? 'English (EN)' : 'Amharic (AM)'}</span>
                </button>
              </div>
              {navLinks.map((link) => (
                <button key={link.page} onClick={() => navigateTo(link.page)} className={`px-6 py-3 text-base font-medium transition-colors text-left ${isActive(link.page) ? 'text-[#D4A574] bg-[#FAF9F6]' : 'text-[#2C2C2C] hover:bg-[#FAF9F6]'}`}>{link.name}</button>
              ))}
              <div className="px-6 py-4 flex flex-col gap-3 border-t mt-2">
                <a href={`tel:${contactInfo.phoneE164}`} className="flex items-center justify-center gap-2 px-4 py-3 bg-[#8B2635] text-white font-medium rounded-lg"><Phone className="w-5 h-5" />{t('Call Now', 'Call Now')}</a>
                <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white font-medium rounded-lg"><MessageCircle className="w-5 h-5" />{t('WhatsApp', 'WhatsApp')}</a>
                <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] font-medium rounded-lg"><MapPin className="w-5 h-5" />{t('Get Directions', 'Get Directions')}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

