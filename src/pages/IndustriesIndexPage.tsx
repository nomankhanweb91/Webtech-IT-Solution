import React, { useState } from 'react';
import {
  ArrowRight,
  Building2,
  Car,
  Globe2,
  Heart,
  Search,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { industriesData } from '../data/industriesData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface IndustriesIndexProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal: (industryName?: string) => void;
}

export const IndustriesIndexPage: React.FC<IndustriesIndexProps> = ({
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Business & Tech',
    'Commerce & Mobility',
    'Media & Lifestyle',
    'Health & Public Sector',
  ];

  const filtered = industriesData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <span>33 SPECIALIZED INDUSTRY SOFTWARE ARCHITECTURES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Enterprise IT &amp; Software Solutions Across 33 Sectors
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From EV charging networks and fintech lending to on-demand ride hailing and healthcare telemetry, explore our bespoke domain architectures.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
        {/* Interactive Segmented Filter Control */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search industry or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Grid of Industries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((ind) => (
          <div
            key={ind.id}
            onClick={() => onNavigate(`/industries/${ind.slug}`)}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Real Industry Thumbnail Image */}
              <div className="mb-4 relative h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <ImageWithFallback
                  src={ind.imageUrl}
                  alt={ind.name}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[10px] font-mono text-cyan-400">
                  {ind.category}
                </div>
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-mono text-slate-300">
                  {ind.keyModules.length} Modules
                </div>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {ind.name}
              </h2>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                {ind.summary}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1">
                <p className="text-[11px] font-mono text-slate-400 uppercase">Key Modules:</p>
                {ind.keyModules.slice(0, 2).map((m, i) => (
                  <p key={i} className="text-xs text-slate-400 truncate">· {m}</p>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
              <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                <span>View Full Industry Solution</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400 text-sm">
          No industries matched your search &quot;{searchQuery}&quot;. Clear your search or explore other categories.
        </div>
      )}

      {/* Bottom WhatsApp Inquiry */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">
          Don&apos;t see your specific sector listed?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          We engineer bespoke applications for niche and emerging domains. Discuss your requirements directly with founder Noman Khan.
        </p>
        <a
          href={getWhatsAppUrl('Hi Noman Khan, I would like to inquire about software development for my industry.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-950 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Inquire on WhatsApp (9594319442)</span>
        </a>
      </div>

    </div>
  );
};
