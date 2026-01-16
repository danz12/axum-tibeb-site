import React from 'react';
import { ExternalLink, MessageCircle, Phone, Star } from 'lucide-react';
import SEOSchema from '@/components/SEOSchema';
import { contactInfo } from '@/data/siteData';

const ReviewsContent: React.FC = () => {
  return (
    <>
      <SEOSchema title="Reviews - AXUM TIBEB | Customer Feedback" description="See what customers say about AXUM TIBEB. Google rating 3.7 with 3 reviews." />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-[#2C2C2C]" data-header-theme="dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-medium text-sm uppercase tracking-wider">Customer Reviews</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">What People Say<span className="block text-2xl md:text-3xl text-[#D4A574] mt-2">Customer feedback</span></h1>
            <p className="text-white/70 text-lg">We value your feedback. Here's what our customers have to say about us.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#FAF9F6] rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Google Reviews</h2>
              <div className="flex justify-center mb-3">
                {[1, 2, 3, 4, 5].map((i) => (<Star key={i} className={`w-10 h-10 ${i <= 3 ? 'text-yellow-400 fill-yellow-400' : i === 4 ? 'text-yellow-400 fill-yellow-400/50' : 'text-gray-300'}`} />))}
              </div>
              <p className="text-6xl font-bold text-[#2C2C2C] mb-2">3.7</p>
              <p className="text-gray-600 mb-6">Based on 3 reviews</p>
              <a href="https://www.google.com/search?q=AXUM+TIBEB+Addis+Ababa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4285F4] font-medium hover:underline">View on Google<ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF9F6]" data-header-theme="light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4">Share Your Experience<span className="block text-xl text-[#8B2635] mt-2">Leave a review today</span></h2>
            <p className="text-gray-600 mb-8">Have you visited AXUM TIBEB? We'd love to hear about your experience.</p>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Leave a Review on Google</h3>
              <p className="text-gray-600 mb-6 text-sm">Click the button below to leave a review on Google. Your honest feedback is appreciated!</p>
              <a href="https://www.google.com/search?q=AXUM+TIBEB+Addis+Ababa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4285F4] text-white font-semibold rounded-lg hover:bg-[#3367d6] transition-colors">Write a Google Review</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B2635] to-[#6d1e2a]" data-header-theme="dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Us Today<span className="block text-xl md:text-2xl text-[#D4A574] mt-2">Visit us in Addis Ababa</span></h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Experience our quality Ethiopian clothing in person. We look forward to serving you!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contactInfo.phoneE164}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#8B2635] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"><Phone className="w-5 h-5" />Call {contactInfo.phoneDisplay}</a>
            <a href={`https://wa.me/${contactInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-colors shadow-lg"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsContent;

