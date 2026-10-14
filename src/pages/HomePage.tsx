import React from 'react';
import {
  ArrowRight,
  Code2,
  Cpu,
  Layout,
  Globe,
  ShoppingCart,
  Briefcase,
  Smartphone,
  Server,
  Search,
  ExternalLink,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  MessageCircle,
  Phone,
  Layers,
  Terminal,
  Database,
  Star,
  Users,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { portfolioProjects } from '../data/portfolioData';
import { industriesData } from '../data/industriesData';
import { testimonialsData } from '../data/testimonialsData';
import { TechIllustration } from '../components/TechIllustration';
import { WebAndAppShowcaseSlider } from '../components/WebAndAppShowcaseSlider';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_FOUNDER, COMPANY_FOUNDED, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  // Service icons mapper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Code': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-indigo-400" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-emerald-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-pink-400" />;
      case 'Server': return <Server className="w-5 h-5 text-sky-400" />;
      case 'Search': return <Search className="w-5 h-5 text-teal-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  // Technologies list
  const technologies = [
    { name: 'React & Next.js', category: 'Frontend', badge: 'Core Web Vitals' },
    { name: 'TypeScript', category: 'Language', badge: 'Type Safety' },
    { name: 'Tailwind CSS', category: 'Styling', badge: 'Modern UI' },
    { name: 'Node.js & Express', category: 'Backend', badge: 'High Throughput' },
    { name: 'Python & FastAPI', category: 'AI & Data', badge: 'Machine Learning' },
    { name: 'Gemini & AI Tools', category: 'Intelligence', badge: 'Generative AI' },
    { name: 'React Native & Flutter', category: 'Mobile', badge: 'iOS & Android' },
    { name: 'PHP & WordPress', category: 'CMS', badge: 'Custom Themes' },
    { name: 'Shopify Liquid', category: 'E-commerce', badge: 'Storefronts' },
    { name: 'PostgreSQL & Redis', category: 'Database', badge: 'ACID / Caching' },
    { name: 'Docker & AWS', category: 'Cloud DevOps', badge: 'Scalable Infra' },
    { name: 'Figma & Framer', category: 'UI/UX Design', badge: 'Prototyping' },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION
          High-impact headline focusing on custom IT solutions, web development,
          and AI, with clear primary and secondary CTA buttons.
         ========================================================================= */}
      <section className="relative pt-8 sm:pt-14 overflow-hidden">
        {/* High-Impact Hero Background Image with Subtle Dark Overlay */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Futuristic cyber tech background"
            className="w-full h-full object-cover object-center opacity-10 mix-blend-luminosity scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
        </div>

        {/* Atmospheric Tech Background Grid & Gradient Mesh */}
        <TechIllustration type="hero-bg" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Value Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>PREMIER IT SERVICES &amp; SOFTWARE AGENCY</span>
                <span aria-hidden="true">·</span>
                <span>DIRECT FOUNDER SUPERVISION</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Custom IT Solutions, High-Speed Web Development &amp; AI Automation.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Webtech IT Solution builds bespoke, lightning-fast digital products that convert visitors into revenue. From full-stack Next.js web platforms to custom enterprise software and automated AI workflows.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('/services')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Explore Services
                </button>
              </div>

              {/* WhatsApp direct trust indicator */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <a
                  href={getWhatsAppUrl('Hi Noman Khan, I would like to explore custom IT development with Webtech IT Solution.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp response on +91 9594319442</span>
                </a>
                <span>·</span>
                <a
                  href={getPhoneUrl()}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 7977117717</span>
                </a>
              </div>
            </div>

            {/* Right Column: Web & App Development Sliding Showcase */}
            <div className="lg:col-span-5">
              <WebAndAppShowcaseSlider />
            </div>
          </div>

          {/* Proof Metric Strip */}
          <div className="mt-14 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">50+</p>
              <p className="text-xs text-slate-400">Custom Digital Projects Delivered</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">99.8%</p>
              <p className="text-xs text-slate-400">Client Satisfaction &amp; Retainers</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">&lt; 0.9s</p>
              <p className="text-xs text-slate-400">Average Mobile PageSpeed Load</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums">100%</p>
              <p className="text-xs text-slate-400">SEO-Clean &amp; Structured Markup</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICES OVERVIEW
          Grid cards highlighting core services with links to individual pages.
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              01. Specialized Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              End-to-End Technology Services Built to Scale
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              We replace fragmented freelancers with a disciplined engineering team overseen directly by founder Noman Khan.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/services')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View All 9 Services In-Depth</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onNavigate(`/services/${service.slug}`)}
              className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Real High-Res Service Thumbnail Image */}
                <div className="mb-4 relative h-40 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <ImageWithFallback
                    src={service.imageUrl}
                    alt={service.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-cyan-400">
                    {service.techStack[0]}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">{service.techStack[0]}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {service.tagline}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-1">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.slice(0, 2).map((d, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-center gap-1.5 truncate">
                        <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        <span className="truncate">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {service.features.length} Modules
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: SHORT ABOUT SECTION
          Brief company introduction highlighting founder Noman Khan, establishment
          year (2023), and commitment to excellence.
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-950/40 rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                02. Agency Heritage &amp; Leadership
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Engineered for Performance by Noman Khan Since 2023.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Headquartered in <strong className="text-white">Rohini, Delhi 110085</strong>, Webtech IT Solution was established with a singular mission: eliminate sluggish, boilerplate website development and provide fast-growing companies with bespoke, high-conversion software engineering.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Under the technical stewardship of founder <strong>Noman Khan</strong>, we combine deep computer science fundamentals with cutting-edge front-end design, secure backend architectures, and direct client communication. When you build with us, you speak directly with technical architects, not junior account managers.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Delhi Office: Mangolpur Kalan, Rohini</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Direct WhatsApp Line: 9594319442</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('/company')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  Read Founder Story &amp; Vision
                </button>
                <a
                  href={getWhatsAppUrl('Hi Noman Khan, I would like to schedule a quick 15-minute consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With Founder on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <h4 className="text-sm font-bold text-white">Noman Khan</h4>
                  <p className="text-xs text-slate-400">Founder &amp; Principal Software Engineer</p>
                </div>
                <div className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-mono text-[11px] border border-blue-500/20">
                  Est. 2023
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">Headquarters</span>
                  <span className="text-white font-mono">Rohini, Delhi 110085</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">Core Expertise</span>
                  <span className="text-white">Full-Stack, Next.js, AI Systems</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">Direct Contact</span>
                  <span className="text-blue-400 font-mono">+91 7977117717</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">WhatsApp Desk</span>
                  <span className="text-emerald-400 font-mono">+91 9594319442</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultationModal('Founder Direct Consultation')}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/30"
                >
                  Book 1-on-1 Founder Call
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR WORK SHOWCASE
          Grid featuring real client projects with live links:
          - Sign Mumbai (https://signmumbai.in/)
          - Dsign Interior (https://dsigninterior.in/)
          - Blue Cross (https://blue-cross.org.in/)
          - Bharat Darshan (https://bharatdarshan.online/)
          - Genz Coin Trading (https://genzcointrading.com/)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              03. Real Production Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Verified Client Work Live on the Web
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Inspect real production applications shipped by Webtech IT Solution with active external web links.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/our-work')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 self-start md:self-end"
          >
            <span>View Full Portfolio Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between group hover:border-slate-700 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Real Case Study High-Res Showcase Image */}
                <div className="mb-4 relative h-48 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <ImageWithFallback
                    src={proj.imageUrl}
                    alt={proj.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Status & Year Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Live Case Study</span>
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-mono text-slate-300">
                    {proj.year}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-cyan-400">{proj.clientLocation}</span>
                  <span className="text-[11px] font-mono text-slate-400">{proj.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {proj.category}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono text-slate-400 mb-1">Verified Impact:</p>
                  <p className="text-xs font-medium text-emerald-400">
                    {proj.results[0]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 text-xs font-semibold transition-colors"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppUrl(`Hi Noman Khan, I saw your client project "${proj.title}" and would like to build something similar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Build Similar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE US
          Key USPs (10+ years expertise, agile delivery, 24/7 support, SEO-friendly).
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            04. The Webtech IT Solution Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Why High-Growth Companies Choose Us Over Generic Agencies
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            We operate with mathematical precision, rapid two-week delivery cycles, and direct founder accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">10+ Years Combined Expertise</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Senior software architecture knowledge spanning Next.js, complex backend databases, cloud microservices, and AI models.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Rapid 2-Week Agile Delivery</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We ship tested, high-fidelity clickable demos and functional MVPs in rapid two-week sprint cycles with transparent progress boards.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">24/7 Dedicated Support</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Direct founder WhatsApp communication on 9594319442 and zero-wait incident escalation for mission-critical production platforms.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">100% SEO-Friendly Code</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Zero code bloat. Semantic HTML5 tags, JSON-LD Schema integration, and Core Web Vitals optimization to conquer Google rankings.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: INDUSTRIES WE SERVE GRID
          Visual cards linking to individual industry pages.
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              05. Domain Specialization
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Software Architectures Built for 33 Diverse Industries
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Each sector has unique regulatory, security, and operational workflows. We build tailored architectures with zero boilerplate compromises.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/industries')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Explore All 33 Industry Pages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Highlight 12 Marquee Industries with direct links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industriesData.slice(0, 12).map((ind) => (
            <div
              key={ind.id}
              onClick={() => onNavigate(`/industries/${ind.slug}`)}
              className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Real High-Res Industry Thumbnail Image */}
                <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-950 border border-slate-800">
                  <ImageWithFallback
                    src={ind.imageUrl}
                    alt={ind.name}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-cyan-300 px-1.5 py-0.5 rounded bg-slate-950/85 backdrop-blur-md border border-slate-700/60">
                    {ind.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mt-1">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {ind.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-blue-400">
                <span>View Specialized Tech</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('/industries')}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors"
          >
            View Remaining 21 Industry Solutions (EV, News, Telecom, Oil &amp; Gas, Politics &amp; more) →
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: TECHNOLOGIES WE USE
          Icons/Badges for UI/UX, React/Next.js, Node.js, PHP/WordPress, Shopify,
          AI Tools, Python, Android/iOS, etc.
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            06. Production Tech Stack
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Battle-Tested Frameworks, Languages &amp; Cloud Tools
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            We write clean, strictly-typed code that is easy to maintain, audit, and scale across high concurrent traffic.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 text-center hover:border-slate-700 hover:bg-slate-900 transition-all group"
            >
              <div className="text-[10px] font-mono text-cyan-400 mb-1">{tech.category}</div>
              <p className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                {tech.name}
              </p>
              <div className="mt-2 text-[10px] text-slate-400 font-mono">
                {tech.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TESTIMONIALS & TRUST SIGNALS
          Client feedback section with verified project attributions.
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            07. Client Endorsements
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Trusted by Business Leaders &amp; Enterprise Directors
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Real feedback from verified clients whose platforms we engineered and continue to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">5.0 / 5.0</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{test.clientName}</h4>
                  <p className="text-xs text-slate-400">{test.role}, <strong className="text-slate-300">{test.company}</strong></p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {test.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Conversion CTA banner on homepage */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Have a project in mind? Let&apos;s build it right the first time.
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get in touch with founder Noman Khan today for an honest architectural evaluation, realistic milestone roadmap, and competitive pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultationModal()}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/30"
            >
              Request Free Consultation
            </button>
            <a
              href={getWhatsAppUrl('Hi Noman Khan, I am ready to discuss my new IT project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat (9594319442)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
