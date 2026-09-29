import React from 'react';
import {
  Bus,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  KeyRound,
  Users,
  Clock,
  TrendingUp,
  PlayCircle,
} from 'lucide-react';
import type { TabId } from '../types';
import { COMPANY_INFO, DAILY_ROUTES } from '../data/companyData';

interface ServicesTabProps {
  setActiveTab: (tab: TabId) => void;
}

export const ServicesTab: React.FC<ServicesTabProps> = ({ setActiveTab }) => {
  const goToTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-14 border-b-4 border-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full mb-3">
            Travel • Transport • Charter • Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Transport, Charter & Hire Purchase Services
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            At <strong className="text-white">{COMPANY_INFO.name}</strong>, your journey is our priority. We provide safe, comfortable, and punctual road transportation, flexible vehicle charter, and empowering hire purchase programs.
          </p>
        </div>
      </section>

      {/* Section 1: Daily Inter-City Travels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                1. Regular Passenger Transit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-2">
                Daily Inter-City Travels Across the South-East
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Enjoy safe, comfortable, and on-time daily bus trips between major commercial hubs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="bg-brand-accent hover:bg-orange-600 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phones[0]}</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappLinkPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Active Corridors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {DAILY_ROUTES.map((route, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-50 p-5 border border-slate-200 hover:border-brand-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase mb-3">
                    <span>Active Corridor</span>
                    <MapPin className="w-4 h-4 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark">
                    {route.from} <span className="text-brand-accent">↔</span> {route.to}
                  </h3>
                  <p className="text-xs font-semibold text-blue-900 bg-blue-100/80 px-2.5 py-1 rounded mt-3 inline-block">
                    {route.status}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Safe • Comfortable • On Time</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Bus Charter & Hire Purchase Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card A: Bus & Keke Charter Service */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-brand-primary flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent">
                2. Private & Group Hire
              </span>
              <h2 className="text-2xl font-extrabold text-brand-dark mt-1">
                Reliable Bus & Keke Charter Service
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you are planning a wedding, church convention, school excursion, family trip, or corporate retreat, our fleet of well-maintained buses and commercial tricycles (Keke) is available for full charter.
              </p>

              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Dedicated charter across Umuahia, Owerri, Onitsha, Aba, Enugu & beyond</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clean, comfortable Toyota Hiace & shuttle minibuses</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Keke fleet charter for convenient & affordable local event logistics</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Experienced, safety-vetted company drivers</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="bg-brand-primary hover:bg-blue-800 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Charter Quote</span>
              </a>
              <button
                onClick={() => goToTab('fleet')}
                className="bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-brand-primary" />
                <span>Inspect Fleet Videos</span>
              </button>
            </div>
          </div>

          {/* Card B: Vehicle & Keke Hire Purchase */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-brand-accent flex items-center justify-center mb-5">
                <KeyRound className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                3. Driver Ownership Scheme
              </span>
              <h2 className="text-2xl font-extrabold text-brand-dark mt-1">
                Vehicle & Keke Hire Purchase Program
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Empowering lives through sustainable mobility! Our Hire Purchase program allows vetted, hardworking commercial drivers to operate our brand-new or road-ready Keke and buses while paying in structured installments toward full ownership.
              </p>

              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Brand-new stenciled Keke units & commercial passenger buses</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Clear, transparent installment agreements with no hidden charges</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Smooth transfer of vehicle ownership upon completion</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Walk-in applications at our Obowo, Umuahia & Onuimo offices</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <button
                onClick={() => goToTab('contact')}
                className="bg-brand-accent hover:bg-orange-600 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Our Offices to Apply</span>
              </button>
              <button
                onClick={() => goToTab('investments')}
                className="bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Or Invest for 48% ROI</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Full Official Services Flyer Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-400/30 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>Safe Trips • Reliable Service • Your Trust Matters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Official Services Bulletin
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              View or save our official service flyer for quick access to our routes, charter offerings, hire purchase details, and direct customer care contacts.
            </p>

            <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-sm">
              <p className="font-bold text-amber-400">Direct Hotlines & Socials:</p>
              <p>📞 Phone: {COMPANY_INFO.phones.join(' / ')}</p>
              <p>💬 WhatsApp: {COMPANY_INFO.whatsappNumbers.join(' / ')}</p>
              <p>📸 Instagram: {COMPANY_INFO.instagramHandles.join(' • ')}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/services-flyer.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-dark hover:bg-amber-400 font-extrabold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Open Full-Size Flyer
              </a>
              <button
                onClick={() => goToTab('fleet')}
                className="bg-brand-primary hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <Bus className="w-4 h-4" />
                <span>View Buses & Keke Videos</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="/services-flyer.jpg"
              alt="DE ANDERS NIG LTD Official Services Flyer"
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl border border-slate-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};