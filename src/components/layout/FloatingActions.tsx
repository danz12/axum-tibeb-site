import React from 'react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '@/data/siteData';

type FloatingActionsProps = {
  t: (en: string, am: string) => string;
};

const FloatingActions: React.FC<FloatingActionsProps> = ({ t }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${contactInfo.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label={t('WhatsApp AXUM TIBEB', 'WhatsApp AXUM TIBEB')}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${contactInfo.phoneE164}`}
        className="w-12 h-12 rounded-full bg-[#8B2635] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label={t('Call AXUM TIBEB', 'Call AXUM TIBEB')}
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={contactInfo.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#D4A574] text-[#2C2C2C] flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label={t('Get directions', 'Get directions')}
      >
        <MapPin className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;

