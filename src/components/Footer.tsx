import React from 'react';
import {
  Code2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { industriesData } from '../data/industriesData';
import {
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  COMPANY_FOUNDER,
  COMPANY_FOUNDED,
  getWhatsAppUrl,
  getPhoneUrl,
} from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner with Direct WhatsApp & Call CTA */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-blue-950/40 via-slate-950 to-indigo-950/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>DELHI-BASED SOFTWARE &amp; WEB AGENCY · DIRECT FOUNDER CONSULTATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to engineer your next high-converting digital product?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Speak directly with Webtech IT Solution for project scoping, timeline, and exact quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl('Hello Webtech IT Solution, I want to discuss a new software project for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat (9594319442)</span>
            </a>
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call 7977117717</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Office Coordinates */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Webtech IT Solution
                </span>
                <p className="text-xs text-slate-400 font-mono">webtechitsolution.com</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Founded in {COMPANY_FOUNDED} by <strong className="text-slate-300">{COMPANY_FOUNDER}</strong>, Webtech IT Solution delivers bespoke web architecture, AI workflow automation, cross-platform mobile apps, and scalable SaaS solutions to brands across Delhi, India, and globally.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getPhoneUrl()} className="hover:text-blue-400 transition-colors">
                  +91 {COMPANY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  WhatsApp: +91 {COMPANY_WHATSAPP}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sat: 09:30 AM – 08:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: 9 Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 6 Software Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software Products
            </h4>
            <ul className="space-y-2 text-xs">
              {productsData.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onNavigate(`/products/${p.slug}`)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Live Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Verified Client Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://signmumbai.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <span>Sign Mumbai</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://dsigninterior.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <span>Dsign Interior</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://blue-cross.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <span>Blue Cross NGO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://bharatdarshan.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <span>Bharat Darshan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://genzcointrading.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <span>Genz Coin Trading</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900 space-y-1.5">
              <button
                onClick={() => onNavigate('/company')}
                className="text-xs text-slate-400 hover:text-white block transition-colors"
              >
                About Webtech IT Solution
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="text-xs text-slate-400 hover:text-white block transition-colors"
              >
                Rohini Delhi Location &amp; Directions
              </button>
            </div>
          </div>
        </div>

        {/* 33 Industries Full Index (SEO Rich Sitemap Grid) */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              33 Specialized Industry Software Solutions
            </h4>
            <button
              onClick={() => onNavigate('/industries')}
              className="text-xs text-blue-400 hover:underline"
            >
              Browse All Industries Grid →
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {industriesData.map((ind) => (
              <button
                key={ind.id}
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="text-[11px] px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800/60"
              >
                {ind.name}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright & Legal Bar */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Webtech IT Solution. All rights reserved. Registered in Rohini, Delhi 110085.</p>
          <div className="flex items-center gap-6">
            <span>Built by Webtech IT Solution</span>
            <span>·</span>
            <span>webtechitsolution.com</span>
            <span>·</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              Direct WhatsApp 9594319442
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
