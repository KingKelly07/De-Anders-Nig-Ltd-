import React, { useState } from 'react';
import {
  Film,
  Image as ImageIcon,
  ShieldCheck,
  Phone,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import type { TabId } from '../types';
import { COMPANY_INFO, FLEET_MEDIA } from '../data/companyData';

interface FleetTabProps {
  setActiveTab: (tab: TabId) => void;
}

export const FleetTab: React.FC<FleetTabProps> = ({ setActiveTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<
    'All' | 'Keke Fleet' | 'Bus Fleet' | 'Official Flyer'
  >('All');

  const goToTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredMedia =
    selectedFilter === 'All'
      ? FLEET_MEDIA
      : FLEET_MEDIA.filter((item) => item.vehicleCategory === selectedFilter);

  const filterButtons: ('All' | 'Keke Fleet' | 'Bus Fleet' | 'Official Flyer')[] = [
    'All',
    'Keke Fleet',
    'Bus Fleet',
    'Official Flyer',
  ];

  return (
    <div className="space-y-14 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-14 border-b-4 border-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1.5 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Verified Physical Fleet • Buses & Commercial Keke</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Live Fleet Videos & Official Gallery
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            Inspect our real fleet of branded passenger buses and commercial tricycles (Keke) operated by{' '}
            <strong className="text-white">{COMPANY_INFO.name}</strong> across our daily travel corridors, charter services, hire purchase, and investment portfolios.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Media Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((category) => {
              const active = selectedFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    active
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {category === 'All' ? 'All Videos & Flyers' : category}
                </button>
              );
            })}
          </div>

          <span className="text-xs font-bold text-slate-500">
            Showing {filteredMedia.length} verified media items
          </span>
        </div>

        {/* Videos & Flyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* Media Container */}
                <div className="bg-slate-950 relative aspect-[4/5] flex items-center justify-center overflow-hidden">
                  {item.category === 'Video' ? (
                    <video
                      src={item.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}

                  {/* Top Category Pill */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full shadow-md ${
                        item.category === 'Video'
                          ? 'bg-brand-accent text-white'
                          : 'bg-brand-primary text-white'
                      }`}
                    >
                      {item.category === 'Video' ? (
                        <Film className="w-3.5 h-3.5" />
                      ) : (
                        <ImageIcon className="w-3.5 h-3.5" />
                      )}
                      {item.badgeText}
                    </span>
                  </div>
                </div>

                {/* Card Description */}
                <div className="p-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                    {item.vehicleCategory}
                  </span>
                  <h2 className="text-lg font-extrabold text-brand-dark mt-1">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="px-6 pb-6 pt-2">
                {item.category === 'Flyer' ? (
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-brand-primary hover:text-white text-brand-dark font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Full-Screen Flyer</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Verified On-Ground Fleet of {COMPANY_INFO.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Call-to-Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Ready to Partner, Charter, or Travel?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Inspect Our Vehicles in Person or Start Your Investment Today
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Visit our Main Office at Umuagu Obowo or our branches in Umuahia and Onuimo to see our fleet firsthand.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <button
              onClick={() => goToTab('investments')}
              className="bg-brand-accent hover:bg-orange-600 text-white font-extrabold text-sm px-5 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer"
            >
              <TrendingUp className="w-4 h-4" />
              <span>View 48% ROI Plans</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone[0]}`}
              className="bg-white text-brand-dark hover:bg-amber-400 font-extrabold text-sm px-5 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone[0]}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};