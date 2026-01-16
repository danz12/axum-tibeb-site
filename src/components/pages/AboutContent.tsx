import React from 'react';
import { ChevronRight, MessageCircle, Phone } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import { contactInfo, values } from '@/data/siteData';

type AboutContentProps = {
  navigateTo: (page: string) => void;
};

const AboutContent: React.FC<AboutContentProps> = ({ navigateTo }) => {
  return (
    <>
      <SEOSchema title="About AXUM TIBEB - Ethiopian Clothing Store in Addis Ababa" description="Learn about AXUM TIBEB, your destination for quality Ethiopian clothing in Addis Ababa." />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-[#2C2C2C]" data-header-theme="dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Our Story<span className="block text-2xl md:text-3xl text-[#D4A574] mt-2">AXUM TIBEB</span></h1>
            <p className="text-white/70 text-lg">Welcome to AXUM TIBEB, your destination for quality Ethiopian clothing in Addis Ababa.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206555326_59da8794.jpg" alt="AXUM TIBEB Store" className="w-full h-full object-cover" loading="lazy" decoding="async" width={640} height={800} />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A574]/20 rounded-2xl -z-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6">{contactInfo.name}<span className="block text-xl md:text-2xl text-[#8B2635] mt-2">{contactInfo.nameAmharic}</span></h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p><strong className="text-[#2C2C2C]">We recently moved to this area and are now offering our services here.</strong></p>
                <p>AXUM TIBEB is a clothing store located in Addis Ababa, Ethiopia. We offer a range of Ethiopian clothing including traditional wear, modern Ethiopian styles, dresses, men's and women's wear, and accessories.</p>
                <p>Our store is conveniently located at Comet Luxuarry Apt, 24 beside Sidra Hotel, on Kokeb adarash to Shola Gebeya Road.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B2635] text-white font-semibold rounded-lg hover:bg-[#6d1e2a] transition-colors"><Phone className="w-5 h-5" />Call Us</a>
                <button onClick={() => navigateTo('contact')} className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] font-semibold rounded-lg hover:bg-[#2C2C2C] hover:text-white transition-colors">Contact Us<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#FAF9F6]" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mt-2">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#8B2635]/10 flex items-center justify-center mb-6"><value.icon className="w-7 h-7 text-[#8B2635]" /></div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B2635] to-[#6d1e2a]" data-header-theme="dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Store Today<span className="block text-xl md:text-2xl text-[#D4A574] mt-2">We look forward to your visit</span></h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">We're located at Comet Luxuarry Apt, 24 beside Sidra Hotel. Come explore our collection of quality Ethiopian clothing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#8B2635] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"><Phone className="w-5 h-5" />Call {contactInfo.phoneDisplay}</a>
            <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors shadow-lg"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;

