import React from 'react';
import {MapPin, Phone, Mail, AtSign, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { TabId } from '../types';
import { COMPANY_INFO, OFFICE_LOCATIONS, DAILY_ROUTES } from '../data/companyData';

interface FooterProps {
  setActiveTab: (tab: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
           <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="DE ANDERS NIG LTD Official Logo"
                className="w-12 h-12 rounded-xl object-contain bg-white p-0.5 shadow-md"
              />
              <div>
                <span className="block text-lg font-extrabold text-white tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-xs font-semibold text-amber-400">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering lives through safe daily inter-city transport, reliable Bus & Keke charter services, vehicle hire purchase, and sustainable commercial transport investments with up to 48% ROI.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Safe Trips • Reliable Service • Transparent ROI</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation & Daily Corridors */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Travel, Charter & Hire Purchase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('investments')}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  Commercial Investment (48% ROI)
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('fleet')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Live Fleet Videos & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Office Locations & Contact
                </button>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-2">
              Active Travel Corridors
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {DAILY_ROUTES.map((route, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded border border-slate-700"
                >
                  {route.from} ↔ {route.to}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Office Locations */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Our Offices
            </h3>
            <ul className="space-y-4 text-sm">
              {OFFICE_LOCATIONS.map((office) => (
                <li key={office.id} className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <span className="block font-bold text-white text-xs uppercase tracking-wide">
                      {office.name}
                    </span>
                    <span className="block text-slate-300 text-xs mt-0.5">
                      {office.address}, {office.cityState}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div>
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Contact Us Today
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0]}`}
                    className="font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {COMPANY_INFO.phones[0]}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phones[1]}`}
                    className="font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {COMPANY_INFO.phones[1]}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors break-all text-xs"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <AtSign className="w-4 h-4 text-brand-accent shrink-0" />
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white">{COMPANY_INFO.instagramHandles[0]}</span>
                  {' • '}
                  <span className="font-semibold text-white">{COMPANY_INFO.instagramHandles[1]}</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <p className="text-xs font-semibold text-amber-400">
                Invest Today, Build Tomorrow
              </p>
              <p className="text-xs text-slate-400 mt-1">
                WhatsApp Line: {COMPANY_INFO.whatsappNumbers.join(' / ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="text-slate-500">
            Travel • Transport • Charter • Hire Purchase • Commercial Investment
          </p>
        </div>
      </div>
    </footer>
  );
};