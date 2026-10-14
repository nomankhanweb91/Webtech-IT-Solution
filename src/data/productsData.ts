import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'whatsapp-bulk',
    slug: 'whatsapp-bulk',
    title: 'Whatsapp Bulk',
    tagline: 'High-speed automated WhatsApp marketing, notification broadcasting, and campaign engine.',
    shortDesc: 'Broadcast thousands of promotional messages, transactional alerts, and automated follow-ups with official WhatsApp Cloud API compliance.',
    category: 'Marketing Automation Software',
    iconName: 'MessageSquare',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Official Meta WhatsApp Business Cloud API support',
      'Smart anti-ban delay pacing and warm-up algorithms',
      'Personalized dynamic fields (e.g., {{name}}, {{amount}}, {{due_date}})',
      'Rich media support (Images, PDF invoices, Quick Reply CTA buttons)',
      'Automated CSV contact list importer with number validation',
      'Real-time delivery, read receipts, and response analytics',
    ],
    highlights: [
      {
        title: 'Instant Multi-User Inbox',
        detail: 'Enable multiple support and sales agents to chat with customers from one verified WhatsApp number simultaneously.',
      },
      {
        title: 'Auto-Trigger Webhooks',
        detail: 'Trigger automated WhatsApp receipts when payments succeed on Razorpay, Stripe, or Shopify.',
      },
      {
        title: 'Chatbot Builder Included',
        detail: 'Visual drag-and-drop conversational decision trees for FAQs, product inquiries, and automated qualification.',
      },
    ],
    targetAudience: 'E-commerce brands, real estate brokers, coaching institutes, clinics, retail shops, and B2B enterprises.',
  },
  {
    id: 'crm-management',
    slug: 'crm-management',
    title: 'CRM Management',
    tagline: 'Comprehensive customer relationship, sales pipeline, and automated team task platform.',
    shortDesc: 'A lightning-fast CRM that consolidates leads from WhatsApp, website forms, Google Ads, and Facebook into one collaborative board.',
    category: 'Enterprise SaaS',
    iconName: 'Users',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Visual Kanban sales pipeline with custom stages',
      'Automatic lead round-robin assignment among sales agents',
      'Direct WhatsApp and 1-click phone dialer from inside the CRM',
      'Lead scoring and cold lead re-engagement reminders',
      'Daily salesperson activity tracking and revenue reports',
      'Multi-role permissions for Owner, Managers, and Telecallers',
    ],
    highlights: [
      {
        title: 'Zero Lost Leads',
        detail: 'Capture leads instantaneously from your website, WhatsApp, IndiaMART, Justdial, and Google Ads without manual entry.',
      },
      {
        title: 'Performance Leaderboards',
        detail: 'Track which sales rep closed the most deals, average closing time, and total conversion revenue per campaign.',
      },
      {
        title: 'Mobile Friendly',
        detail: 'Field sales agents can update client meeting notes, upload agreements, and send quotations directly from their mobile browser.',
      },
    ],
    targetAudience: 'Sales teams, consultants, educational academies, service providers, manufacturing dealers, and agency owners.',
  },
  {
    id: 'appointment-booking-app',
    slug: 'all-type-appointment-booking-android-app',
    title: 'All type of Appointment Booking Android App',
    tagline: 'Turnkey mobile appointment scheduling and queue management application for Android & iOS.',
    shortDesc: 'A full-featured mobile app template with real-time slot selection, doctor/consultant profiles, Google Calendar sync, and online prepayments.',
    category: 'Mobile Application (APK & Source)',
    iconName: 'Calendar',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Customer app with smooth slot picking and OTP login',
      'Admin / Vendor app to accept, reschedule, or cancel bookings',
      'Automated SMS & WhatsApp appointment reminder alerts',
      'Integrated UPI / NetBanking / Cash on Service payments',
      'Live token queue tracking for in-clinic or in-salon waiting times',
      'Ratings, reviews, and staff service categorization',
    ],
    highlights: [
      {
        title: 'White-Label Branding',
        detail: 'Branded with your company name, color palette, custom logo, and published on your Google Play Console.',
      },
      {
        title: 'Instant Push Notifications',
        detail: 'Firebase Cloud Messaging keeps customers updated on booking approvals, upcoming slots, and delays.',
      },
      {
        title: 'Multi-Branch Support',
        detail: 'Easily manage schedules and staff across multiple clinic or salon branch locations from a centralized dashboard.',
      },
    ],
    targetAudience: 'Doctors, dental clinics, beauty salons, car detailing centers, gym trainers, advocates, and wellness spas.',
  },
  {
    id: 'kids-puzzle-game',
    slug: 'kids-puzzle-game',
    title: 'Kids Puzzle Game',
    tagline: 'Interactive, educational, and engaging 2D/3D brain-training puzzle game for young learners.',
    shortDesc: 'Engaging shape-matching, animal sound recognition, logic puzzles, and memory games designed with vibrant kid-friendly graphics.',
    category: 'Gaming & EdTech Mobile App',
    iconName: 'Gamepad2',
    imageUrl: 'https://images.unsplash.com/photo-1566694271453-390536dd1f0d?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      '100+ progressively challenging puzzle levels',
      'Vibrant child-safe UI with no predatory ads or external links',
      'Offline play capability — zero internet connection required',
      'High-quality joyful sound effects and cheerful voiceovers',
      'Parental control gateway and play duration timers',
      'Supports Android tablets, phones, and Chromebooks',
    ],
    highlights: [
      {
        title: 'Cognitive Development Focused',
        detail: 'Built following early childhood cognitive development guidelines for spatial awareness, color matching, and fine motor skills.',
      },
      {
        title: 'Monetization Ready',
        detail: 'Pre-integrated with AdMob kid-directed ads and Google Play In-App Billing for premium level pack unlocks.',
      },
      {
        title: 'Lightweight APK',
        detail: 'Engineered with optimized vector sprites, ensuring an ultra-small install size (< 25MB) for quick downloads.',
      },
    ],
    targetAudience: 'Indie game publishers, preschools, EdTech startups, parenting content brands, and gaming studios.',
  },
  {
    id: 'invoice-bill-maker',
    slug: 'invoice-bill-maker',
    title: 'Invoice & Bill Maker',
    tagline: 'Fast GST invoice generator, thermal printer POS billing, and business ledger management.',
    shortDesc: 'Create professional GST and non-GST invoices, estimate quotes, and payment receipts in under 30 seconds with automatic tax calculations.',
    category: 'Fintech & Business Utility',
    iconName: 'Receipt',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Instant GST (CGST/SGST/IGST) and HSN/SAC code calculator',
      '1-click PDF generation with company logo, bank details, and signature',
      'Direct WhatsApp sharing of PDF invoices to customers',
      'Bluetooth thermal printer support (2-inch & 3-inch POS rolls)',
      'Tracks unpaid, partially paid, and overdue payment statuses',
      'Comprehensive monthly GSTR-1 and sales tax export sheets',
    ],
    highlights: [
      {
        title: 'Works 100% Offline',
        detail: 'Generate and print bills on the spot without relying on stable internet; automatically syncs to cloud when online.',
      },
      {
        title: 'Customer Ledger (Khata)',
        detail: 'Maintain credit balances (Udhaar), record partial payments, and send polite WhatsApp payment reminders.',
      },
      {
        title: 'Barcode & SKU Scanning',
        detail: 'Scan item barcodes with your phone camera or barcode scanner for rapid billing at retail checkout counters.',
      },
    ],
    targetAudience: 'Retail shops, wholesalers, freelancers, contractors, distributors, repair workshops, and small business merchants.',
  },
  {
    id: 'pdf-tools-app',
    slug: 'pdf-tools-app',
    title: 'PDF Tools App',
    tagline: 'All-in-one document scanner, PDF merger, compressor, converter, and e-signature suite.',
    shortDesc: 'A powerful utility app that turns your smartphone into a portable document scanner, high-compression optimizer, and encrypted PDF editor.',
    category: 'Productivity & Utility Software',
    iconName: 'FileText',
    imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
    keyFeatures: [
      'Camera-to-PDF smart scanner with auto-edge detection and perspective correction',
      'Lossless and high-compression optimizer (reduce 20MB files to under 1MB)',
      'Merge multiple PDFs into a single file or split pages instantly',
      'Password protection and 128-bit AES encryption/decryption',
      'Watermark branding, digital signature drawing, and page reordering',
      'Image to PDF (JPG/PNG to PDF) and PDF to image converter',
    ],
    highlights: [
      {
        title: 'Private & Local Processing',
        detail: 'All PDF processing happens on-device with zero file uploads to external servers, guaranteeing 100% confidential privacy.',
      },
      {
        title: 'OCR Text Recognition',
        detail: 'Extract editable text from scanned bills, business cards, and printed documents with multilingual OCR.',
      },
      {
        title: 'Ready for Play Store Deployment',
        detail: 'Modern Clean Architecture in Flutter/Android, with Google AdMob banners/interstitials and in-app purchase subscriptions.',
      },
    ],
    targetAudience: 'Students, accountants, legal practitioners, government job applicants, remote workers, and utility app publishers.',
  },
];
