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
import { getWhatsAppUrl, getPhoneUrl, COMPANY_PHONE } from '../utils/whatsapp';

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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

  // Close menus when path changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Industry categorization for Mega Menu
  const industryCategories = [
    { name: 'Business & Tech', icon: Building2, list: industriesData.filter(i => i.category === 'Business & Tech') },
    { name: 'Commerce & Mobility', icon: Car, list: industriesData.filter(i => i.category === 'Commerce & Mobility') },
    { name: 'Media & Lifestyle', icon: Globe2, list: industriesData.filter(i => i.category === 'Media & Lifestyle') },
    { name: 'Health & Public Sector', icon: Heart, list: industriesData.filter(i => i.category === 'Health & Public Sector') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
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
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                Webtech IT Solution
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
              Est. 2023 · Rohini, Delhi
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links with Mega Menus */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300">
          
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

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getPhoneUrl()}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            title="Call Us"
          >
            <Phone className="w-4 h-4 text-blue-400" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-slate-950/98 backdrop-blur-xl border-t border-slate-800 overflow-y-auto px-4 py-6 space-y-4 animate-in fade-in duration-150">
          
          {/* Mobile Top Contact Banner */}
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={getPhoneUrl()}
              className="flex items-center justify-center gap-2 p-2.5 bg-blue-600/10 border border-blue-500/20 rounded-xl text-xs font-semibold text-blue-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 7977117717</span>
            </a>
            <a
              href={getWhatsAppUrl('Hi Webtech IT Solution, I would like to discuss a project.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-emerald-600/10 border border-emerald-500/20 rounded-xl text-xs font-semibold text-emerald-400"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="space-y-2">
            {/* Services Accordion */}
            <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/50">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-slate-200"
              >
                <span>Services (9 Core Solutions)</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="p-3 pt-0 space-y-1.5 border-t border-slate-800/60">
                  {servicesData.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onNavigate(`/services/${s.slug}`)}
                      className="w-full text-left py-1.5 px-2 text-xs text-slate-300 hover:text-blue-400 rounded hover:bg-slate-800 transition-colors"
                    >
                      {s.title}
                    </button>
                  ))}
                  <button
                    onClick={() => onNavigate('/services')}
                    className="w-full text-left py-2 px-2 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View All Services Overview →
                  </button>
                </div>
              )}
            </div>

            {/* Products Accordion */}
            <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-slate-200"
              >
                <span>Products (6 Turnkey Apps)</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="p-3 pt-0 space-y-1.5 border-t border-slate-800/60">
                  {productsData.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => onNavigate(`/products/${p.slug}`)}
                      className="w-full text-left py-1.5 px-2 text-xs text-slate-300 hover:text-blue-400 rounded hover:bg-slate-800 transition-colors"
                    >
                      {p.title}
                    </button>
                  ))}
                  <button
                    onClick={() => onNavigate('/products')}
                    className="w-full text-left py-2 px-2 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View All Software Products →
                  </button>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/50">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <span>Industries</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">33 Sectors</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileIndustriesOpen && (
                <div className="p-3 pt-0 space-y-2 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1 pb-2">
                    {industryCategories.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setMobileIndustryCategory(c.name)}
                        className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                          mobileIndustryCategory === c.name
                            ? 'bg-blue-600 text-white font-medium'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    {industriesData
                      .filter((i) => i.category === mobileIndustryCategory)
                      .map((item) => (
                        <button
                          key={item.id}
                          onClick={() => onNavigate(`/industries/${item.slug}`)}
                          className="text-left py-1.5 px-2 text-xs text-slate-300 hover:text-blue-400 rounded hover:bg-slate-800 truncate"
                        >
                          {item.name}
                        </button>
                      ))}
                  </div>

                  <button
                    onClick={() => onNavigate('/industries')}
                    className="w-full text-left py-2 px-2 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View All 33 Industry Breakdown →
                  </button>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <button
              onClick={() => onNavigate('/our-work')}
              className="w-full text-left p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-sm font-semibold text-slate-200 hover:text-white"
            >
              Our Work (5 Live Client Projects)
            </button>

            <button
              onClick={() => onNavigate('/company')}
              className="w-full text-left p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-sm font-semibold text-slate-200 hover:text-white"
            >
              Company &amp; Founder (Noman Khan)
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="w-full text-left p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-sm font-semibold text-slate-200 hover:text-white"
            >
              Contact &amp; Rohini Delhi Office
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-center text-sm shadow-lg shadow-blue-600/30 mt-4"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
