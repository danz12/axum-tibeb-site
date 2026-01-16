import React, { useEffect } from 'react';
import { contactInfo } from '@/data/siteData';

type SEOSchemaProps = {
  title?: string;
  description?: string;
};

const SEOSchema: React.FC<SEOSchemaProps> = ({
  title = "AXUM TIBEB SS-^^? O%% - Clothing Store in Addis Ababa | Traditional Ethiopian Clothing",
  description = "AXUM TIBEB (SS-^^? O%%) is your destination for quality Ethiopian clothing in Addis Ababa. Traditional wear, modern Ethiopian styles, dresses, and accessories. Visit us at Comet Luxuarry Apt or call 091 123 7294.",
}) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name=\"description\"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ClothingStore',
      name: contactInfo.nameAmharic ? `${contactInfo.name} ${contactInfo.nameAmharic}` : contactInfo.name,
      alternateName: contactInfo.name,
      description: 'Quality Ethiopian clothing store offering traditional wear, modern Ethiopian styles, dresses, men\'s and women\'s wear, and accessories.',
      url: window.location.origin,
      telephone: contactInfo.phoneE164,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contactInfo.addressLines[0],
        addressLocality: contactInfo.addressLines[2],
        addressCountry: 'ET',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: contactInfo.openingHours.dayOfWeek,
        opens: contactInfo.openingHours.opens,
        closes: contactInfo.openingHours.closes,
      },
      priceRange: '$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '3.7', reviewCount: '3' },
    };

    let schemaScript = document.querySelector('script[type=\"application/ld+json\"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(localBusinessSchema);
  }, [title, description]);

  return null;
};

export default SEOSchema;

