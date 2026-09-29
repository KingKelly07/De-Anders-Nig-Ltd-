import type { ServiceItem, InvestmentPlan, FleetMediaItem, OfficeLocation } from '../types';

export const COMPANY_INFO = {
  name: 'DE ANDERS NIG LTD',
  tagline: 'Your Journey, Our Priority!',
  subTagline: 'Empowering lives through our services',
  phones: ['07071707935', '07034435285'], 
  whatsappNumbers: ['07034435285', '+48537119307'],
  whatsappLinkPrimary: 'https://wa.me/2347034435285?text=Hello%20DE%20ANDERS%20NIG%20LTD,%20I%20would%20like%20to%20make%20an%20enquiry.',
  email: 'deandersnigerialimited@gmail.com',
  instagramHandles: ['@Deandersnigltd'],
};

export const DAILY_ROUTES = [
  { from: 'Umuahia', to: 'Owerri', status: 'Daily Scheduled Travels & Charter' },
  { from: 'Owerri', to: 'Onitsha', status: 'Daily Scheduled Travels & Charter' },
  { from: 'Umuahia', to: 'Aba', status: 'Daily Scheduled Travels & Charter' },
  { from: 'Umuahia', to: 'Enugu', status: 'Bus Charter Service Available' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'daily-travel',
    title: 'Daily Inter-City Travels',
    subtitle: 'Safe • Comfortable • On Time',
    description:
      'Reliable daily passenger transport across key South-East corridors in well-maintained buses operated by vetted professional drivers.',
    highlights: [
      'Umuahia ↔ Owerri daily operations',
      'Owerri ↔ Onitsha regular transit',
      'Umuahia ↔ Aba commuter routes',
      'Umuahia ↔ Enugu route coverage',
    ],
    badge: 'Regular Travel',
  },
  {
    id: 'charter-service',
    title: 'Bus & Keke Charter Service',
    subtitle: 'Convenient & Reliable Private Hire',
    description:
      'Dedicated charter services for weddings, corporate events, church programs, family excursions, and group logistics using our fleet of buses and tricycles (Keke).',
    highlights: [
      'Full bus charter for inter-state & local events',
      'Keke charter for flexible urban & community movement',
      'Professional, route-experienced drivers included',
      'Punctual pickup and safe return guarantee',
    ],
    badge: 'Private Charter',
  },
  {
    id: 'hire-purchase',
    title: 'Vehicle & Keke Hire Purchase',
    subtitle: 'Drive to Own Empowerment Program',
    description:
      'Structured Hire Purchase plans enabling hardworking drivers and transport operators to acquire brand-new or well-maintained buses and Keke with flexible installment remittances.',
    highlights: [
      'Brand-new & road-ready Tricycles (Keke) and Buses',
      'Transparent installment structure with no hidden fees',
      'Full ownership transfer upon completion',
      'Dedicated operational support from DE ANDERS NIG LTD',
    ],
    badge: 'Hire Purchase',
  },
  {
    id: 'transport-investment',
    title: 'Commercial Transport Investment',
    subtitle: 'Get Up To 48% Returns on Investment',
    description:
      'Earn attractive, steady weekly returns while supporting modern commercial transportation across Keke and Bus fleet operations.',
    highlights: [
      'Keke Investment: Invest ₦4M, Get ₦6M (74 weeks)',
      'Bus Investment: Invest ₦8.5M, Get ₦12.6M (21 months)',
      'Protected capital & transparent management process',
      'Consistent weekly payouts with 24/7 support',
    ],
    badge: 'Up to 48% ROI',
  },
];

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'keke-plan',
    title: 'Keke Investment Plan',
    vehicleType: 'Keke',
    investAmount: '₦4,000,000',
    returnAmount: '₦6,000,000',
    weeklyPayout: '₦81,082 weekly',
    durationText: '74 Weeks (1 Year & 6.5 Months)',
    roiPercentage: 'Up to 48% ROI',
    benefits: [
      'Reliable and efficient Keke operations',
      'Steady weekly returns (₦81,082 every week)',
      'Support for sustainable urban mobility',
      'Your capital is protected and well managed',
    ],
    accentColor: 'blue',
  },
  {
    id: 'bus-plan',
    title: 'Bus Investment Plan',
    vehicleType: 'Bus',
    investAmount: '₦8,500,000',
    returnAmount: '₦12,600,000',
    weeklyPayout: '₦150,000 weekly',
    durationText: '21 Months (1 Year & 9 Months)',
    roiPercentage: 'Up to 48% ROI',
    benefits: [
      'Modern, well-maintained commercial buses',
      'Consistent ₦150,000 weekly returns',
      'Transparent & secure investment process',
      '24/7 dedicated investor customer support',
    ],
    accentColor: 'green',
  },
];

