/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCTABar } from './components/FloatingCTABar';
import { GlobalLeadModal } from './components/GlobalLeadModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsIndexPage } from './pages/ProductsIndexPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { IndustriesIndexPage } from './pages/IndustriesIndexPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';

import { servicesData } from './data/servicesData';
import { productsData } from './data/productsData';
import { industriesData } from './data/industriesData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalServiceContext, setModalServiceContext] = useState<string>('');
  const [hasShownAutoModal, setHasShownAutoModal] = useState(false);

  // Sync hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentPath(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Polite auto-popup timer (Section 1I: >= 10s dwell requirement)
  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('lead_modal_dismissed');
      if (!dismissed && !hasShownAutoModal) {
        setModalOpen(true);
        setHasShownAutoModal(true);
      }
    }, 14000); // 14 seconds dwell

    return () => clearTimeout(timer);
  }, [hasShownAutoModal]);

  // Exit intent detection for desktop
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasShownAutoModal) {
        const dismissed = sessionStorage.getItem('lead_modal_dismissed');
        if (!dismissed) {
          setModalOpen(true);
          setHasShownAutoModal(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownAutoModal]);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationModal = (serviceName?: string) => {
    setModalServiceContext(serviceName || '');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    sessionStorage.setItem('lead_modal_dismissed', 'true');
  };

  // Dynamic SEO metadata updater on route change
  useEffect(() => {
    let title = 'Webtech IT Solution – Custom Web Development, AI & Software Agency';
    let description = 'Webtech IT Solution, founded by Noman Khan, provides custom website development, AI solutions, mobile apps, and enterprise software in Delhi, India.';

    if (currentPath === '/') {
      title = 'Webtech IT Solution – Custom Web Development, AI & Software Agency';
      description = 'Premier IT services agency delivering custom web development, AI automation, mobile apps, CRM, and eCommerce solutions from Rohini, Delhi.';
    } else if (currentPath === '/services') {
      title = 'Our Services – Custom Web, AI, Mobile & Enterprise IT | Webtech IT Solution';
      description = 'Explore our 9 specialized IT services including UI/UX design, custom web development, Shopify, B2B solutions, and AI automation.';
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const s = servicesData.find((item) => item.slug === slug);
      if (s) {
        title = `${s.title} Services – Webtech IT Solution`;
        description = `${s.tagline} Professional ${s.title} engineered by Noman Khan in Rohini, Delhi.`;
      }
    } else if (currentPath === '/products') {
      title = 'Software Products & Turnkey Applications – Webtech IT Solution';
      description = 'Ready-to-deploy white-label software products including Whatsapp Bulk, CRM Management, Appointment Booking, and Invoice Maker.';
    } else if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      const p = productsData.find((item) => item.slug === slug);
      if (p) {
        title = `${p.title} – Turnkey Software Product | Webtech IT Solution`;
        description = `${p.tagline} Request live demo and white-label licensing.`;
      }
    } else if (currentPath === '/industries') {
      title = 'Industries We Serve – 33 Specialized Sector Architectures | Webtech IT Solution';
      description = 'Custom software development tailored for 33 industries including EV, Banking, Real Estate, Logistics, Healthcare, and On-Demand apps.';
    } else if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '');
      const ind = industriesData.find((item) => item.slug === slug);
      if (ind) {
        title = `${ind.name} Custom Software & IT Solutions – Webtech IT Solution`;
        description = `Tailored software architectures and IT development for the ${ind.name} industry.`;
      }
    } else if (currentPath === '/our-work') {
      title = 'Our Work & Case Studies – Live Client Projects | Webtech IT Solution';
      description = 'Explore live client websites and platforms shipped by Webtech IT Solution: Sign Mumbai, Dsign Interior, Blue Cross, Bharat Darshan, and Genz Coin Trading.';
    } else if (currentPath === '/company') {
      title = 'About Founder Noman Khan & Company Heritage – Webtech IT Solution';
      description = 'Learn about Webtech IT Solution, founded in 2023 by Noman Khan in Rohini, Delhi. Our engineering philosophy, standards, and agency vision.';
    } else if (currentPath === '/contact') {
      title = 'Contact Webtech IT Solution – Rohini, Delhi Office & WhatsApp';
      description = 'Get in touch with founder Noman Khan on phone 7977117717, WhatsApp 9594319442, or visit our office in Mangolpur Kalan, Rohini, Delhi 110085.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  // Route Renderer
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/services') {
      return (
        <ServicesIndexPage
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/products') {
      return (
        <ProductsIndexPage
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return (
        <ProductDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/industries') {
      return (
        <IndustriesIndexPage
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '');
      return (
        <IndustryDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/our-work') {
      return (
        <OurWorkPage
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/company') {
      return (
        <CompanyPage
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      );
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Fallback to Home
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenConsultationModal={handleOpenConsultationModal}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header with Mega Menus */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Floating Action Buttons & Desktop WhatsApp */}
      <FloatingCTABar
        onOpenConsultationModal={() => handleOpenConsultationModal()}
      />

      {/* Global High-Converting Lead Popup Modal */}
      <GlobalLeadModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={modalServiceContext}
      />
    </div>
  );
}
