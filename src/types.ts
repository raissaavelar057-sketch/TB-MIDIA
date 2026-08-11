export interface PlanItem {
  id: 'estrategica' | 'performance';
  name: string;
  badge?: string;
  tagline: string;
  frequencyTag: string;
  postsStatic: string;
  postsVideo: string;
  features: string[];
  pricePix: number;
  priceCard: number;
  highlight?: boolean;
}

export interface ProposalSettings {
  clientName: string;
  whatsappNumber: string;
  discountPix: number; // e.g. percentage discount or fixed
  companyName: string;
  customLogoUrl?: string;
  customShowcaseImageUrl?: string;
  customGalleryImages?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
