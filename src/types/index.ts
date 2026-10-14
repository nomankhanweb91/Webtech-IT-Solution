export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  imageUrl: string;
  deliverables: string[];
  techStack: string[];
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  category: string;
  iconName: string;
  imageUrl: string;
  keyFeatures: string[];
  highlights: { title: string; detail: string }[];
  targetAudience: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  category: 'Business & Tech' | 'Commerce & Mobility' | 'Media & Lifestyle' | 'Health & Public Sector';
  iconName: string;
  imageUrl: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  techCapabilities: string[];
  keyModules: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  category: string;
  clientLocation: string;
  year: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  results: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  content: string;
}
