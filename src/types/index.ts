export interface EventCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subEvents: SubEvent[];
}

export interface SubEvent {
  id: string;
  name: string;
  description: string;
  image: string;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  items: PackageItem[];
  image: string;
  category: string;
}

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  maxQuantity: number;
  image: string;
}

export interface Venue {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  price: number;
  capacity: number;
  images: string[];
  amenities: string[];
  rating: number;
  reviews: Review[];
  contact: ContactInfo;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  priceRange: string;
  rating: number;
  reviews: Review[];
  contact: ContactInfo;
  image: string;
  location: string;
}

export interface EventPlan {
  id: string;
  eventType: string;
  subEvent: string;
  selectedPackage: Package;
  customizations: PackageItem[];
  totalPrice: number;
  date: string;
  status: 'draft' | 'confirmed' | 'completed';
}

