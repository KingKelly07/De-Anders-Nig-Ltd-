import React from 'react';
import {
  Bus,
  TrendingUp,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Handshake,
  Award,
} from 'lucide-react';
import type { TabId } from '../types';
import {
  COMPANY_INFO,
  CORE_SERVICES,
  DAILY_ROUTES,
  INVESTMENT_PLANS,
  OFFICE_LOCATIONS,
} from '../data/companyData';

interface HomeTabProps {
  setActiveTab: (tab: TabId) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ setActiveTab }) => {
  const goToTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-dark text-white overflow-hidden border-b-4 border-brand-accent">
        {/* Background decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-brand-dark opacity-95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Main Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.tagline} • Safe • Comfortable • On Time</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Reliable Road Transport, Charter &{' '}
                <span className="text-amber-400">
                  Profitable Mobility Investments
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Welcome to <strong className="text-white">{COMPANY_INFO.name}</strong>. We connect cities across the South-East with safe daily bus travels, dependable Bus & Keke charter services, driver Hire Purchase schemes, and secure Commercial Transport Investments delivering up to{' '}
                <strong className="text-amber-400">48% returns</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-2">
                <button
                  onClick={() => goToTab('investments')}
                  className="bg-brand-accent hover:bg-orange-600 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>Explore 48% ROI Plans</span>
                </button>

                <button
                  onClick={() => goToTab('services')}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Bus className="w-5 h-5 text-amber-400" />
                  <span>Travel, Charter & Hire Purchase</span>
                </button>

                <button
                  onClick={() => goToTab('fleet')}
                  className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Live Fleet Videos</span>
                </button>
              </div>

              {/* Trust Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-semibold">Safe Trips</span>
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-semibold">Reliable Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="font-semibold">Your Trust Matters</span>
                </div>
              </div>
            </div>

            {/* Right Column: Official Flyer Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 shadow-2xl space-y-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 relative group">
                  <img
                    src="/services-flyer.jpg"
                    alt="DE ANDERS NIG LTD Daily Travels, Bus Charter Service and Hire Purchase Flyer"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Official Company Showcase
                    </p>
                    <p className="text-sm font-bold text-white">
                      Travel • Transport • Charter • Investment
                    </p>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phones[0]}`}
                    className="bg-brand-primary hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Active Daily Travel Corridors Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent">
                Daily Inter-City Operations
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark mt-0.5">
                Our Active Travel & Charter Corridors
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-lg border border-emerald-200 w-fit">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Daily Departures & Full Bus Charter Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {DAILY_ROUTES.map((route, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-600 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase mb-2">
                  <span>Route {index + 1}</span>
                  <Bus className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="text-lg font-extrabold text-brand-dark">
                  {route.from} <span className="text-brand-accent">↔</span> {route.to}
                </p>
                <p className="text-xs font-medium text-slate-600 mt-1.5">
                  {route.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services Overview (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-accent bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark mt-3">
            Our Core Transport & Investment Services
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            From daily commuter transit and private vehicle charter to driver ownership schemes and high-yield fleet investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-brand-primary border border-blue-200">
                    {service.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() =>
                  goToTab(
                    service.id === 'transport-investment' ? 'investments' : 'services'
                  )
                }
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-brand-dark font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {service.id === 'transport-investment'
                    ? 'View Full Investment Breakdown'
                    : 'View Service Details'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Commercial Transport Investment Spotlight (Up to 48% ROI) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-amber-500 text-slate-950 px-3 py-1 rounded-md mb-3">
                Get Up To 48% Returns On Investment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                Invest in Commercial Transportation
              </h2>
              <p className="text-slate-300 mt-2 max-w-2xl text-sm sm:text-base">
                Earn attractive weekly returns while supporting modern transportation solutions. Choose your preferred investment package below:
              </p>
            </div>

            <button
              onClick={() => goToTab('investments')}
              className="bg-brand-accent hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2 w-fit shrink-0 cursor-pointer"
            >
              <span>See Full Investment Flyer & Terms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVESTMENT_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-700">
                    <h3 className="text-xl font-extrabold text-white">
                      {plan.title}
                    </h3>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {plan.roiPercentage}
                    </span>
                  </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-400 block">
                        Invest Capital
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-white mt-1 block">
                        {plan.investAmount}
                      </span>
                    </div>
                    <div className="border-t sm:border-t-0 sm:border-l border-slate-700 pt-3 sm:pt-0 sm:pl-4">
                      <span className="text-xs uppercase font-bold text-emerald-400 block">
                        Total Return (Get)
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 mt-1 block">
                        {plan.returnAmount}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6 bg-blue-950/60 border border-blue-800/70 rounded-xl p-3.5 text-sm">
                    <span className="font-extrabold text-amber-300 block">
                      Payout: {plan.weeklyPayout}
                    </span>
                    <span className="text-slate-300 text-xs">
                      Duration: {plan.durationText}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => goToTab('investments')}
                  className="w-full py-3 rounded-xl bg-white text-brand-dark hover:bg-amber-400 font-extrabold text-sm transition-colors cursor-pointer"
                >
                  View {plan.vehicleType} Investment Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Official Flyers & Office Locations Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-5">
            <img
              src="/investment-flyer.jpg"
              alt="DE ANDERS NIG LTD Commercial Transport Investment Flyer - 48% ROI"
              className="w-full rounded-xl shadow-md border border-slate-200"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full">
              Verified Physical Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Visit Our Offices in Imo & Abia State or Inspect Our Fleet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate with full transparency. Visit our headquarters in Obowo or our branch offices in Umuahia and Onuimo to book a charter, inquire about hire purchase, or discuss our weekly-payout transport investment plans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {OFFICE_LOCATIONS.map((office) => (
                <div
                  key={office.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <MapPin className="w-5 h-5 text-brand-accent mb-2" />
                  <h3 className="text-xs font-extrabold uppercase text-brand-dark">
                    {office.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {office.address}, {office.cityState}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => goToTab('fleet')}
                className="bg-brand-primary hover:bg-blue-800 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Watch Our Live Fleet Videos</span>
              </button>
              <button
                onClick={() => goToTab('contact')}
                className="bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>View All Phone & WhatsApp Lines</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};