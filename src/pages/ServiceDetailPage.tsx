import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface ServiceDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Breadcrumb & Navigation */}
      <div>
        <button
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </button>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span>WEBTECH IT SOLUTION SERVICE</span>
            <span>·</span>
            <span>DIRECT FOUNDER SUPERVISION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-blue-300 font-medium">
            {service.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {service.shortDesc} We architect clean, scalable, and high-performance solutions tailored to your operational goals, backed by 10+ years of technical leadership in Rohini, Delhi.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onOpenConsultationModal(service.title)}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Get Free Consultation for {service.title}
            </button>

            <a
              href={getWhatsAppUrl(`Hello Noman Khan, I would like to inquire about your ${service.title} service for my business.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp (9594319442)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Architectural Features */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Core Engineering Methodology</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          How We Architect {service.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {service.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3"
            >
              <div className="text-xs font-mono text-cyan-400">
                0{idx + 1}.
              </div>
              <h3 className="text-base font-bold text-white">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables & Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Deliverables Checklist */}
        <div className="md:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight">
            Key Project Deliverables
          </h3>
          <ul className="space-y-3.5">
            {service.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack & Quick Inquire */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight">
              Production Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              All code written in strict compliance with current Google Core Web Vitals, semantic SEO standards, and OWASP security guidelines.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-950/60 to-slate-900 rounded-2xl p-6 border border-blue-900/40 space-y-3">
            <h4 className="text-sm font-bold text-white">Need an urgent project scope?</h4>
            <p className="text-xs text-slate-300">
              Speak directly with founder Noman Khan on the official agency phone line.
            </p>
            <a
              href={getPhoneUrl()}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 {COMPANY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 pt-2">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Conversion Box */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Ready to kick off {service.title}?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Get a transparent cost estimate, expected timeline, and architecture plan directly from founder Noman Khan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenConsultationModal(service.title)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30"
          >
            Request Free Proposal
          </button>
          <a
            href={getWhatsAppUrl(`Hi Noman Khan, please share quotation and details for ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-950"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
