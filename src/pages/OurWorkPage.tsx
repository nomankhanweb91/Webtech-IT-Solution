import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import { TechIllustration } from '../components/TechIllustration';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE } from '../utils/whatsapp';

interface OurWorkPageProps {
  onOpenConsultationModal: (projectContext?: string) => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({ onOpenConsultationModal }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>VERIFIED CLIENT WORK · ACTIVE PRODUCTION DEPLOYMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Client Case Studies Shipped &amp; Live on the Web
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Explore real production platforms engineered by Webtech IT Solution. We take pride in delivering clean, maintainable code, Core Web Vitals 95+ performance, and high-conversion user interfaces.
        </p>
      </div>

      {/* Case Studies Deep Dive List */}
      <div className="space-y-12">
        {portfolioProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <TechIllustration type={proj.id as any} title={proj.title} />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  {proj.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {proj.clientLocation} · Shipped {proj.year}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {proj.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {proj.description}
              </p>

              {/* Quantified Business Results */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-mono uppercase text-slate-400">Measured Outcomes:</p>
                <ul className="space-y-1.5">
                  {proj.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/30"
                >
                  <span>Visit {proj.url.replace('https://', '').replace('/', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppUrl(`Hi Noman Khan, I reviewed your work on ${proj.title} (${proj.url}) and want to build a similar solution.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-950"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Build Similar on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Want your company featured in our next marquee launch?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Contact founder Noman Khan directly to review your technical specs and begin architectural sprint planning.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenConsultationModal('Case Study Project Discussion')}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30"
          >
            Start Your Project Consultation
          </button>
          <a
            href={getWhatsAppUrl('Hi Noman Khan, I would like to schedule a call about my project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (9594319442)</span>
          </a>
        </div>
      </div>

    </div>
  );
};