export const FLEET_MEDIA: FleetMediaItem[] = [
  {
    id: 'video-yellow-keke',
    title: 'Branded Yellow Keke Fleet (Units 031 – 037+)',
    category: 'Video',
    vehicleCategory: 'Keke Fleet',
    src: '/keke-yellow-fleet.mp4',
    description:
      'Walkaround of our brand-new yellow commercial tricycles stenciled with DE ANDERS NIG. LTD fleet numbers ready for deployment and hire purchase.',
    badgeText: 'Live Fleet Video',
  },
  {
    id: 'video-bus-convoy',
    title: 'DE ANDERS NIG LTD Commercial Bus Fleet Lineup',
    category: 'Video',
    vehicleCategory: 'Bus Fleet',
    src: '/bus-fleet.mp4',
    description:
      'Our fleet of branded yellow/green, silver, and maroon passenger buses lined up at our operational base for daily inter-city travel and charter services.',
    badgeText: 'Live Fleet Video',
  },
  {
    id: 'video-green-keke',
    title: 'New Green & Maroon Keke Tricycle Fleet',
    category: 'Video',
    vehicleCategory: 'Keke Fleet',
    src: '/keke-green-fleet.mp4',
    description:
      'Inspection of our newly acquired green and maroon commercial Keke units with factory-wrapped seats parked at the company compound.',
    badgeText: 'Live Fleet Video',
  },
  {
    id: 'flyer-services',
    title: 'Official Travel, Charter & Hire Purchase Flyer',
    category: 'Flyer',
    vehicleCategory: 'Official Flyer',
    src: '/services-flyer.jpg',
    description:
      'Overview of our daily travel routes (Umuahia, Owerri, Onitsha, Aba, Enugu), bus charter services, and vehicle hire purchase offerings.',
    badgeText: 'Official Service Flyer',
  },
  {
    id: 'flyer-investment',
    title: 'Official Commercial Transport Investment Flyer',
    category: 'Flyer',
    vehicleCategory: 'Official Flyer',
    src: '/investment-flyer.jpg',
    description:
      'Full breakdown of our Keke Investment (₦4M to ₦6M) and Bus Investment (₦8.5M to ₦12.6M) packages offering up to 48% returns on investment.',
    badgeText: 'Official Investment Flyer',
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'main-office',
    type: 'Main Office',
    name: 'Obowo Headquarters (Main Office)',
    address: '7/12 (Seven & Half Junction) Umuagu Obowo',
    cityState: 'Imo State, Nigeria',
  },
  {
    id: 'umuahia-branch',
    type: 'Branch Office',
    name: 'Umuahia Branch Office',
    address: 'No. 4 Ogurube Layout, Secretariat Road, Umuahia',
    cityState: 'Abia State, Nigeria',
  },
  {
    id: 'onuimo-branch',
    type: 'Branch Office',
    name: 'Onuimo Branch Office',
    address: 'No. 14 Malaysia Timber Market, Onuimo Obowo',
    cityState: 'Imo State, Nigeria',
  },
];