import React from 'react';
import { ChevronRight, Filter, MessageCircle, Phone, X } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import { categories, contactInfo, products as allProducts } from '@/data/siteData';

type Product = typeof allProducts[number];

type CollectionsContentProps = {
  activeCategory: string;
  filteredProducts: Product[];
  selectedProduct: Product | null;
  setActiveCategory: (categoryId: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  t: (en: string, am: string) => string;
};

const CollectionsContent: React.FC<CollectionsContentProps> = ({
  activeCategory,
  filteredProducts,
  selectedProduct,
  setActiveCategory,
  setSelectedProduct,
  t,
}) => {
  return (
    <>
      <SEOSchema title="Collections - AXUM TIBEB | Ethiopian Clothing in Addis Ababa" description="Browse our collection of Ethiopian clothing at AXUM TIBEB." />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-[#2C2C2C]" data-header-theme="dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Our Collections</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Ethiopian Clothing<span className="block text-2xl md:text-3xl text-[#D4A574] mt-2">Traditional and Modern Styles</span></h1>
            <p className="text-white/70 text-lg">Explore our range of quality Ethiopian clothing, from traditional habesha kemis to modern fusion styles.</p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 md:top-24 z-40 bg-white shadow-sm" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === category.id ? 'bg-[#8B2635] text-white' : 'bg-[#FAF9F6] text-[#2C2C2C] hover:bg-[#D4A574]/20'}`}>{category.name}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF9F6]" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600 mb-8">Showing {filteredProducts.length} items{activeCategory !== 'all' && <span> in {categories.find(c => c.id === activeCategory)?.name}</span>}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={500} />
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#D4A574] font-medium uppercase tracking-wider">{categories.find(c => c.id === product.category)?.name}</span>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mt-1 mb-1">{product.name}</h3>
                  <p className="text-sm text-[#8B2635] mb-3">{product.nameAmharic}</p>
                  <p className="text-gray-600 text-sm mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{product.note}</span>
                    <span className="text-[#8B2635] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">View<ChevronRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" width={800} height={600} />
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"><X className="w-5 h-5 text-[#2C2C2C]" /></button>
            </div>
            <div className="p-6 md:p-8">
              <span className="text-xs text-[#D4A574] font-medium uppercase tracking-wider">{categories.find(c => c.id === selectedProduct.category)?.name}</span>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mt-2 mb-1">{selectedProduct.name}</h2>
              <p className="text-lg text-[#8B2635] mb-4">{selectedProduct.nameAmharic}</p>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              <p className="text-sm text-gray-500 mb-6 p-4 bg-[#FAF9F6] rounded-lg">{selectedProduct.note}. Contact us for more information about this item.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B2635] text-white font-semibold rounded-lg hover:bg-[#6d1e2a] transition-colors"><Phone className="w-5 h-5" />Call to Inquire</a>
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(t(
                    `Hi AXUM TIBEB, I'm interested in the ${selectedProduct.name}. Is it available?`,
                    `Hi AXUM TIBEB, I'm interested in the ${selectedProduct.name}. Is it available?`
                  ))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />{t('WhatsApp Inquiry', 'WhatsApp Inquiry')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B2635] to-[#6d1e2a]" data-header-theme="dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Our Collections?<span className="block text-xl md:text-2xl text-[#D4A574] mt-2">See our full selection in store</span></h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Visit our store to see our full collection in person.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#8B2635] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"><Phone className="w-5 h-5" />Call {contactInfo.phoneDisplay}</a>
            <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors shadow-lg"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsContent;

