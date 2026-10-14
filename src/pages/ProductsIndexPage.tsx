import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Users,
  Calendar,
  Gamepad2,
  Receipt,
  FileText,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { productsData } from '../data/productsData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ProductsIndexProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (productName?: string) => void;
}

export const ProductsIndexPage: React.FC<ProductsIndexProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  const getProductIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-cyan-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'Receipt': return <Receipt className="w-5 h-5 text-amber-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-pink-400" />;
      default: return <Zap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>6 TURNKEY SOFTWARE &amp; APPLICATION PRODUCTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Ready-to-Deploy Software Products
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          White-label applications engineered for marketing automation, customer booking, billing, CRM, and document utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((prod) => (
          <div
            key={prod.id}
            onClick={() => onNavigate(`/products/${prod.slug}`)}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getProductIcon(prod.iconName)}
                </div>
                <span className="text-[11px] font-mono text-cyan-400">{prod.category}</span>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {prod.title}
              </h2>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {prod.tagline}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Core Features:</p>
                {prod.keyFeatures.slice(0, 3).map((f, i) => (
                  <p key={i} className="text-xs text-slate-400 truncate">· {f}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                <span>View Product Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">Live Demo Ready</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
