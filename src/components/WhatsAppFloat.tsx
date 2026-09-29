import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppFloat: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Direct Call Pill (Mobile Quick Access) */}
      <a
        href={`tel:${COMPANY_INFO.phone[0]}`}
        aria-label="Call DE ANDERS NIG LTD"
        className="sm:hidden bg-brand-primary text-white p-3.5 rounded-full shadow-lg hover:bg-blue-800 transition-all flex items-center justify-center border border-blue-400/30"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href={COMPANY_INFO.whatsappLinkPrimary}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DE ANDERS NIG LTD on WhatsApp"
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-3 rounded-full shadow-xl transition-all flex items-center gap-2 border border-emerald-400/40 group"
      >
        <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
};