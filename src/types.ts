export type TabId = 'home' | 'services' | 'investments' | 'fleet' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
}

export interface InvestmentPlan {
  id: string;
  title: string;
  vehicleType: 'Keke' | 'Bus';
  investAmount: string;
  returnAmount: string;
  weeklyPayout: string;
  durationText: string;
  roiPercentage: string;
  benefits: string[];
  accentColor: 'blue' | 'green';
}

export interface FleetMediaItem {
  id: string;
  title: string;
  category: 'Video' | 'Flyer';
  vehicleCategory: 'Bus Fleet' | 'Keke Fleet' | 'Official Flyer';
  src: string;
  description: string;
  badgeText: string;
}

export interface OfficeLocation {
  id: string;
  type: 'Main Office' | 'Branch Office';
  name: string;
  address: string;
  cityState: string;
}