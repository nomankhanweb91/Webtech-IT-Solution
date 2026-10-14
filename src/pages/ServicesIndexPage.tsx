import React from 'react';
import {
  ArrowRight,
  Code2,
  Layout,
  Globe,
  ShoppingCart,
  Briefcase,
  Cpu,
  Smartphone,
  Server,
  Search,
  MessageCircle,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { TechIllustration } from '../components/TechIllustration';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServicesIndexProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (serviceName?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>9 SPECIALIZED ENGINEERING CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Custom IT Services &amp; Digital Solutions
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          From full-stack web platforms and bespoke AI development to enterprise B2B portals and SEO optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((s, idx) => (
          <div
            key={s.id}
            onClick={() => onNavigate(`/services/${s.slug}`)}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Real Service Thumbnail Image */}
              <div className="mb-4 relative h-40 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <ImageWithFallback
                  src={s.imageUrl}
                  alt={s.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-cyan-400">
                  {s.techStack[0]}
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  {getServiceIcon(s.iconName)}
                </div>
                <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {s.title}
              </h2>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {s.tagline}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Deliverables:</p>
                {s.deliverables.slice(0, 3).map((d, i) => (
                  <p key={i} className="text-xs text-slate-400 truncate">· {d}</p>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                <span>View Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-mono text-slate-400 text-[11px]">{s.techStack[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
