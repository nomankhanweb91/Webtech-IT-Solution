import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
  Download,
  Smartphone,
  ExternalLink,
  Layers,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { ProductItem } from '../types';
import { productsData } from '../data/productsData';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface ProductDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const product = productsData.find((p) => p.slug === slug) || productsData[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => onNavigate('/products')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Software Products</span>
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              {product.category}
            </span>
            <span className="px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              READY FOR DEPLOYMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {product.title}
          </h1>

          <p className="text-lg sm:text-xl text-blue-300 font-medium">
            {product.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {product.shortDesc}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
            <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider">Target Audience:</span>
            <span>{product.targetAudience}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl(`Hello Noman Khan, I would like to request a live demo and pricing for ${product.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Live Demo on WhatsApp (9594319442)</span>
            </a>

            <button
              onClick={() => onOpenConsultationModal(product.title)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Inquire License &amp; White-Label
            </button>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Core Strategic Value</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Why Choose {product.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {product.highlights.map((h, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3"
            >
              <div className="text-xs font-mono text-cyan-400">
                0{i + 1}.
              </div>
              <h3 className="text-base font-bold text-white">
                {h.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {h.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Feature Specification */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Full Feature Specifications &amp; Capabilities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.keyFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* White-Label Customization Guarantee */}
      <div className="bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Want this customized under your own company brand?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          We provide complete white-label rebranding, custom domain hosting, Google Play Store publishing, payment gateway setup, and ongoing server support.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl(`Hi Noman Khan, I want to purchase and white-label ${product.title} for my company.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
          <a
            href={getPhoneUrl()}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm"
          >
            Call +91 {COMPANY_PHONE}
          </a>
        </div>
      </div>

    </div>
  );
};
