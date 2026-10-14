import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Pixel-perfect digital interfaces built for maximum conversion and frictionless UX.',
    shortDesc: 'Human-centered wireframing, high-fidelity design systems, and rapid interactive prototypes.',
    iconName: 'Layout',
    deliverables: [
      'Interactive Figma prototypes',
      'Scalable atomic design systems',
      'Mobile-first responsive layouts',
      'UX accessibility & WCAG audit',
      'User journey mapping & usability testing',
    ],
    techStack: ['Figma', 'Adobe XD', 'Framer', 'FigJam', 'Principle'],
    features: [
      {
        title: 'Design Systems That Scale',
        description: 'Complete tokenized style guides, modular component libraries, and typography scales ready for engineering handoff.',
      },
      {
        title: 'Conversion-Focused Architecture',
        description: 'Every button placement, spacing increment, and micro-copy is crafted to minimize churn and accelerate lead captures.',
      },
      {
        title: 'Rapid Validation & Prototypes',
        description: 'Interactive high-fidelity clickable demos that allow stakeholders and early users to experience flows before writing a single line of code.',
      },
    ],
    faqs: [
      {
        question: 'What is your typical turnaround time for UI/UX deliverables?',
        answer: 'For standard MVP workflows, initial wireframes are completed within 4 to 6 business days, and complete design systems in 10 to 14 business days.',
      },
      {
        question: 'Do you provide developer-ready handoff files?',
        answer: 'Yes, all Figma assets include autolayout, responsive constraints, hex codes, typography tokens, and exported SVG assets.',
      },
    ],
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Lightning-fast, bespoke websites engineered with React, Next.js, and modern frameworks.',
    shortDesc: 'Custom corporate websites, dynamic portals, and high-converting landing pages with 95+ PageSpeed.',
    iconName: 'Code',
    deliverables: [
      'Full-stack Next.js / React application',
      'Core Web Vitals 95+ optimization',
      'Semantic SEO-ready architecture',
      'Content management integration (CMS)',
      'Cross-browser and responsive testing',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite'],
    features: [
      {
        title: 'Blazing Fast Core Web Vitals',
        description: 'Optimized server-side rendering (SSR), image compression, and zero bloated scripts guarantee lightning-fast load times under 1 second.',
      },
      {
        title: 'Custom Clean Code Architecture',
        description: 'No bloated page-builder code. Handcrafted TypeScript code that is maintainable, scalable, and secure against common vulnerabilities.',
      },
      {
        title: 'Lead Capture Engine',
        description: 'Built-in WhatsApp triggers, validated multi-step inquiry forms, and automated CRM webhooks so you never lose a prospective lead.',
      },
    ],
    faqs: [
      {
        question: 'Can you migrate our existing slow website to a modern tech stack?',
        answer: 'Absolutely. We specialize in revamping legacy, sluggish websites into fast, modern Next.js/React applications with zero downtime or SEO ranking loss.',
      },
      {
        question: 'Is hosting and domain configuration included?',
        answer: 'We assist with cloud deployment on Vercel, AWS, Cloud Run, or your preferred hosting environment, complete with SSL certificates.',
      },
    ],
  },
  {
    id: 'wordpress-development',
    slug: 'wordpress-development',
    title: 'WordPress Development',
    tagline: 'Custom WordPress themes, plugins, and headless CMS implementations without plugin bloat.',
    shortDesc: 'Secure, lightweight WordPress websites customized for publishing, business portfolios, and lead generation.',
    iconName: 'Globe',
    deliverables: [
      'Bespoke lightweight theme development',
      'Custom Gutenberg blocks & post types',
      'Speed and database caching optimization',
      'Hardened enterprise WordPress security',
      'Automated daily backup configuration',
    ],
    techStack: ['PHP 8+', 'WordPress', 'WooCommerce', 'MySQL', 'REST API', 'Redis'],
    features: [
      {
        title: 'Tailored Without Heavy Builders',
        description: 'We code bespoke themes from scratch using clean PHP and custom blocks, bypassing slow builders like Elementor that ruin page speeds.',
      },
      {
        title: 'Enterprise Hardened Security',
        description: 'Complete protection against brute-force attacks, SQL injections, and cross-site scripting with two-factor authentication and strict file permissions.',
      },
      {
        title: 'Intuitive Admin Dashboards',
        description: 'Non-technical team members can easily edit text, replace imagery, publish blog posts, and manage inquiries without breaking layouts.',
      },
    ],
    faqs: [
      {
        question: 'Will our WordPress site load fast on mobile devices?',
        answer: 'Yes. By eliminating excessive third-party plugins and optimizing server caching, our custom WordPress builds regularly achieve A-grade GTmetrix scores.',
      },
    ],
  },
  {
    id: 'shopify-ecommerce',
    slug: 'shopify-ecommerce',
    title: 'Shopify & E-commerce',
    tagline: 'High-conversion online storefronts designed to maximize average order value (AOV) and checkout speed.',
    shortDesc: 'Shopify theme customization, Liquid development, custom checkout flows, and payment gateway setups.',
    iconName: 'ShoppingCart',
    deliverables: [
      'Custom Shopify Liquid theme coding',
      'Payment gateway setup (Razorpay, Stripe, Cashfree)',
      'Cart upsell & cross-sell logic',
      'Inventory and ERP synchronization',
      'Mobile-optimized 1-page checkout flows',
    ],
    techStack: ['Shopify', 'Liquid', 'WooCommerce', 'Razorpay', 'Stripe', 'Node.js'],
    features: [
      {
        title: 'Frictionless Checkout Flows',
        description: 'Optimized cart drawers, native UPI/card gateways, and streamlined addresses that reduce checkout abandonment by up to 35%.',
      },
      {
        title: 'Custom Product Customizers',
        description: 'Enable buyers to configure sizes, custom engravings, colors, and bundle variants in real time with dynamic pricing calculations.',
      },
      {
        title: 'High-Volume Scalability',
        description: 'Built to effortlessly handle sudden viral flash sales and holiday shopping traffic surges without server hiccups.',
      },
    ],
    faqs: [
      {
        question: 'Can you integrate Indian payment gateways like Razorpay, PhonePe, and Cash on Delivery?',
        answer: 'Yes, we configure all leading domestic and international gateways, UPI QR flows, and fraud-protected Cash on Delivery verification.',
      },
    ],
  },
  {
    id: 'b2b-solutions',
    slug: 'b2b-solutions',
    title: 'B2B Solutions',
    tagline: 'Enterprise vendor portals, distributor networks, and quotation management software.',
    shortDesc: 'Automated procurement, multi-tier pricing, dealer ordering portals, and role-based access management.',
    iconName: 'Briefcase',
    deliverables: [
      'B2B Wholesale & Dealer Portal',
      'Custom RFQ (Request for Quote) engines',
      'Tiered pricing & credit limit controls',
      'ERP & Accounting system integration',
      'Role-based permission controls',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS', 'Docker'],
    features: [
      {
        title: 'Multi-Tiered Pricing Structures',
        description: 'Assign wholesale tiers, minimum order quantities (MOQ), and customized credit payment terms automatically for each registered vendor.',
      },
      {
        title: 'Bulk Ordering & CSV Import',
        description: 'Allow corporate buyers to upload massive spreadsheets or re-order past wholesale invoices in one single click.',
      },
      {
        title: 'Automated Invoicing & GST Compliance',
        description: 'Instant generation of GST-compliant tax invoices, e-way bills, and automated payment reminders.',
      },
    ],
    faqs: [
      {
        question: 'Can B2B clients have distinct discount tiers?',
        answer: 'Yes, our portal allows granular pricing rules based on client group, order volume, payment terms, or geographic region.',
      },
    ],
  },
  {
    id: 'ai-development',
    slug: 'ai-development',
    title: 'AI Development',
    tagline: 'Custom intelligent agents, automated business workflows, and LLM-powered enterprise tooling.',
    shortDesc: 'RAG knowledge bases, automated WhatsApp customer support agents, document parsing, and predictive models.',
    iconName: 'Cpu',
    deliverables: [
      'Custom Gemini / LLM fine-tuned pipelines',
      'Automated 24/7 WhatsApp AI customer bots',
      'Document parsing & invoice extraction OCR',
      'Predictive analytics & sales forecasting',
      'Private vector database RAG implementation',
    ],
    techStack: ['Python', 'Gemini API', 'LangChain', 'FastAPI', 'Vector DB', 'PyTorch'],
    features: [
      {
        title: 'Domain-Trained Support Agents',
        description: 'Chatbots trained strictly on your company catalogs, documentation, and pricing sheets that answer customer queries accurately on WhatsApp.',
      },
      {
        title: 'Automated Document Intelligence',
        description: 'Extract line items, GST numbers, and vendor details from PDFs, scans, and physical receipts into structured database rows in milliseconds.',
      },
      {
        title: 'Intelligent Lead Scoring',
        description: 'Analyze inbound customer conversations and inquiries to rank sales prospects and auto-assign hot leads to senior representatives.',
      },
    ],
    faqs: [
      {
        question: 'Will our proprietary business data be kept private?',
        answer: 'Yes, we build self-contained enterprise solutions that never leak your internal business secrets or customer records into public model training sets.',
      },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Native and cross-platform iOS and Android applications built for fluid performance and user retention.',
    shortDesc: 'Cross-platform React Native and Flutter apps, offline-first architectures, and Google Play Store / App Store publishing.',
    iconName: 'Smartphone',
    deliverables: [
      'Production-ready Android APK/AAB & iOS build',
      'Google Play & Apple App Store submission',
      'Push notifications & in-app chat integration',
      'Real-time geolocation & background services',
      'Offline data caching & sync',
    ],
    techStack: ['React Native', 'Flutter', 'Android Studio', 'Swift', 'Firebase', 'Kotlin'],
    features: [
      {
        title: '60 FPS Fluid Native Experience',
        description: 'Smooth page transitions, hardware acceleration, and intuitive gesture-driven UI crafted specifically for touch screens.',
      },
      {
        title: 'Real-Time Tracking & Maps',
        description: 'Integrated live GPS tracking, delivery dispatch routing, and proximity notifications for on-demand services.',
      },
      {
        title: 'Seamless Offline Functionality',
        description: 'Users can continue browsing products, drafting orders, and filling forms even with intermittent internet access.',
      },
    ],
    faqs: [
      {
        question: 'Do you help with Google Play Store and Apple App Store approvals?',
        answer: 'Yes, we manage the entire publishing pipeline including developer console setup, privacy policy generation, screenshots, and review compliance.',
      },
    ],
  },
  {
    id: 'custom-software-saas',
    slug: 'custom-software-saas',
    title: 'Custom Software & SaaS',
    tagline: 'Scalable multi-tenant web applications, automated business platforms, and enterprise software.',
    shortDesc: 'End-to-end SaaS architecture, recurring subscription billing, user role permissions, and API infrastructure.',
    iconName: 'Server',
    deliverables: [
      'Multi-tenant cloud architecture',
      'Stripe / Razorpay subscription engine',
      'Role-based access control (RBAC)',
      'REST & GraphQL documented APIs',
      'Admin monitoring & telemetry console',
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'Redis', 'AWS'],
    features: [
      {
        title: 'Enterprise Multi-Tenancy',
        description: 'Separate organization workspaces, isolated database queries, and custom subdomains built from day one.',
      },
      {
        title: 'Automated Metered & Recurring Billing',
        description: 'Support for seat-based pricing, monthly recurring plans, discount coupons, and self-service cancellation portals.',
      },
      {
        title: 'Comprehensive Audit Logs',
        description: 'Full traceability of user modifications, security logins, exports, and sensitive operations for enterprise compliance.',
      },
    ],
    faqs: [
      {
        question: 'Can you build an MVP in under 6 weeks?',
        answer: 'Yes. Our agile sprint system allows us to deliver a functional, tested SaaS MVP with core user flows in 4 to 6 weeks.',
      },
    ],
  },
  {
    id: 'seo-website-optimization',
    slug: 'seo-website-optimization',
    title: 'SEO & Website Optimization',
    tagline: 'Technical search engine optimization that puts your business on page 1 of Google.',
    shortDesc: 'On-page SEO, schema markup, Core Web Vitals remediation, local SEO, and programmatic rank climbing.',
    iconName: 'Search',
    deliverables: [
      'Comprehensive technical SEO audit',
      'JSON-LD Schema & Rich Snippets integration',
      'Keyword research & competitor gap analysis',
      'PageSpeed 90+ performance remediation',
      'Google Search Console & Analytics configuration',
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Lighthouse', 'Schema.org', 'Screaming Frog'],
    features: [
      {
        title: 'Technical Schema & Entity Optimization',
        description: 'Structured data for LocalBusiness, FAQPage, Services, and Reviews so search engines display rich cards and star ratings in SERPs.',
      },
      {
        title: 'Core Web Vitals Remediation',
        description: 'Crush LCP, INP, and CLS bottlenecks to ensure search bots reward your site with top search ranking scores.',
      },
      {
        title: 'High-Intent Local Search Dominance',
        description: 'Target high-converting queries in Rohini, Delhi, and nationwide markets to capture ready-to-buy prospective clients.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see tangible ranking improvements?',
        answer: 'Technical fixes often yield initial indexing gains within 2 to 4 weeks, with substantial organic keyword climbs compounding between months 2 and 4.',
      },
    ],
  },
];
