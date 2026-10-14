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
  Search,
  ShoppingCart,
  Database,
  Users,
  MessageSquare,
  Calendar,
  Receipt,
  FileText,
  Gamepad2,
  TrendingUp,
  Globe,
  Layout,
  Zap,
  Building2,
  Car,
  Heart,
  Globe2,
  Briefcase,
} from 'lucide-react';

interface IllustrationProps {
  type:
    | 'hero'
    | 'hero-bg'
    | 'sign-mumbai'
    | 'dsign-interior'
    | 'blue-cross'
    | 'bharat-darshan'
    | 'genz-coin-trading'
    | 'service-thumb'
    | 'product-thumb'
    | 'industry-thumb';
  title?: string;
  itemId?: string;
  category?: string;
}

export const TechIllustration: React.FC<IllustrationProps> = ({
  type,
  title,
  itemId,
  category,
}) => {
  // Hero Background Grid & Atmospheric Vector Mesh
  if (type === 'hero-bg') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        {/* Subtle geometric agency perspective grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Diagonal tech perspective lines */}
        <svg
          className="absolute w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 Q360,140 720,80 T1440,80 M0,200 Q360,260 720,200 T1440,200 M0,320 Q360,380 720,320 T1440,320"
            fill="none"
            stroke="url(#grid-grad)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Ambient Radial Illumination Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-24 right-10 w-[450px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>
    );
  }

  // Hero interactive terminal box
  if (type === 'hero') {
    return (
      <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Console Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-mono text-cyan-400">Web &amp; App Engineering Architecture</span>
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
              founder: <span className="text-emerald-300">&quot;Webtech IT Solution&quot;</span>,
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

  // ==========================================
  // 9 SERVICES DEDICATED VISUAL THUMBNAILS
  // ==========================================
  if (type === 'service-thumb') {
    switch (itemId) {
      case 'ui-ux-design':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-indigo-950/70 via-slate-950 to-slate-900 rounded-xl border border-indigo-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-indigo-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300">
              <span className="flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-indigo-400" /> Figma Design System
              </span>
              <span className="text-slate-400">100% Vector</span>
            </div>
            {/* Visual mockup: Artboard canvas */}
            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 space-y-1.5 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <div className="h-1.5 w-20 bg-indigo-400/40 rounded" />
                <div className="h-1.5 w-10 bg-slate-700 rounded ml-auto" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="h-8 bg-indigo-900/30 border border-indigo-700/30 rounded flex items-center justify-center text-[10px] text-indigo-300 font-mono">
                  UI/UX
                </div>
                <div className="h-8 bg-slate-800/80 rounded border border-slate-700/40 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                  Tokens
                </div>
                <div className="h-8 bg-blue-900/30 rounded border border-blue-700/30 flex items-center justify-center text-[10px] text-blue-300 font-mono">
                  Prototype
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Mobile-First Components</span>
              <span className="text-indigo-400">WCAG AA</span>
            </div>
          </div>
        );

      case 'website-development':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-cyan-950/70 via-slate-950 to-slate-900 rounded-xl border border-cyan-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Next.js / React 19
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 99 PageSpeed
              </span>
            </div>
            {/* Visual mockup: Code snippet & preview */}
            <div className="bg-slate-950 rounded-lg p-2 border border-slate-800 font-mono text-[10px] text-slate-300 space-y-1">
              <p className="text-slate-500">// Ultra-fast SSR Component</p>
              <p>
                <span className="text-pink-400">&lt;HeroSection</span>{' '}
                <span className="text-cyan-300">speed</span>=&quot;0.8s&quot;{' '}
                <span className="text-emerald-400">seo</span>=&quot;rich&quot; /&gt;
              </p>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-cyan-400 w-[95%]" />
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Zero Bloatware</span>
              <span className="text-cyan-400">Edge Rendered</span>
            </div>
          </div>
        );

      case 'wordpress-development':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-blue-950/70 via-slate-950 to-slate-900 rounded-xl border border-blue-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-blue-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" /> Custom WP Theme
              </span>
              <span className="text-blue-400 font-mono">PHP 8+</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono">
                <span>Hardened Security</span>
                <span className="text-emerald-400">A+ Cache</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-1 rounded bg-slate-950 border border-slate-800 text-center text-slate-300 font-mono">
                  Gutenberg Blocks
                </div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 text-center text-slate-300 font-mono">
                  WooCommerce
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>No Plugin Bloat</span>
              <span className="text-blue-400">Instant Admin</span>
            </div>
          </div>
        );

      case 'shopify-ecommerce':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-emerald-950/70 via-slate-950 to-slate-900 rounded-xl border border-emerald-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
              <span className="flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" /> Shopify Storefront
              </span>
              <span className="text-emerald-400">1-Click Checkout</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-1.5 w-16 bg-emerald-400/60 rounded" />
                <div className="h-1.5 w-24 bg-slate-700 rounded" />
                <p className="text-[10px] font-mono text-white font-bold">Razorpay / UPI</p>
              </div>
              <div className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 font-bold">
                +35% AOV
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Abandoned Cart Triggers</span>
              <span className="text-emerald-400">Liquid Theme</span>
            </div>
          </div>
        );

      case 'b2b-solutions':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-amber-950/70 via-slate-950 to-slate-900 rounded-xl border border-amber-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-amber-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-300">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" /> B2B Portal &amp; RFQ
              </span>
              <span className="text-amber-400">Multi-Tier Pricing</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 space-y-1 text-[10px] font-mono">
              <div className="flex justify-between text-slate-400 pb-1 border-b border-slate-800">
                <span>Vendor Tier</span>
                <span>GST Bill</span>
                <span>Discount</span>
              </div>
              <div className="flex justify-between text-slate-200">
                <span>Enterprise A</span>
                <span className="text-emerald-400">Verified</span>
                <span className="text-amber-400 font-bold">-28%</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Distributor Network</span>
              <span className="text-amber-400">Bulk Re-Orders</span>
            </div>
          </div>
        );

      case 'ai-development':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-purple-950/70 via-slate-950 to-slate-900 rounded-xl border border-purple-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-purple-300">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> AI Agent &amp; LLM
              </span>
              <span className="text-purple-400">Gemini / RAG</span>
            </div>
            <div className="bg-slate-950 rounded-lg p-2 border border-purple-900/30 font-mono text-[10px] text-slate-300 space-y-1">
              <p className="text-slate-500">// Vector Knowledge Search</p>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Sparkles className="w-3 h-3" />
                <span>24/7 Automated WhatsApp Bot</span>
              </div>
              <p className="text-[9px] text-purple-300">Confidence Score: 0.984 · 45ms</p>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Private Vector Embeddings</span>
              <span className="text-purple-400">Zero Data Leakage</span>
            </div>
          </div>
        );

      case 'mobile-app-development':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-pink-950/70 via-slate-950 to-slate-900 rounded-xl border border-pink-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-pink-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-pink-300">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-pink-400" /> iOS &amp; Android Native
              </span>
              <span className="text-emerald-400">60 FPS</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-white font-bold">React Native / Flutter</p>
                <p className="text-[9px] text-slate-400">Offline SQLite Sync + Push Notifications</p>
              </div>
              <div className="w-7 h-10 rounded border border-pink-500/40 bg-slate-950 flex flex-col justify-between p-1 items-center">
                <div className="w-2 h-0.5 bg-pink-400 rounded-full" />
                <div className="w-3 h-3 bg-pink-500/20 rounded-full" />
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Google Play &amp; App Store</span>
              <span className="text-pink-400">Turnkey Deploy</span>
            </div>
          </div>
        );

      case 'custom-software-saas':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-sky-950/70 via-slate-950 to-slate-900 rounded-xl border border-sky-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-sky-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-300">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" /> Multi-Tenant SaaS
              </span>
              <span className="text-sky-400">RBAC Security</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-slate-400">Organization Workspaces</p>
                <p className="text-xs font-mono font-bold text-white mt-0.5">Recurring Subscriptions</p>
              </div>
              <div className="text-right font-mono text-[10px] text-emerald-400">
                <p>99.99%</p>
                <p className="text-slate-500">Uptime</p>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Docker &amp; Cloud Run</span>
              <span className="text-sky-400">PostgreSQL</span>
            </div>
          </div>
        );

      case 'seo-website-optimization':
        return (
          <div className="w-full h-40 bg-gradient-to-br from-teal-950/70 via-slate-950 to-slate-900 rounded-xl border border-teal-900/40 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-teal-500/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-teal-300">
              <span className="flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-teal-400" /> Google Search SERP
              </span>
              <span className="text-emerald-400 font-bold font-mono">Rank #1</span>
            </div>
            <div className="bg-slate-950 rounded-lg p-2 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-blue-400 truncate">
                webtechitsolution.com &gt; services
              </div>
              <p className="text-[11px] font-bold text-white leading-tight">
                Webtech IT Solution – Top Rated Software Agency
              </p>
              <p className="text-[9px] text-amber-400 font-mono">★★★★★ 5.0 (48 reviews) · Free Quote</p>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Schema.org JSON-LD</span>
              <span className="text-teal-400">High Organic Leads</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-40 bg-slate-900 rounded-xl border border-slate-800 p-4 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-blue-400" />
          </div>
        );
    }
  }

  // ==========================================
  // 6 SOFTWARE PRODUCTS DEDICATED VISUAL MOCKUPS
  // ==========================================
  if (type === 'product-thumb') {
    switch (itemId) {
      case 'whatsapp-bulk':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-emerald-950/80 via-slate-950 to-slate-900 rounded-xl border border-emerald-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-300">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Bulk Broadcast Engine
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">98% Open Rate</span>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span>Campaign: Festive Offer #4</span>
                <span className="text-emerald-400 font-mono">1,450 / 1,450 Sent</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[100%]" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono">Anti-ban randomized delay active · Excel imported</p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Shared Multi-Agent Inbox</span>
              <span className="text-emerald-400">Direct WhatsApp</span>
            </div>
          </div>
        );

      case 'crm-management':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-blue-950/80 via-slate-950 to-slate-900 rounded-xl border border-blue-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-blue-300">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" /> Sales Pipeline CRM
              </span>
              <span className="text-cyan-400 font-mono">Deal Velocity</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-[9px] font-mono text-slate-400">New Leads</p>
                <p className="text-xs font-bold text-white font-mono">24</p>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-[9px] font-mono text-slate-400">Meeting</p>
                <p className="text-xs font-bold text-cyan-400 font-mono">11</p>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-[9px] font-mono text-slate-400">Won Deals</p>
                <p className="text-xs font-bold text-emerald-400 font-mono">₹4.8L</p>
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Instant WhatsApp Lead Alerts</span>
              <span className="text-blue-400">Zero Lead Leak</span>
            </div>
          </div>
        );

      case 'appointment-booking-android-app':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-cyan-950/80 via-slate-950 to-slate-900 rounded-xl border border-cyan-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" /> Appointment App
              </span>
              <span className="text-emerald-400 font-mono">-70% No-Shows</span>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-400">Live Patient / Client Token</p>
                <p className="text-sm font-mono font-bold text-white mt-0.5">Token #18 · Dr. Mehta</p>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded font-mono text-[10px]">
                  Estimated: 12 min
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>In-App UPI &amp; Slot Reminders</span>
              <span className="text-cyan-400">White-Label Ready</span>
            </div>
          </div>
        );

      case 'kids-puzzle-game':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-purple-950/80 via-slate-950 to-slate-900 rounded-xl border border-purple-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-purple-300">
              <span className="flex items-center gap-1.5">
                <Gamepad2 className="w-4 h-4 text-purple-400" /> Kids Puzzle Game
              </span>
              <span className="text-amber-300">COPPA Compliant</span>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-lg">
                🦁
              </div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-lg">
                🐘
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-lg">
                ⭐
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Offline 100% · No Ads</span>
              <span className="text-purple-400">60 FPS Butter Smooth</span>
            </div>
          </div>
        );

      case 'invoice-bill-maker':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-amber-950/80 via-slate-950 to-slate-900 rounded-xl border border-amber-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-amber-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-amber-300">
              <span className="flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-amber-400" /> GST Tax Invoice Maker
              </span>
              <span className="text-emerald-400">Instant PDF</span>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white">Invoice #WT-2024-89</p>
                <p className="text-[10px] text-slate-400">Total: ₹35,400 (Incl. 18% GST)</p>
              </div>
              <div className="w-8 h-8 rounded bg-slate-950 border border-amber-500/30 flex items-center justify-center text-[8px] font-mono text-amber-300">
                UPI QR
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>1-Tap WhatsApp PDF Send</span>
              <span className="text-amber-400">Thermal Print</span>
            </div>
          </div>
        );

      case 'pdf-tools-app':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-pink-950/80 via-slate-950 to-slate-900 rounded-xl border border-pink-900/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-pink-500/50 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-pink-300">
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-pink-400" /> PDF Utility Suite
              </span>
              <span className="text-cyan-400">Zero Cloud Upload</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono">
              <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-slate-300">Merge</div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-slate-300">Compress</div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-slate-300">Sign</div>
              <div className="p-1.5 bg-slate-900 border border-slate-800 rounded text-pink-300">OCR</div>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex justify-between">
              <span>Client-Side Device Security</span>
              <span className="text-pink-400">Batch Processing</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-slate-900 rounded-xl border border-slate-800 p-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
        );
    }
  }

  // ==========================================
  // REAL CLIENT PRODUCTION WORK DETAILED MOCKUPS
  // ==========================================
  if (type === 'sign-mumbai') {
    return (
      <div className="w-full h-56 bg-slate-950 rounded-2xl border border-amber-900/50 p-3.5 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-amber-500/60 transition-all">
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-amber-300">https://signmumbai.in</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">Live Production</span>
        </div>

        {/* Visual UI Preview: Signage Architecture Portal */}
        <div className="my-auto py-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Architectural Signage ERP</span>
              <p className="text-base font-extrabold text-white tracking-tight">Sign Mumbai Portal</p>
            </div>
            <div className="px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
              +185% Leads
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">LED Signage</p>
              <p className="text-[11px] font-bold text-amber-300">Custom 3D</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Live Quoting</p>
              <p className="text-[11px] font-bold text-white">Instant RFQ</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Speed</p>
              <p className="text-[11px] font-bold text-cyan-400">0.8s Load</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Next.js 15 · Tailwind CSS · Node.js</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    );
  }

  if (type === 'dsign-interior') {
    return (
      <div className="w-full h-56 bg-slate-950 rounded-2xl border border-purple-900/50 p-3.5 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-purple-500/60 transition-all">
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-purple-300">https://dsigninterior.in</span>
          </div>
          <span className="text-[10px] font-mono text-purple-400 font-semibold">Luxury Architecture</span>
        </div>

        {/* Visual UI Preview: Architectural Design Portfolio */}
        <div className="my-auto py-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">Editorial Studio Suite</span>
              <p className="text-base font-extrabold text-white tracking-tight">Dsign Interior Portfolio</p>
            </div>
            <div className="px-2.5 py-1 rounded bg-purple-500/15 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-bold">
              +240% Bookings
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Interactive</p>
              <p className="text-[11px] font-bold text-purple-300">3D Tours</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Mobile Score</p>
              <p className="text-[11px] font-bold text-emerald-400">98 / 100</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Consultation</p>
              <p className="text-[11px] font-bold text-cyan-400">1-Tap WA</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>React · Framer Motion · Vite</span>
          <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    );
  }

  if (type === 'blue-cross') {
    return (
      <div className="w-full h-56 bg-slate-950 rounded-2xl border border-blue-900/50 p-3.5 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-blue-500/60 transition-all">
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-blue-300">https://blue-cross.org.in</span>
          </div>
          <span className="text-[10px] font-mono text-blue-400 font-semibold">NGO &amp; Healthcare</span>
        </div>

        {/* Visual UI Preview: Emergency Ambulance & 80G Receipts */}
        <div className="my-auto py-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">Rescue Dispatch &amp; Tax 80G</span>
              <p className="text-base font-extrabold text-white tracking-tight">Blue Cross India</p>
            </div>
            <div className="px-2.5 py-1 rounded bg-blue-500/15 border border-blue-500/30 text-[10px] font-mono text-blue-300 font-bold">
              ₹50L+ Raised
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Emergency</p>
              <p className="text-[11px] font-bold text-rose-400">24/7 Dispatch</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">80G Tax PDF</p>
              <p className="text-[11px] font-bold text-emerald-400">Instant WA</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Uptime</p>
              <p className="text-[11px] font-bold text-cyan-400">99.98%</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Next.js · PostgreSQL · Razorpay UPI</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    );
  }

  if (type === 'bharat-darshan') {
    return (
      <div className="w-full h-56 bg-slate-950 rounded-2xl border border-emerald-900/50 p-3.5 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-emerald-500/60 transition-all">
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-emerald-300">https://bharatdarshan.online</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold">120K+ Users</span>
        </div>

        {/* Visual UI Preview: Cultural Tourism Guide */}
        <div className="my-auto py-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Heritage Experience Guide</span>
              <p className="text-base font-extrabold text-white tracking-tight">Bharat Darshan Online</p>
            </div>
            <div className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
              28 States
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Map Discovery</p>
              <p className="text-[11px] font-bold text-emerald-300">Interactive</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Monument Passes</p>
              <p className="text-[11px] font-bold text-white">Direct QR</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Languages</p>
              <p className="text-[11px] font-bold text-cyan-400">Multi-Lingual</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>React · Next.js · Google Maps API</span>
          <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    );
  }

  if (type === 'genz-coin-trading') {
    return (
      <div className="w-full h-56 bg-slate-950 rounded-2xl border border-cyan-900/50 p-3.5 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:border-cyan-500/60 transition-all">
        {/* Browser Top Window Chrome */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-cyan-300">https://genzcointrading.com</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 font-semibold">&lt; 50ms Live</span>
        </div>

        {/* Visual UI Preview: Crypto Terminal */}
        <div className="my-auto py-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Algorithmic Coin Trading</span>
              <p className="text-base font-extrabold text-white tracking-tight">Genz Coin Trading Terminal</p>
            </div>
            <div className="px-2.5 py-1 rounded bg-cyan-500/15 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
              Sub-50ms
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Order Book</p>
              <p className="text-[11px] font-bold text-emerald-400">WebSocket</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Security</p>
              <p className="text-[11px] font-bold text-white">2FA + Vault</p>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-[9px] font-mono text-slate-400">Downtime</p>
              <p className="text-[11px] font-bold text-cyan-400">0.00%</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>React · TypeScript · WebSockets · Chart.js</span>
          <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
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

