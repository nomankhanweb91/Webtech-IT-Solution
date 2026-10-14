import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Smartphone,
  Cpu,
  ShoppingCart,
  Server,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ShowcaseSlide {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  fallbackGradient: string;
  badgeColor: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const slides: ShowcaseSlide[] = [
  {
    id: 'web-development',
    category: 'Web Development',
    title: 'High-Performance Next.js & React Web Platforms',
    description: 'Bespoke corporate websites and dynamic web applications built with 99+ Google Core Web Vitals, sub-second TTFB, and conversion-first UI architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-blue-600/30 to-cyan-600/30',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    metrics: [
      { label: 'PageSpeed', value: '99/100' },
      { label: 'Mobile TTFB', value: '0.8s' },
      { label: 'SEO Score', value: '100%' },
    ],
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 'mobile-app-development',
    category: 'Mobile App Development',
    title: 'Cross-Platform iOS & Android Native Applications',
    description: 'Smooth 60 FPS mobile apps published on Google Play & Apple App Store with offline synchronization, real-time GPS fleet tracking, and biometrics.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-pink-600/30 to-purple-600/30',
    badgeColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Store Approval', value: '100%' },
      { label: 'Crash Rate', value: '< 0.01%' },
    ],
    tags: ['React Native', 'Flutter', 'Firebase', 'iOS & Android'],
  },
  {
    id: 'ai-development',
    category: 'AI & Custom Automation',
    title: 'Intelligent AI Agents, LLMs & Workflow Automation',
    description: 'Private RAG knowledge bases, 24/7 autonomous WhatsApp AI sales agents, and intelligent enterprise document intelligence systems.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-purple-600/30 to-indigo-600/30',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    metrics: [
      { label: 'Inference', value: '45ms' },
      { label: 'Lead Capture', value: '24/7' },
      { label: 'Automation', value: '94%' },
    ],
    tags: ['Gemini API', 'Python', 'FastAPI', 'Vector RAG'],
  },
  {
    id: 'ecommerce-shopify',
    category: 'E-Commerce Solutions',
    title: 'High-Converting Shopify & Bespoke D2C Storefronts',
    description: 'Frictionless 1-page checkout, instant UPI/card payment flows, automated WhatsApp cart recovery, and lightning-fast product catalogs.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-emerald-600/30 to-teal-600/30',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    metrics: [
      { label: 'Checkout Time', value: '< 15s' },
      { label: 'Conversion', value: '+35%' },
      { label: 'Uptime', value: '99.99%' },
    ],
    tags: ['Shopify Liquid', 'Razorpay', 'Hydrogen', 'Tailwind'],
  },
  {
    id: 'custom-software-saas',
    category: 'Custom Software & SaaS',
    title: 'Scalable Multi-Tenant SaaS & Enterprise Dashboards',
    description: 'Robust cloud architectures with role-based access control, PostgreSQL databases, Docker containerization, and automated recurring billing.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-blue-600/30 to-slate-600/30',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Latency', value: '< 30ms' },
      { label: 'Security', value: 'SOC2 Ready' },
    ],
    tags: ['PostgreSQL', 'Docker', 'AWS / Cloud Run', 'Redis'],
  },
];

export const WebAndAppShowcaseSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play sliding interval (4 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = slides[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Visual Image Showcase Container */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
        <ImageWithFallback
          src={currentSlide.imageUrl}
          alt={currentSlide.title}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.78]"
        />

        {/* Ambient Gradient Overlays for contrast and tech aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/30" />

        {/* Top Badges & Slide Indicator */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border backdrop-blur-md shadow-md ${currentSlide.badgeColor}`}>
              {currentSlide.category}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-900/80 backdrop-blur-md border border-slate-700/60">
              Live Engineering
            </span>
          </div>

          {/* Navigation Prev / Next Chevrons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-200 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer backdrop-blur-md"
              aria-label="Previous showcase slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 text-slate-200 hover:text-white transition-all shadow-md active:scale-95 cursor-pointer backdrop-blur-md"
              aria-label="Next showcase slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floating Verified Performance Metrics */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2 sm:gap-3">
          {currentSlide.metrics.map((m, i) => (
            <div
              key={i}
              className="flex-1 px-2.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 shadow-lg"
            >
              <p className="text-[10px] text-slate-400 font-mono truncate">{m.label}</p>
              <p className="text-xs sm:text-sm font-bold font-mono text-cyan-400 truncate">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Description & Meta Strip */}
      <div className="p-5 sm:p-6 bg-slate-950 space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
          {currentSlide.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
          {currentSlide.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {currentSlide.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Slide Indicator Dots & Status */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 bg-blue-500 shadow-sm shadow-blue-500/50'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            Slide {activeIndex + 1} of {slides.length} {isPaused ? '(Paused)' : '· Auto-Sliding'}
          </span>
        </div>
      </div>
    </div>
  );
};
