import React from 'react';
import {
  Code2,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Building2,
  Award,
  Users,
  Terminal,
  MapPin,
  Calendar,
} from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import {
  COMPANY_FOUNDER,
  COMPANY_FOUNDED,
  COMPANY_ADDRESS,
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  COMPANY_EMAIL,
  getWhatsAppUrl,
  getPhoneUrl,
} from '../utils/whatsapp';

interface CompanyPageProps {
  onOpenConsultationModal: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onOpenConsultationModal }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>COMPANY &amp; FOUNDER PROFILE · WEBTECH IT SOLUTION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Engineering High-Performance Software From Delhi to the World
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Established in {COMPANY_FOUNDED}, <strong>Webtech IT Solution</strong> is a boutique software engineering and digital transformation agency focused on speed, clean architecture, and conversion.
        </p>
      </div>

      {/* Founder Spotlight Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Award className="w-4 h-4" />
              <span>LEADERSHIP &amp; ENGINEERING VISION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Personal Note from Webtech IT Solution Leadership
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              &ldquo;We established Webtech IT Solution in 2023 with a clear conviction: most software development agencies take months to deliver bloated, slow websites that don’t actually generate business for their owners. We operate on opposite principles. Every line of TypeScript is written with precision, every layout is tested for sub-second mobile load times, and our clients have direct WhatsApp access to our technical team at all times.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From our office in Rohini, Delhi, we have shipped mission-critical web applications for industrial signage manufacturers (Sign Mumbai), luxury architecture studios (Dsign Interior), humanitarian NGOs (Blue Cross), pan-India cultural initiatives (Bharat Darshan), and algorithmic cryptocurrency trading platforms (Genz Coin Trading).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Hi Webtech IT Solution, I would like to schedule a direct consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-950"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly with Webtech IT Solution (9594319442)</span>
              </a>

              <a
                href={getPhoneUrl()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call +91 {COMPANY_PHONE}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Webtech IT Solution Team & Engineering Desk"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
                <span>Rohini, Delhi Office</span>
                <span className="text-emerald-400">Active Engineering</span>
              </div>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
              <div className="text-blue-400 font-bold border-b border-slate-800 pb-2">
                // Agency Quick Facts
              </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Founder:</span>
              <span className="text-white">{COMPANY_FOUNDER}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Established:</span>
              <span className="text-white">{COMPANY_FOUNDED}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Headquarters:</span>
              <span className="text-white">Rohini, Delhi</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Domain:</span>
              <span className="text-cyan-400">webtechitsolution.com</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-900">
              <span className="text-slate-400">Official Call:</span>
              <span className="text-white">{COMPANY_PHONE}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">WhatsApp:</span>
              <span className="text-emerald-400">{COMPANY_WHATSAPP}</span>
            </div>
          </div>
        </div>

      </div>
    </div>

      {/* Core Engineering Values */}
      <div className="space-y-6">
        <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
          Our Operational Pillars
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          How Webtech IT Solution Ships Software
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono text-blue-400">Pillar 01</div>
            <h3 className="text-base font-bold text-white">Sub-Second Performance Standard</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every millisecond of latency costs sales conversions. We audit every bundle, strip third-party script bloat, and verify 90+ mobile Core Web Vitals on every release.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono text-cyan-400">Pillar 02</div>
            <h3 className="text-base font-bold text-white">Direct Founder Accessibility</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No endless ticketing systems or junior account reps playing telephone. You communicate with the software engineers and founder who write and review your code.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="text-xs font-mono text-emerald-400">Pillar 03</div>
            <h3 className="text-base font-bold text-white">Honest Technical Pricing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transparent milestone billing with no surprise hidden fees. You receive 100% intellectual property ownership of all source code, design files, and database schemas.
            </p>
          </div>
        </div>
      </div>

      {/* Physical Coordinates Banner */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <MapPin className="w-4 h-4" />
            <span>DELHI HEADQUARTERS</span>
          </div>
          <h3 className="text-xl font-bold text-white">Visit Our Rohini Office</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            {COMPANY_ADDRESS} · Open Monday through Saturday, 09:30 AM to 08:00 PM IST.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultationModal}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/30"
          >
            Schedule Office Meeting
          </button>
        </div>
      </div>

    </div>
  );
};
