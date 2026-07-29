export interface LaminateDoorProduct {
  id: string;
  code: string;
  title: string;
  type: string;
  finish: string;
  description: string;
  designStyle: string;
  keySpecs: string[];
}

export interface ProductSubCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
  keyFeatures?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  image: string;
  iconName: string;
  description: string;
  keyFeatures: string[];
  subCategories?: ProductSubCategory[];
}

export interface Client {
  name: string;
  category: 'government' | 'builder' | 'corporate';
  logoUrl?: string;
  description?: string;
  keyProjects?: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}
