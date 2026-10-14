import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Building2,
  Car,
  Heart,
  Globe2,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';
import { industriesData } from '../data/industriesData';
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE, COMPANY_WHATSAPP } from '../utils/whatsapp';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'products' | 'industries' | null>(null);
  
  // Mobile accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileIndustryCategory, setMobileIndustryCategory] = useState<string>('Business & Tech');

  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'services' | 'products' | 'industries') => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 180);
  };

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menus when route path changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const handleMobileNavigate = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  // Industry categorization for Mega Menu
  const industryCategories = [
    { name: 'Business & Tech', icon: Building2, list: industriesData.filter(i => i.category === 'Business & Tech') },
    { name: 'Commerce & Mobility', icon: Car, list: industriesData.filter(i => i.category === 'Commerce & Mobility') },
    { name: 'Media & Lifestyle', icon: Globe2, list: industriesData.filter(i => i.category === 'Media & Lifestyle') },
    { name: 'Health & Public Sector', icon: Heart, list: industriesData.filter(i => i.category === 'Health & Public Sector') },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Brand Zone */}
          <div
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                Webtech IT Solution
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with Mega Menus */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
            
            {/* Home (First Link) */}
            <button
              onClick={() => onNavigate('/')}
              className={`px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors whitespace-nowrap cursor-pointer ${
                currentPath === '/' ? 'text-blue-400 font-semibold bg-slate-900/50' : ''
              }`}
            >
              Home
            </button>

            {/* Services Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => onNavigate('/services')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                  currentPath.startsWith('/services') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'services' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {/* Services Mega Menu Dropdown */}
              {activeMegaMenu === 'services' && (
                <div
                  className="absolute top-full -left-20 w-[720px] bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-6 mt-2 grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  {servicesData.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        onNavigate(`/services/${service.slug}`);
                        setActiveMegaMenu(null);
                      }}
                      className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>
                  ))}

                  <div className="col-span-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Custom web, mobile and enterprise workflows</span>
                    <button
                      onClick={() => {
                        onNavigate('/services');
                        setActiveMegaMenu(null);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 group"
                    >
                      <span>View All 9 Services</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Products Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => onNavigate('/products')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                  currentPath.startsWith('/products') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'products' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {/* Products Dropdown */}
              {activeMegaMenu === 'products' && (
                <div
                  className="absolute top-full -left-12 w-[600px] bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-5 mt-2 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  {productsData.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onNavigate(`/products/${prod.slug}`);
                        setActiveMegaMenu(null);
                      }}
                      className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer transition-all border border-transparent hover:border-slate-700/60 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-cyan-400">{prod.category}</span>
                      </div>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mt-0.5">
                        {prod.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {prod.shortDesc}
                      </p>
                    </div>
                  ))}

                  <div className="col-span-2 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Turnkey proprietary software ready to deploy</span>
                    <button
                      onClick={() => {
                        onNavigate('/products');
                        setActiveMegaMenu(null);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Mega Menu Trigger (All 33 Industries!) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => onNavigate('/industries')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors ${
                  currentPath.startsWith('/industries') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                <span>Industries</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">33</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'industries' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
              </button>

              {/* Large Categorized Industries Mega Menu */}
              {activeMegaMenu === 'industries' && (
                <div
                  className="absolute top-full -left-48 w-[980px] bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-6 mt-2 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-6">
                    {industryCategories.map((cat) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={cat.name} className="space-y-2">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                            <CatIcon className="w-4 h-4 text-blue-400 shrink-0" />
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                              {cat.name}
                            </h4>
                          </div>
                          <ul className="space-y-1">
                            {cat.list.map((item) => (
                              <li key={item.id}>
                                <button
                                  onClick={() => {
                                    onNavigate(`/industries/${item.slug}`);
                                    setActiveMegaMenu(null);
                                  }}
                                  className="w-full text-left px-2 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors truncate block"
                                >
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4 text-slate-400">
                      <span>33 Specialized Industry Software Solutions</span>
                      <span>·</span>
                      <span>Custom Compliance &amp; Workflows</span>
                    </div>
                    <button
                      onClick={() => {
                        onNavigate('/industries');
                        setActiveMegaMenu(null);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                    >
                      <span>View All 33 Industry Solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work */}
            <button
              onClick={() => onNavigate('/our-work')}
              className={`px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors whitespace-nowrap ${
                currentPath === '/our-work' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Our Work
            </button>

            {/* Company */}
            <button
              onClick={() => onNavigate('/company')}
              className={`px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors whitespace-nowrap ${
                currentPath === '/company' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Company
            </button>

            {/* Contact */}
            <button
              onClick={() => onNavigate('/contact')}
              className={`px-3.5 py-2 rounded-lg hover:text-white hover:bg-slate-900 transition-colors whitespace-nowrap ${
                currentPath === '/contact' ? 'text-blue-400 font-semibold' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Zone: WhatsApp + Free Consultation */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl('Hi Webtech IT Solution, I would like to discuss a project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>9594319442</span>
            </a>

            <button
              onClick={onOpenConsultationModal}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 whitespace-nowrap"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Hamburger and Quick Call Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getPhoneUrl()}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
              title="Call Founder"
            >
              <Phone className="w-4 h-4 text-blue-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none cursor-pointer flex items-center gap-1.5"
              aria-label="Open main menu"
            >
              <Menu className="w-5 h-5 text-white" />
              <span className="text-xs font-medium">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          FULL-SCREEN MOBILE NAVIGATION DRAWER (OUTSIDE STACKING CONTEXT)
          Zero CSS clipping, guaranteed full-height scrolling, fixed at z-[100]
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-slate-950/98 backdrop-blur-2xl animate-in fade-in duration-200">
          
          {/* Mobile Drawer Top Bar with Brand & Close Button */}
          <div className="h-20 px-4 sm:px-6 border-b border-slate-800 flex items-center justify-between shrink-0 bg-slate-950">
            <div
              onClick={() => handleMobileNavigate('/')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">Webtech IT Solution</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Scrollable Mobile Menu Content with Safe Bottom Padding */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 pb-36">
            
            {/* Top Quick Action Buttons: Phone & WhatsApp */}
            <div className="grid grid-cols-2 gap-2 pb-1">
              <a
                href={getPhoneUrl()}
                className="flex items-center justify-center gap-2 p-3 bg-blue-600/15 border border-blue-500/30 rounded-xl text-xs font-bold text-blue-400 active:bg-blue-600/25"
              >
                <Phone className="w-4 h-4" />
                <span>Call 7977117717</span>
              </a>
              <a
                href={getWhatsAppUrl('Hi Webtech IT Solution, I would like to discuss an IT development project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-emerald-600/15 border border-emerald-500/30 rounded-xl text-xs font-bold text-emerald-400 active:bg-emerald-600/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Home Navigation Button (First in mobile drawer) */}
            <button
              onClick={() => handleMobileNavigate('/')}
              className={`w-full text-left p-4 rounded-2xl border border-slate-800 bg-slate-900/80 text-sm font-bold transition-all flex items-center justify-between shadow-sm ${
                currentPath === '/' ? 'text-blue-400 border-blue-500/50 bg-blue-600/15 ring-1 ring-blue-500/30' : 'text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" />
                <span className="text-sm font-bold">Home</span>
              </div>
              <span className="text-xs text-blue-400 font-mono">View →</span>
            </button>

            {/* Accordion 1: Services (9) */}
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-white text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Services (9 Core Solutions)</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1 border-t border-slate-800/70 pt-2">
                  {servicesData.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleMobileNavigate(`/services/${s.slug}`)}
                      className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span className="font-medium">{s.title}</span>
                      <span className="text-[10px] text-slate-500 font-mono">View →</span>
                    </button>
                  ))}
                  <button
                    onClick={() => handleMobileNavigate('/services')}
                    className="w-full text-left py-2.5 px-3 text-xs font-bold text-blue-400 hover:text-blue-300 border-t border-slate-800/80 mt-1"
                  >
                    All 9 Services Overview Grid →
                  </button>
                </div>
              )}
            </div>

            {/* Accordion 2: Products (6) */}
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-white text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Products (6 Turnkey Apps)</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileProductsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              
              {mobileProductsOpen && (
                <div className="px-3 pb-3 space-y-1 border-t border-slate-800/70 pt-2">
                  {productsData.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleMobileNavigate(`/products/${p.slug}`)}
                      className="w-full text-left py-2 px-3 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-slate-200">{p.title}</p>
                        <p className="text-[10px] text-cyan-400 font-mono">{p.category}</p>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Specs →</span>
                    </button>
                  ))}
                  <button
                    onClick={() => handleMobileNavigate('/products')}
                    className="w-full text-left py-2.5 px-3 text-xs font-bold text-cyan-400 hover:text-cyan-300 border-t border-slate-800/80 mt-1"
                  >
                    Explore All Software Products →
                  </button>
                </div>
              )}
            </div>

            {/* Accordion 3: Industries (33) */}
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/60">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between p-4 text-sm font-bold text-white text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Industries</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                    33 Sectors
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileIndustriesOpen ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>
              
              {mobileIndustriesOpen && (
                <div className="p-3 border-t border-slate-800/70 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {industryCategories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setMobileIndustryCategory(c.name)}
                        className={`text-[11px] px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          mobileIndustryCategory === c.name
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {industriesData
                      .filter((i) => i.category === mobileIndustryCategory)
                      .map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleMobileNavigate(`/industries/${item.slug}`)}
                          className="text-left py-2 px-2.5 text-xs text-slate-300 hover:text-blue-400 rounded-lg bg-slate-950/60 border border-slate-800/60 truncate"
                        >
                          {item.name}
                        </button>
                      ))}
                  </div>

                  <button
                    onClick={() => handleMobileNavigate('/industries')}
                    className="w-full text-left py-2 px-1 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    View All 33 Industry Directories →
                  </button>
                </div>
              )}
            </div>

            {/* Direct Navigation Links */}
            <div className="space-y-1 pt-1">
              <button
                onClick={() => handleMobileNavigate('/our-work')}
                className="w-full text-left p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-sm font-bold text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>Our Work (5 Live Client Projects)</span>
                <span className="text-xs text-blue-400 font-mono">Sign Mumbai &amp; more →</span>
              </button>

              <button
                onClick={() => handleMobileNavigate('/company')}
                className="w-full text-left p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-sm font-bold text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>About Webtech IT Solution</span>
                <span className="text-xs text-blue-400 font-mono">Rohini Delhi →</span>
              </button>

              <button
                onClick={() => handleMobileNavigate('/contact')}
                className="w-full text-left p-4 rounded-2xl border border-slate-800 bg-slate-900/60 text-sm font-bold text-white hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>Contact &amp; Get Quotation</span>
                <span className="text-xs text-emerald-400 font-mono">Direct Desk →</span>
              </button>
            </div>

            {/* Consultation CTA in Mobile Menu */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-center text-sm shadow-xl shadow-blue-600/30"
              >
                Request Free Consultation
              </button>
            </div>

            {/* Address Footer inside Mobile Drawer */}
            <div className="text-center pt-2 text-[11px] text-slate-400">
              <p>Webtech IT Solution · Mangolpur Kalan, Rohini, Delhi 110085</p>
              <p className="mt-0.5">Call: 7977117717 · WhatsApp: 9594319442</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
