import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface FloatingCTAProps {
  onOpenConsultationModal: () => void;
}

export const FloatingCTABar: React.FC<FloatingCTAProps> = ({ onOpenConsultationModal }) => {
  return (
    <>
      {/* Mobile Bottom Fixed Bar (Height strictly ~56px, well under 15% of mobile viewport) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={getPhoneUrl()}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs font-semibold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-blue-400" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppUrl('Hi Noman Khan, I am interested in discussing a project for my company.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-lg shadow-emerald-950 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultationModal}
          className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0 active:scale-95 transition-transform shadow-md shadow-blue-900"
          title="Free Consultation"
        >
          <Sparkles className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        <a
          href={getWhatsAppUrl('Hi Webtech IT Solution, I would like to schedule a free project consultation.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all hover:-translate-y-0.5"
          title="Instant WhatsApp Consultation"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold">
            WhatsApp with Founder
          </span>
          <span className="font-mono text-emerald-100 text-[11px]">+91 9594319442</span>
        </a>
      </div>
    </>
  );
};
