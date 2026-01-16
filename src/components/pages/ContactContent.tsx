import React from 'react';
import { CheckCircle, Clock, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import { contactInfo } from '@/data/siteData';

type FormData = {
  name: string;
  phone: string;
  message: string;
};

type ContactContentProps = {
  formData: FormData;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitted: boolean;
  t: (en: string, am: string) => string;
};

const ContactContent: React.FC<ContactContentProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  isSubmitted,
  t,
}) => {
  return (
    <>
      <SEOSchema title="Contact - AXUM TIBEB | Ethiopian Clothing Store Addis Ababa" description="Contact AXUM TIBEB - Call 091 123 7294, WhatsApp us, or visit our store." />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-[#2C2C2C]" data-header-theme="dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Get in Touch<span className="block text-2xl md:text-3xl text-[#D4A574] mt-2">AXUM TIBEB</span></h1>
            <p className="text-white/70 text-lg">We'd love to hear from you. Call us, send a message, or visit our store.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">Contact Information<span className="block text-lg text-[#8B2635] mt-1">Reach us anytime</span></h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a href={`tel:${contactInfo.phoneE164}`} className="flex items-center gap-4 p-4 bg-[#8B2635] text-white rounded-xl hover:bg-[#6d1e2a] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"><Phone className="w-6 h-6" /></div>
                  <div><p className="font-semibold">Call Now</p><p className="text-white/80 text-sm">{contactInfo.phoneDisplay}</p></div>
                </a>
                <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#25D366] text-white rounded-xl hover:bg-[#1da851] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"><MessageCircle className="w-6 h-6" /></div>
                  <div><p className="font-semibold">WhatsApp</p><p className="text-white/80 text-sm">Send a message</p></div>
                </a>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><MapPin className="w-6 h-6 text-[#8B2635]" /></div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Address</h3>
                    <p className="text-gray-600">{contactInfo.addressLines[0]}<br />{contactInfo.addressLines[1]}<br />{contactInfo.addressLines[2]}</p>
                    <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#8B2635] font-medium text-sm mt-2 hover:underline">Get Directions<MapPin className="w-4 h-4" /></a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#8B2635]/10 flex items-center justify-center"><Clock className="w-6 h-6 text-[#8B2635]" /></div>
                  <div><h3 className="font-semibold text-[#2C2C2C] mb-1">Store Hours</h3><p className="text-gray-600">{contactInfo.hoursTextEn}</p></div>
                </div>
              </div>

              <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#2C2C2C] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors"><MapPin className="w-5 h-5" />Get Directions on Google Maps</a>
            </div>

            <div>
              <div className="bg-[#FAF9F6] rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#2C2C2C] mb-2">Send Us a Message<span className="block text-lg text-[#8B2635] mt-1">We respond quickly</span></h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">Your Name <span className="text-[#8B2635]">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#8B2635]/20 focus:border-[#8B2635] transition-colors`} placeholder="Enter your name" />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">Phone Number <span className="text-[#8B2635]">*</span></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#8B2635]/20 focus:border-[#8B2635] transition-colors`} placeholder="e.g., 091 123 4567" />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">Message <span className="text-[#8B2635]">*</span></label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-[#8B2635]/20 focus:border-[#8B2635] transition-colors resize-none`} placeholder="How can we help you?"></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#8B2635] text-white font-semibold rounded-lg hover:bg-[#6d1e2a] transition-colors"><Send className="w-5 h-5" />Send Message</button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 text-sm mb-3">Prefer to message us directly?</p>
                  <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#25D366] font-medium hover:underline"><MessageCircle className="w-5 h-5" />Chat with us on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF9F6]" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#2C2C2C]">Find Us<span className="block text-lg text-[#8B2635] mt-1">AXUM TIBEB</span></h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe src={contactInfo.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AXUM TIBEB Location"></iframe>
          </div>
          <div className="mt-6 text-center">
            <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B2635] text-white font-semibold rounded-lg hover:bg-[#6d1e2a] transition-colors"><MapPin className="w-5 h-5" />Open in Google Maps</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;

