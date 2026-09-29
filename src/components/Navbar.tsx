import React, { useState } from 'react';
import {Phone, MapPin, Menu, X, TrendingUp } from 'lucide-react';
import type { TabId } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'investments', label: 'Investment Plans (48% ROI)', highlight: true },
    { id: 'fleet', label: 'Fleet Videos & Gallery' },
    { id: 'contact', label: 'Offices & Contact' },
  ];

  const handleNavClick = (id: TabId) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Corporate Info Bar */}
      <div className="bg-brand-dark text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              Imo State (Obowo & Onuimo) • Abia State (Umuahia)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 italic">
              {COMPANY_INFO.subTagline}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_INFO.phone[0]}`}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              {COMPANY_INFO.phone[0]}
            </a>
            <span className="text-slate-600">/</span>
            <a
              href={`tel:${COMPANY_INFO.phone[1]}`}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold"
            >
              {COMPANY_INFO.phone[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className="bg-white/95 backdrop-blur-md border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
           {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="DE ANDERS NIG LTD Official Logo"
                className="w-12 h-12 rounded-xl object-contain bg-white border border-slate-200 p-0.5 shadow-sm group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-brand-dark leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-xs font-semibold text-brand-accent mt-1">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-brand-primary text-white shadow-sm'
                        : item.highlight
                        ? 'text-blue-900 bg-amber-50 border border-amber-300 hover:bg-amber-100'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-brand-primary'
                    }`}
                  >
                    {item.highlight && (
                      <TrendingUp
                        className={`w-4 h-4 ${
                          isActive ? 'text-amber-300' : 'text-brand-accent'
                        }`}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop Direct Call / Contact CTA */}
            <div className="hidden sm:flex lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone[0]}`}
                className="bg-brand-accent hover:bg-orange-600 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>

              {/* Mobile Hamburger Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Smallest Mobile Hamburger Trigger */}
            <div className="flex sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-primary text-white'
                      : item.highlight
                      ? 'bg-amber-50 text-blue-900 border border-amber-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded bg-brand-accent text-white font-extrabold">
                      HOT
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone[0]}`}
                className="w-full bg-brand-accent text-white font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY_INFO.phone[0]}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};