import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  AtSign,
  Building2,
  ShieldCheck,
  ExternalLink,
  Clock,
} from 'lucide-react';
import {
  COMPANY_INFO,
  OFFICE_LOCATIONS,
  DAILY_ROUTES,
} from '../data/companyData';

export const ContactTab: React.FC = () => {
  const quickInquiryTopics = [
    {
      label: 'Inquire About Keke Investment (₦4M ➔ ₦6M)',
      text: 'Hello DE ANDERS NIG LTD, I would like to inquire about the Keke Investment Plan (Invest N4,000,000, Get N6,000,000).',
    },
    {
      label: 'Inquire About Bus Investment (₦8.5M ➔ ₦12.6M)',
      text: 'Hello DE ANDERS NIG LTD, I would like to inquire about the Bus Investment Plan (Invest N8,500,000, Get N12,600,000).',
    },
    {
      label: 'Request a Bus or Keke Charter Quote',
      text: 'Hello DE ANDERS NIG LTD, I would like to request a quote for chartering a Bus / Keke.',
    },
    {
      label: 'Apply for Vehicle / Keke Hire Purchase',
      text: 'Hello DE ANDERS NIG LTD, I would like to know the requirements for your Vehicle & Keke Hire Purchase program.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-14 border-b-4 border-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Corporate Directory • No Middlemen</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Offices & Direct Contact Channels
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            Reach out to <strong className="text-white">{COMPANY_INFO.name}</strong> directly by phone, WhatsApp, email, or by visiting our Main Office in Obowo or our branch offices in Umuahia and Onuimo.
          </p>
        </div>
      </section>

      {/* 2. Physical Office Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-accent">
            Walk-In Locations
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-1">
            Our Main Office & Branch Network
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Visit any of our physical offices in Imo State and Abia State for travel boarding, charter bookings, hire purchase documentation, or investment onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICE_LOCATIONS.map((office) => {
            const isMain = office.type === 'Main Office';
            const mapsQuery = encodeURIComponent(
              `${office.address}, ${office.cityState}`
            );

            return (
              <div
                key={office.id}
                className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between shadow-sm ${
                  isMain
                    ? 'bg-brand-dark text-white border-brand-primary'
                    : 'bg-white text-slate-800 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isMain
                          ? 'bg-brand-accent text-white'
                          : 'bg-blue-50 text-brand-primary border border-blue-200'
                      }`}
                    >
                      {office.type}
                    </span>
                    <Building2
                      className={`w-5 h-5 ${
                        isMain ? 'text-amber-400' : 'text-brand-primary'
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-xl font-extrabold ${
                      isMain ? 'text-white' : 'text-brand-dark'
                    }`}
                  >
                    {office.name}
                  </h3>

                  <div className="flex items-start gap-2.5 mt-4">
                    <MapPin
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        isMain ? 'text-amber-400' : 'text-brand-accent'
                      }`}
                    />
                    <div className="text-sm leading-relaxed">
                      <p className={isMain ? 'text-slate-200 font-semibold' : 'text-slate-700 font-semibold'}>
                        {office.address}
                      </p>
                      <p className={isMain ? 'text-slate-400 text-xs mt-0.5' : 'text-slate-500 text-xs mt-0.5'}>
                        {office.cityState}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-700/20">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors ${
                      isMain
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-slate-100 hover:bg-brand-primary hover:text-white text-brand-dark'
                    }`}
                  >
                    <span>Open Location in Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Direct Phone, WhatsApp, Email & Social Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 7 Cols: Direct Contact Lines */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-primary">
                24/7 Customer & Investor Support
              </span>
              <h2 className="text-2xl font-extrabold text-brand-dark mt-1">
                Call, WhatsApp, or Email Us Directly
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Lines Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-primary flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold uppercase text-slate-500">
                  Direct Phone Hotlines
                </h3>
                <div className="space-y-2">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-lg font-extrabold text-brand-dark hover:text-brand-accent transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Lines Card */}
              <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold uppercase text-emerald-800">
                  Official WhatsApp Desk
                </h3>
                <div className="space-y-1.5">
                  {COMPANY_INFO.whatsappNumbers.map((wa) => (
                    <p
                      key={wa}
                      className="text-base font-extrabold text-emerald-950"
                    >
                      {wa}
                    </p>
                  ))}
                  <a
                    href={COMPANY_INFO.whatsappLinkPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg mt-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Start WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-brand-accent flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold uppercase text-slate-500">
                  Official Email Address
                </h3>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="block text-sm font-bold text-brand-dark hover:text-brand-accent break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Instagram Handles Card */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                  <AtSign className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold uppercase text-slate-500">
                  Instagram Pages
                </h3>
                <div className="space-y-1 text-sm font-extrabold text-brand-dark">
                  <p>{COMPANY_INFO.instagramHandles[0]}</p>
                  <p>{COMPANY_INFO.instagramHandles[1]}</p>
                </div>
              </div>
            </div>

            {/* Active Routes Summary */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700">
                <span className="font-extrabold text-brand-dark block">
                  Daily Travel & Charter Corridors:
                </span>
                <span>
                  {DAILY_ROUTES.map((r) => `${r.from} to ${r.to}`).join(' • ')}
                </span>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Instant WhatsApp Inquiry Launcher */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                One-Click Inquiry
              </span>
              <h2 className="text-2xl font-extrabold">
                Send a Direct WhatsApp Message by Topic
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select what you want to inquire about below to open WhatsApp with a pre-filled message straight to our management desk:
              </p>

              <div className="space-y-3 pt-2">
                {quickInquiryTopics.map((topic, index) => {
                  const encodedText = encodeURIComponent(topic.text);
                  return (
                    <a
                      key={index}
                      href={`https://wa.me/48537119307?text=${encodedText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full p-3.5 rounded-xl bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-400 text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between gap-2 group"
                    >
                      <span>{topic.label}</span>
                      <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>{COMPANY_INFO.name}</span>
              <span className="text-amber-400 font-bold">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};