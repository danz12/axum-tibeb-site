import React from 'react';
import { CheckCircle, ChevronRight, Clock, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import { collections, contactInfo, heroImages, products, whyChooseUs } from '@/data/siteData';

type HomeContentProps = {
  heroIndex: number;
  lang: 'en' | 'am';
  navigateTo: (page: string) => void;
  onSelectProduct: (productId: number) => void;
  t: (en: string, am: string) => string;
};

const HomeContent: React.FC<HomeContentProps> = ({
  heroIndex,
  lang,
  navigateTo,
  onSelectProduct,
  t,
}) => {
  return (
    <>
      <SEOSchema />
      <section className="relative min-h-[100vh] md:min-h-[90vh] flex items-center" data-header-theme="dark">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="AXUM TIBEB Hero"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={i === 0 ? 'high' : 'auto'}
              width={1600}
              height={1000}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:pt-16 md:pb-16 w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="mt-8 md:mt-12 bg-black/25 backdrop-blur-md border border-white/20 rounded-[28px] p-5 md:p-7 lg:p-8 shadow-2xl ring-1 ring-white/10 md:translate-y-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-3">
                <MapPin className="w-4 h-4 text-[#D4A574]" />
                <span className="text-white text-sm">{t('Now in our new location - Addis Ababa', 'Now in our new location - Addis Ababa')}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                {contactInfo.name}
                <span className="block text-[#D4A574] text-2xl md:text-3xl lg:text-4xl mt-0.5">{contactInfo.nameAmharic}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-5 tracking-wide">
                {t('Timeless Ethiopian Elegance', 'Timeless Ethiopian Elegance')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigateTo('collections')} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4A574] text-[#2C2C2C] text-sm md:text-base font-semibold rounded-lg hover:bg-[#c99a69] transition-all shadow-lg hover:shadow-xl">
                  {t('Explore Collection', 'Explore Collection')} <ChevronRight className="w-5 h-5" />
                </button>
                <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-white/15 transition-all shadow-lg hover:shadow-xl">
                  <MessageCircle className="w-5 h-5" />{t('WhatsApp', 'WhatsApp')}
                </a>
                <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2C2C2C] text-sm md:text-base font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                  <MapPin className="w-5 h-5" />{t('Directions', 'Directions')}
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-[#D4A574]" /><span>{t(contactInfo.hoursTextEn, contactInfo.hoursTextEn)}</span>
              </div>

              <div className="mt-5 hidden md:block">
                <div className="flex gap-4 overflow-hidden">
                  {[0, 1, 2, 3].map((n) => {
                    const p = products[(heroIndex + n) % products.length];
                    return (
                      <button
                        key={p.id}
                        onClick={() => { navigateTo('collections'); onSelectProduct(p.id); }}
                        className="group w-40 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/15 hover:border-white/30 transition-all"
                      >
                        <div className="aspect-[4/5] overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={320} height={400} />
                        </div>
                        <div className="p-3">
                          <p className="text-white text-xs font-semibold leading-snug" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{lang === 'am' ? p.nameAmharic : p.name}</p>
                          <p className="text-[#D4A574] text-[11px] mt-1">{t('Tap to view', 'Tap to view')}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black/25 backdrop-blur-md border border-white/20 ring-1 ring-white/10" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Our Collections</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2 mb-4">Featured Collections<span className="block text-xl md:text-2xl text-[#8B2635] mt-2">Featured collections</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our range of Ethiopian clothing, from traditional habesha kemis to modern fusion styles.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {collections.map((collection) => (
              <button key={collection.id} onClick={() => navigateTo('collections')} className="group relative bg-black/25 backdrop-blur-md border border-white/20 ring-1 ring-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={500} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{collection.name}</h3>
                  <p className="text-[#D4A574] text-sm mb-2">{collection.nameAmharic}</p>
                  <p className="text-white/80 text-sm mb-4">{collection.description}</p>
                  <span className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">View Collection<ChevronRight className="w-4 h-4" /></span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigateTo('collections')} className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C2C2C] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors">View All Collections<ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF9F6]" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2 mb-6">Quality Ethiopian Clothing<span className="block text-xl md:text-2xl text-[#8B2635] mt-2">Crafted with care</span></h2>
              <p className="text-gray-600 mb-8">At AXUM TIBEB, we take pride in offering quality Ethiopian clothing that celebrates our rich cultural heritage while embracing modern style.</p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><CheckCircle className="w-5 h-5 text-[#8B2635]" /></div>
                    <div><h3 className="font-semibold text-[#2C2C2C] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.description}</p></div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button onClick={() => navigateTo('about')} className="inline-flex items-center gap-2 text-[#8B2635] font-semibold hover:gap-3 transition-all">Learn More About Us<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206637624_629083d6.jpg" alt="Ethiopian Traditional Clothing" className="w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={800} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4A574]/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8B2635]/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2 mb-4">Our Location<span className="block text-xl md:text-2xl text-[#8B2635] mt-2">Find us in Addis Ababa</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe src={contactInfo.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AXUM TIBEB Location"></iframe>
            </div>

            <div className="bg-black/25 backdrop-blur-md border border-white/20 ring-1 ring-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">{contactInfo.name} {contactInfo.nameAmharic}</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-[#8B2635]" /></div>
                  <div><h4 className="font-semibold text-[#2C2C2C] mb-1">Address</h4><p className="text-gray-600">{contactInfo.addressLines[0]}<br />{contactInfo.addressLines[1]}<br />{contactInfo.addressLines[2]}</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><Phone className="w-6 h-6 text-[#8B2635]" /></div>
                  <div><h4 className="font-semibold text-[#2C2C2C] mb-1">Phone</h4><a href={`tel:${contactInfo.phoneE164}`} className="text-[#8B2635] hover:underline">{contactInfo.phoneDisplay}</a></div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><Clock className="w-6 h-6 text-[#8B2635]" /></div>
                  <div><h4 className="font-semibold text-[#2C2C2C] mb-1">Hours</h4><p className="text-gray-600">{contactInfo.hoursTextEn}</p></div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B2635] text-white font-semibold rounded-lg hover:bg-[#6d1e2a] transition-colors"><MapPin className="w-5 h-5" />Get Directions</a>
                <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] font-semibold rounded-lg hover:bg-[#2C2C2C] hover:text-white transition-colors"><Phone className="w-5 h-5" />Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#2C2C2C]" data-header-theme="dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">What Our Customers Say</h2>

            <div className="inline-flex flex-col items-center bg-black/25 backdrop-blur-md border border-white/20 ring-1 ring-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (<Star key={i} className={`w-8 h-8 ${i <= 3 ? 'text-yellow-400 fill-yellow-400' : i === 4 ? 'text-yellow-400 fill-yellow-400/50' : 'text-gray-500'}`} />))}
              </div>
              <p className="text-5xl font-bold text-white mb-2">3.7</p>
              <p className="text-white/70 mb-6">Google Rating (3 reviews)</p>
              <button onClick={() => navigateTo('reviews')} className="inline-flex items-center gap-2 text-[#D4A574] font-semibold hover:gap-3 transition-all">View All Reviews<ChevronRight className="w-5 h-5" /></button>
            </div>

            <p className="text-white/60 mt-8 max-w-xl mx-auto">We value your feedback! Visit us and share your experience on Google.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B2635] to-[#6d1e2a]" data-header-theme="dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Visit Us?<span className="block text-xl md:text-2xl text-[#D4A574] mt-2">We are ready to welcome you</span></h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Come explore our collection of quality Ethiopian clothing. Call us, send a WhatsApp message, or get directions to our store.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#8B2635] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"><Phone className="w-5 h-5" />Call {contactInfo.phoneDisplay}</a>
            <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors shadow-lg"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
            <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#8B2635] transition-colors"><MapPin className="w-5 h-5" />Get Directions</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;

