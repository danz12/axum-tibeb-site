import { Award, Heart, Users } from 'lucide-react';

export const contactInfo = {
  name: 'AXUM TIBEB',
  nameAmharic: 'Axum Tibeb',
  phoneDisplay: '091 123 7294',
  phoneE164: '+251911237294',
  whatsappNumber: '251911237294',
  email: 'info@axumtibeb.com',
  addressShort: 'Addis Ababa',
  addressLines: [
    'Comet Luxuarry Apt, 24 beside Sidra Hotel',
    'Kokeb adarash to Shola Gebeya Road, 24',
    'Addis Ababa, Ethiopia',
  ],
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Comet+Luxuarry+Apt+24+beside+Sidra+Hotel+Kokeb+adarash+to+Shola+Gebeya+Road+Addis+Ababa',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7636!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMTkuNCJOIDM4wrA0NSc0OS4wIkU!5e0!3m2!1sen!2set!4v1234567890',
  hoursTextShortEn: 'Open until 7:00 PM',
  hoursTextEn: 'Open now - Closes 7:00 PM',
  openingHours: {
    opens: '09:00',
    closes: '19:00',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
};

export const socialLinks = {
  facebookUrl: null,
  instagramUrl: null,
  whatsappUrl: `https://wa.me/${contactInfo.whatsappNumber}`,
};

export const heroImages = [
  'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206555326_59da8794.jpg',
  'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206637624_629083d6.jpg',
  'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206622007_bc7e006c.jpg',
  'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206592260_84ad3147.jpg',
];

export const collections = [
  { id: 1, name: 'Traditional Wear', nameAmharic: 'Traditional Wear', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206575168_2df47493.png', description: 'Authentic Ethiopian traditional clothing' },
  { id: 2, name: 'Modern Ethiopian Styles', nameAmharic: 'Modern Ethiopian Styles', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206592260_84ad3147.jpg', description: 'Contemporary designs with Ethiopian flair' },
  { id: 3, name: 'Dresses', nameAmharic: 'Dresses', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206607713_b9d15a7d.jpg', description: 'Elegant dresses for every occasion' },
  { id: 4, name: "Men's Wear", nameAmharic: "Men's Wear", image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206622007_bc7e006c.jpg', description: 'Quality clothing for men' },
  { id: 5, name: "Women's Wear", nameAmharic: "Women's Wear", image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206637624_629083d6.jpg', description: 'Beautiful styles for women' },
  { id: 6, name: 'Accessories', nameAmharic: 'Accessories', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206666350_29ce98ec.png', description: 'Complete your look with our accessories' },
];

export const products = [
  { id: 1, name: 'Classic Habesha Kemis', nameAmharic: 'Classic Habesha Kemis', category: 'traditional', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206575168_2df47493.png', description: 'Traditional white cotton dress with colorful tibeb embroidery at the hem and neckline.', note: 'Visit store for pricing and availability' },
  { id: 2, name: 'Modern Fusion Dress', nameAmharic: 'Modern Fusion Dress', category: 'modern', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206592260_84ad3147.jpg', description: 'Contemporary dress with subtle traditional tibeb accents for a modern Ethiopian look.', note: 'Visit store for pricing and availability' },
  { id: 3, name: 'Elegant Evening Dress', nameAmharic: 'Elegant Evening Dress', category: 'dresses', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206607713_b9d15a7d.jpg', description: 'Beautiful flowing gown with traditional embroidery details in rich burgundy and gold.', note: 'Visit store for pricing and availability' },
  { id: 4, name: "Men's Traditional Set", nameAmharic: "Men's Traditional Set", category: 'mens', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206622007_bc7e006c.jpg', description: 'Elegant white cotton shirt with tibeb embroidery, paired with traditional pants.', note: 'Visit store for pricing and availability' },
  { id: 5, name: "Women's Habesha Dress", nameAmharic: "Women's Habesha Dress", category: 'womens', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206637624_629083d6.jpg', description: 'Beautiful habesha kemis with colorful tibeb patterns, traditional yet stylish design.', note: 'Visit store for pricing and availability' },
  { id: 6, name: 'Traditional Scarf', nameAmharic: 'Traditional Scarf', category: 'accessories', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206666350_29ce98ec.png', description: 'Handwoven scarf with tibeb patterns in gold and burgundy colors.', note: 'Visit store for pricing and availability' },
  { id: 7, name: 'Festive Habesha Kemis', nameAmharic: 'Festive Habesha Kemis', category: 'traditional', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206575168_2df47493.png', description: 'Special occasion traditional dress with intricate embroidery work.', note: 'Visit store for pricing and availability' },
  { id: 8, name: 'Contemporary Blouse', nameAmharic: 'Contemporary Blouse', category: 'modern', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206592260_84ad3147.jpg', description: 'Modern blouse with Ethiopian-inspired design elements.', note: 'Visit store for pricing and availability' },
  { id: 9, name: 'Casual Day Dress', nameAmharic: 'Casual Day Dress', category: 'dresses', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206607713_b9d15a7d.jpg', description: 'Comfortable dress perfect for everyday wear with subtle traditional touches.', note: 'Visit store for pricing and availability' },
  { id: 10, name: "Men's Modern Shirt", nameAmharic: "Men's Modern Shirt", category: 'mens', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206622007_bc7e006c.jpg', description: 'Modern shirt with Ethiopian design accents for a contemporary look.', note: 'Visit store for pricing and availability' },
  { id: 11, name: "Women's Casual Outfit", nameAmharic: "Women's Casual Outfit", category: 'womens', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206637624_629083d6.jpg', description: 'Stylish casual wear with Ethiopian-inspired patterns.', note: 'Visit store for pricing and availability' },
  { id: 12, name: 'Woven Belt', nameAmharic: 'Woven Belt', category: 'accessories', image: 'https://d64gsuwffb70l.cloudfront.net/6964b06ff495a4b5c83a26f6_1768206666350_29ce98ec.png', description: 'Handcrafted woven belt with traditional patterns.', note: 'Visit store for pricing and availability' },
];

export const categories = [
  { id: 'all', name: 'All Collections', nameAmharic: 'All Collections' },
  { id: 'traditional', name: 'Traditional Wear', nameAmharic: 'Traditional Wear' },
  { id: 'modern', name: 'Modern Styles', nameAmharic: 'Modern Styles' },
  { id: 'dresses', name: 'Dresses', nameAmharic: 'Dresses' },
  { id: 'mens', name: "Men's Wear", nameAmharic: "Men's Wear" },
  { id: 'womens', name: "Women's Wear", nameAmharic: "Women's Wear" },
  { id: 'accessories', name: 'Accessories', nameAmharic: 'Accessories' },
];

export const whyChooseUs = [
  { title: 'Quality Fabrics', description: 'We source quality materials for all our clothing items' },
  { title: 'Local Style', description: 'Authentic Ethiopian designs that celebrate our heritage' },
  { title: 'Helpful Service', description: 'Our friendly staff is here to assist you' },
  { title: 'Convenient Location', description: 'Easy to find, located near Sidra Hotel' },
];

export const values = [
  { icon: Heart, title: 'Quality First', description: 'We carefully select quality fabrics and materials for all our clothing items.' },
  { icon: Users, title: 'Customer Care', description: 'Our friendly staff is dedicated to helping you find the perfect outfit.' },
  { icon: Award, title: 'Authentic Style', description: 'We celebrate Ethiopian heritage through authentic traditional and modern designs.' },
];


