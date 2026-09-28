import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Handshake,
  Headphones,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  PlayCircle,
} from 'lucide-react';
import type { TabId } from '../types';
import {
  COMPANY_INFO,
  INVESTMENT_PLANS,
  OFFICE_LOCATIONS,
} from '../data/companyData';

interface InvestmentsTabProps {
  setActiveTab: (tab: TabId) => void;
}

export const InvestmentsTab: React.FC<InvestmentsTabProps> = ({ setActiveTab }) => {
  const goToTab = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trustPillars = [
    {
      title: 'Secure Investment',
      desc: 'Your capital is protected and well managed.',
      icon: ShieldCheck,
    },
    {
      title: 'Attractive Returns',
      desc: 'Get consistent and profitable returns.',
      icon: TrendingUp,
    },
    {
      title: 'Transparent Process',
      desc: 'Clear terms, no hidden charges.',
      icon: Handshake,
    },
    {
      title: 'Dedicated Support',
      desc: 'Our team is always here for you.',
      icon: Headphones,
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Banner */}
      <section className="bg-brand-dark text-white py-14 border-b-4 border-brand-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-brand-accent text-white px-3.5 py-1.5 rounded-full">
              Get Up To 48% Returns On Investment
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 px-3 py-1.5 rounded-full border border-white/15">
              Safe • Profitable • Sustainable Investment
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
            Invest in Commercial Transportation with{' '}
            <span className="text-amber-400">{COMPANY_INFO.name}</span>
          </h1>

          <p className="text-slate-300 mt-4 max-w-2xl text-sm sm:text-lg leading-relaxed">
            Earn attractive weekly returns while supporting modern transportation solutions. Choose your preferred investment plan—Keke or Bus—and start earning steady weekly payouts.
          </p>
        </div>
      </section>

      {/* 2. Two Profitable Opportunities (Keke & Bus Plans) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INVESTMENT_PLANS.map((plan) => {
            const isKeke = plan.vehicleType === 'Keke';
            return (
              <div
                key={plan.id}
                className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Plan Header Bar */}
                  <div
                    className={`px-6 py-5 text-white flex items-center justify-between ${
                      isKeke ? 'bg-brand-primary' : 'bg-emerald-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300 block">
                        Commercial Mobility Portfolio
                      </span>
                      <h2 className="text-2xl font-extrabold mt-0.5">
                        {plan.title}
                      </h2>
                    </div>
                    <span className="bg-white/20 border border-white/30 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full">
                      {plan.roiPercentage}
                    </span>
                  </div>

                  {/* Main Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                   {/* Invest vs Get Comparison Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                          Invest
                        </span>
                        <span className="text-2xl sm:text-2xl xl:text-3xl font-extrabold text-brand-dark mt-1 block">
                          {plan.investAmount}
                        </span>
                      </div>

                      <div className="border-t sm:border-t-0 sm:border-l border-slate-300 pt-3 sm:pt-0 sm:pl-4">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block">
                          Get (Total Return)
                        </span>
                        <span className="text-2xl sm:text-2xl xl:text-3xl font-extrabold text-emerald-600 mt-1 block">
                          {plan.returnAmount}
                        </span>
                      </div>
                    </div>
                    {/* Weekly Remittance Schedule */}
                    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-amber-50/90 border border-amber-200">
                      <Calendar className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-base sm:text-lg font-extrabold text-brand-dark">
                          {plan.weeklyPayout}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-slate-600">
                          Duration: {plan.durationText}
                        </p>
                      </div>
                    </div>

                    {/* Plan Features */}
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                        Package Highlights
                      </h3>
                      <ul className="space-y-2.5">
                        {plan.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-sm font-semibold text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 sm:px-8 pb-8 pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phones[1]}`}
                    className="flex-1 bg-brand-dark hover:bg-slate-800 text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call {COMPANY_INFO.phones[1]}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappLinkPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Four Trust Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Invest Today, Build Tomorrow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Why Investors Trust {COMPANY_INFO.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-xl text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/40 border border-blue-500/30 text-amber-400 flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-white uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Official Investment Flyer & Office Verification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <img
              src="/investment-flyer.jpg"
              alt="DE ANDERS NIG LTD Commercial Transport Investment Flyer showing 48% ROI on Keke and Bus Plans"
              className="w-full rounded-xl shadow-lg border border-slate-200"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Official Investment Prospectus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
              Walk Into Any of Our Offices or Inspect Our Fleet Live
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every investment is backed by real, physical commercial tricycles (Keke) and passenger buses operating daily across Imo, Abia, Anambra, and Enugu corridors. Visit our offices for documentation and inquiries:
            </p>

            <div className="space-y-3">
              {OFFICE_LOCATIONS.map((office) => (
                <div
                  key={office.id}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-extrabold text-brand-dark">
                      {office.name} ({office.type})
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {office.address}, {office.cityState}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => goToTab('fleet')}
                className="bg-brand-primary hover:bg-blue-800 text-white font-bold text-sm px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Watch Live Fleet Videos</span>
              </button>
              <a
                href="/investment-flyer.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-sm px-5 py-3 rounded-xl"
              >
                Open Full-Resolution Flyer
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Regulatory, Asset-Backed Contract & Anti-Fraud Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-slate-100 border border-slate-300 p-6 sm:p-8 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
          <div className="flex items-center gap-2 font-extrabold text-slate-900 uppercase tracking-wider text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
            Statutory Commercial & Investment Disclaimer
          </div>
          <p>
            <strong>1. Asset-Backed Commercial Partnership (Not a Public Security):</strong> The DE ANDERS NIG LTD Tricycle (Keke) and Mini-Bus investment tiers are bilateral, asset-backed commercial fleet-management and hire-purchase partnerships governed under Nigerian corporate law. Nothing on this website constitutes a public offer of securities, collective investment scheme, or banking deposit solicitation.
          </p>
          <p>
            <strong>2. Binding Written Agreement Required:</strong> Projected returns (up to 48% ROI) and payout schedules displayed on this platform are for informational purposes and remain subject to the execution of a formal, legally binding Fleet Management Agreement signed between the investor and <strong>DE ANDERS NIG LTD</strong>.
          </p>
          <p>
            <strong>3. Anti-Fraud & Official Payment Warning:</strong> This website does <strong>not</strong> collect payments online. Prospective partners must never transfer funds to personal bank accounts. All physical asset allocations, contract signings, and corporate account verifications must be confirmed through our headquarters at <strong>7/12 Seven &amp; Half Junction, Umuagu Obowo, Imo State</strong>, or our verified <strong>Umuahia</strong> and <strong>Onuimo</strong> branch offices.
          </p>
        </div>
      </section>
    </div>
  );
};