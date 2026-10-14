import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Building2,
  Layers,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Cpu,
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface IndustryDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (industryName?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const industry = industriesData.find((i) => i.slug === slug) || industriesData[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => onNavigate('/industries')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All 33 Industry Solutions</span>
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
              {industry.category}
            </span>
            <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              CUSTOM DOMAIN ARCHITECTURE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Custom Software &amp; IT Solutions for {industry.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {industry.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl(`Hello Noman Khan, I am looking for custom software and IT development for the ${industry.name} industry.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss {industry.name} Project on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenConsultationModal(`${industry.name} Industry Software`)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Request Technical Scope &amp; Quote
            </button>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Industry Bottlenecks */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Industry Bottlenecks</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Key Operational Challenges
          </h3>
          <ul className="space-y-3 pt-2">
            {industry.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engineered Solutions */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>Webtech IT Solution Approach</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Our Engineered Solutions
          </h3>
          <ul className="space-y-3 pt-2">
            {industry.solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Specialized Key Modules */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Core Software Modules</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Specialized Turnkey Modules for {industry.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {industry.keyModules.map((mod, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="text-xs font-mono text-cyan-400">Module 0{i + 1}</div>
              <h4 className="text-sm font-bold text-white">{mod}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Capabilities & Compliance */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Enterprise Technical Architecture &amp; Protocols
        </h3>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {industry.techCapabilities.map((cap, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{cap}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Conversion Banner */}
      <div className="bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Plan Your {industry.name} Application with Founder Noman Khan
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          From compliant regulatory protocols to high-concurrency cloud scaling, we build production software that drives business growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl(`Hi Noman Khan, I would like to schedule a call regarding ${industry.name} software development.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (9594319442)</span>
          </a>
          <button
            onClick={() => onOpenConsultationModal(`${industry.name} Software Consultation`)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30"
          >
            Request Free Proposal
          </button>
        </div>
      </div>

    </div>
  );
};
