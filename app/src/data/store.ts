// ============================================================
// DOOR TO DOOR NEED - DATA CONFIG
// ============================================================
// EDIT THIS FILE TO UPDATE PRODUCTS, CATEGORIES, AND CONTENT
// All prices are in Bangladeshi Taka (৳)
// ============================================================

export interface Product {
  id: string;
  name: string;
  categories: string[];
  price: number; // discounted/current price
  originalPrice: number;
  image: string;
  discount: number; // percentage
  soldOut?: boolean;
}

export interface Category {
  id: string;
  name: string;
  productCount: number;
  icon: string; // lucide icon name
}

export const CATEGORIES: Category[] = [
  { id: 'special-offers', name: 'Special Offers', productCount: 14, icon: 'Percent' },
  { id: 'beauty', name: 'Beauty', productCount: 2, icon: 'Sparkles' },
  { id: 'fashion', name: 'Fashion Accessories', productCount: 2, icon: 'Glasses' },
  { id: 'foods', name: 'Foods & Beverages', productCount: 3, icon: 'Coffee' },
  { id: 'gadget', name: 'Gadget', productCount: 13, icon: 'Smartphone' },
  { id: 'grooming', name: 'Grooming', productCount: 4, icon: 'Scissors' },
  { id: 'home', name: 'Home Accessories', productCount: 3, icon: 'Home' },
  { id: 'kids', name: 'Kids', productCount: 2, icon: 'Baby' },
  { id: 'kitchen', name: 'Kitchen Accessories', productCount: 11, icon: 'UtensilsCrossed' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Bright Light LED Torch',
    categories: ['Gadget', 'Special Offers'],
    price: 1150,
    originalPrice: 2550,
    image: '/images/product-1.jpg',
    discount: 55,
  },
  {
    id: 'p2',
    name: 'Instant Hair Color Shampoo',
    categories: ['Beauty'],
    price: 550,
    originalPrice: 950,
    image: '/images/product-2.jpg',
    discount: 41,
  },
  {
    id: 'p3',
    name: 'Hot Water Tap',
    categories: ['Gadget', 'Kitchen Accessories'],
    price: 1650,
    originalPrice: 2950,
    image: '/images/product-10.jpg',
    discount: 41,
  },
  {
    id: 'p4',
    name: 'Portable Rechargeable Fan',
    categories: ['Gadget', 'Special Offers'],
    price: 999,
    originalPrice: 1500,
    image: '/images/product-3.jpg',
    discount: 33,
  },
  {
    id: 'p5',
    name: 'Kitchen Cleaner Spray',
    categories: ['Kitchen Accessories'],
    price: 450,
    originalPrice: 650,
    image: '/images/product-4.jpg',
    discount: 35,
  },
  {
    id: 'p6',
    name: 'Smart Massage Gun',
    categories: ['Gadget', 'Special Offers'],
    price: 899,
    originalPrice: 3200,
    image: '/images/product-5.jpg',
    discount: 72,
  },
  {
    id: 'p7',
    name: 'Automatic Electric Juicer',
    categories: ['Kitchen Accessories'],
    price: 1650,
    originalPrice: 2500,
    image: '/images/product-6.jpg',
    discount: 34,
  },
  {
    id: 'p8',
    name: '16 in 1 Multifunction Vegetable Cutter',
    categories: ['Kitchen Accessories'],
    price: 950,
    originalPrice: 1650,
    image: '/images/product-7.jpg',
    discount: 42,
  },
  {
    id: 'p9',
    name: 'Mosquito Bat Rechargeable',
    categories: ['Gadget', 'Home Accessories'],
    price: 799,
    originalPrice: 1200,
    image: '/images/product-8.jpg',
    discount: 33,
  },
  {
    id: 'p10',
    name: 'Smart Beanie Hat',
    categories: ['Fashion Accessories'],
    price: 1250,
    originalPrice: 2600,
    image: '/images/product-9.jpg',
    discount: 34,
  },
];

export const TRUST_FEATURES = [
  {
    icon: 'CheckCircle',
    title: 'Best Quality',
    subtitle: '100% Quality Satisfaction',
  },
  {
    icon: 'Truck',
    title: 'Fast Delivery',
    subtitle: 'Delivery within 5 days',
  },
  {
    icon: 'Headphones',
    title: '24/7 Support',
    subtitle: 'Unlimited help desk',
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Truck',
    title: 'Fast Delivery',
    subtitle: 'Delivery within 7 days',
  },
  {
    icon: 'CheckCircle',
    title: 'Best Quality',
    subtitle: '100% quality satisfaction',
  },
  {
    icon: 'Headphones',
    title: '24/7 support',
    subtitle: 'Unlimited help desk',
  },
];

export const FOOTER_LINKS = {
  forCustomer: [
    { label: 'Corporate Deal', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Refund and Returns', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

export const SITE_INFO = {
  name: 'Door To Door Need',
  tagline: 'Making Life Easier',
  phone: '09613-821740',
  description:
    'Door To Door Need is a Lifestyle Easier Brand that helps you build a clean, organized, stress-free home with smart daily solutions.',
  copyright: `Door To Door Need. All rights reserved.`,
};
