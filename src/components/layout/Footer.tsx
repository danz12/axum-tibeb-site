import React from 'react';
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo, socialLinks, type CollectionItem } from '@/data/siteData';

type NavLink = {
  name: string;
  page: string;
};

type FooterProps = {
  collections: CollectionItem[];
  navLinks: NavLink[];
  navigateTo: (page: string) => void;
};

const Footer: React.FC<FooterProps> = ({ collections, navLinks, navigateTo }) => {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{contactInfo.name}</h3>
              <p className="text-[#D4A574] text-lg">{contactInfo.nameAmharic}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Your destination for quality Ethiopian clothing in Addis Ababa. We recently moved to our new location and are excited to serve you.</p>
            <div className="flex gap-4">
              {socialLinks.facebookUrl && (
                <a href={socialLinks.facebookUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A574] transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {socialLinks.instagramUrl && (
                <a href={socialLinks.instagramUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A574] transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              <a href={socialLinks.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A574]">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.page}><button onClick={() => navigateTo(link.page)} className="text-gray-400 hover:text-white transition-colors">{link.name}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A574]">Collections</h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item.id}><button onClick={() => navigateTo('collections')} className="text-gray-400 hover:text-white transition-colors">{item.name}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A574]">Contact Us</h4>
            <ul className="space-y-4">
              <li><a href={`tel:${contactInfo.phoneE164}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"><Phone className="w-5 h-5 mt-0.5 flex-shrink-0" /><span>{contactInfo.phoneDisplay}</span></a></li>
              <li><a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"><MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" /><span className="text-sm">{contactInfo.addressLines[0]}<br />{contactInfo.addressLines[1]}<br />{contactInfo.addressLines[2]}</span></a></li>
              <li className="flex items-start gap-3 text-gray-400"><Clock className="w-5 h-5 mt-0.5 flex-shrink-0" /><span>{contactInfo.hoursTextEn}</span></li>
              <li><a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5 mt-0.5 flex-shrink-0" /><span>{contactInfo.email}</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left"> {new Date().getFullYear()} {contactInfo.name} {contactInfo.nameAmharic}. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

