import React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Shield,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface IllustrationProps {
  type: 'hero' | 'sign-mumbai' | 'dsign-interior' | 'blue-cross' | 'bharat-darshan' | 'genz-coin-trading' | 'product-crm' | 'product-whatsapp' | 'product-booking' | 'product-invoice';
  title?: string;
}

export const TechIllustration: React.FC<IllustrationProps> = ({ type, title }) => {
  if (type === 'hero') {
    return (
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* IDE / Console Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-mono text-slate-400">webtech-core-engine.tsx</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Core Web Vitals 99
            </span>
          </div>
        </div>

        {/* Code & Architectural Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 bg-slate-950/70 rounded-xl p-4 border border-slate-800/70 font-mono text-xs text-slate-300 space-y-2">
            <div className="text-slate-500 flex items-center justify-between">
              <span>// Webtech IT Solution Architecture</span>
              <span className="text-blue-400 text-[10px]">TypeScript 5.4</span>
            </div>
            <p className="text-slate-400">
              <span className="text-pink-400">export const</span>{' '}
              <span className="text-amber-300">WebtechSolution</span> = {'{'}
            </p>
            <p className="pl-4 text-slate-300">
              agency: <span className="text-emerald-300">&quot;Webtech IT Solution&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              founder: <span className="text-emerald-300">&quot;Noman Khan&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              established: <span className="text-cyan-300 font-bold">2023</span>,
            </p>
            <p className="pl-4 text-slate-300">
              location: <span className="text-emerald-300">&quot;Rohini, Delhi 110085&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              capabilities: [<span className="text-blue-300">&quot;Full-Stack Web&quot;</span>, <span className="text-blue-300">&quot;AI Workflow&quot;</span>, <span className="text-blue-300">&quot;Custom SaaS&quot;</span>],
            </p>
            <p className="pl-4 text-slate-300">
              deploymentSpeed: <span className="text-emerald-300">&quot;&lt; 14 Days MVP&quot;</span>,
            </p>
            <p className="text-slate-400">{'};'}</p>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>Production build verified. 0 vulnerabilities.</span>
            </div>
          </div>

          <div className="md:col-span-5 space-y-3">
            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Inbound Inquiries</span>
                <span className="text-emerald-400 font-bold font-mono">+185%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[85%] rounded-full" />
              </div>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/70">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Mobile Performance</span>
                <span className="text-cyan-400 font-bold font-mono">99 / 100</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-cyan-400 h-full w-[99%] rounded-full" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 rounded-xl p-3 border border-blue-800/40 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400">Direct Founder Call</p>
                <p className="text-xs font-semibold text-white">+91 7977117717</p>
              </div>
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Showcase Project Illustrations
  if (type === 'sign-mumbai') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between z-10">
          <div className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[11px] font-mono text-amber-300">
            Signage &amp; Branding ERP
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
        </div>
        <div className="z-10">
          <p className="text-lg font-bold text-white tracking-tight">{title || 'Sign Mumbai'}</p>
          <p className="text-xs text-slate-400 mt-1">signmumbai.in</p>
        </div>
        <div className="flex items-center gap-2 z-10 text-[11px] text-slate-400 font-mono">
          <span>Next.js</span>
          <span>·</span>
          <span>Tailwind</span>
          <span>·</span>
          <span>RFQ Engine</span>
        </div>
      </div>
    );
  }

  if (type === 'dsign-interior') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between z-10">
          <div className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-[11px] font-mono text-purple-300">
            Interior Architecture
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
        </div>
        <div className="z-10">
          <p className="text-lg font-bold text-white tracking-tight">{title || 'Dsign Interior'}</p>
          <p className="text-xs text-slate-400 mt-1">dsigninterior.in</p>
        </div>
        <div className="flex items-center gap-2 z-10 text-[11px] text-slate-400 font-mono">
          <span>React</span>
          <span>·</span>
          <span>Framer</span>
          <span>·</span>
          <span>3D Portfolio</span>
        </div>
      </div>
    );
  }

  if (type === 'blue-cross') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between z-10">
          <div className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[11px] font-mono text-blue-300">
            Healthcare &amp; NGO Portal
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
        </div>
        <div className="z-10">
          <p className="text-lg font-bold text-white tracking-tight">{title || 'Blue Cross'}</p>
          <p className="text-xs text-slate-400 mt-1">blue-cross.org.in</p>
        </div>
        <div className="flex items-center gap-2 z-10 text-[11px] text-slate-400 font-mono">
          <span>80G Receipt</span>
          <span>·</span>
          <span>Razorpay</span>
          <span>·</span>
          <span>Emergency Dispatch</span>
        </div>
      </div>
    );
  }

  if (type === 'bharat-darshan') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between z-10">
          <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-[11px] font-mono text-emerald-300">
            Cultural Tourism &amp; Guide
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
        </div>
        <div className="z-10">
          <p className="text-lg font-bold text-white tracking-tight">{title || 'Bharat Darshan'}</p>
          <p className="text-xs text-slate-400 mt-1">bharatdarshan.online</p>
        </div>
        <div className="flex items-center gap-2 z-10 text-[11px] text-slate-400 font-mono">
          <span>Pan-India Maps</span>
          <span>·</span>
          <span>120K+ Users</span>
          <span>·</span>
          <span>Next.js</span>
        </div>
      </div>
    );
  }

  if (type === 'genz-coin-trading') {
    return (
      <div className="w-full h-52 bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between z-10">
          <div className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-[11px] font-mono text-cyan-300">
            Crypto Trading Terminal
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </div>
        <div className="z-10">
          <p className="text-lg font-bold text-white tracking-tight">{title || 'Genz Coin Trading'}</p>
          <p className="text-xs text-slate-400 mt-1">genzcointrading.com</p>
        </div>
        <div className="flex items-center gap-2 z-10 text-[11px] text-slate-400 font-mono">
          <span>WebSockets</span>
          <span>·</span>
          <span>Sub-50ms</span>
          <span>·</span>
          <span>Cold Wallet Auth</span>
        </div>
      </div>
    );
  }

  // Default tech box
  return (
    <div className="w-full h-44 bg-slate-900 rounded-xl border border-slate-800 p-4 flex items-center justify-center">
      <div className="text-center">
        <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2" />
        <p className="text-sm font-semibold text-white">{title || 'Enterprise Engineering'}</p>
        <p className="text-xs text-slate-400 mt-1">Webtech IT Solution</p>
      </div>
    </div>
  );
};
