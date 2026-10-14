import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Pixel-perfect digital interfaces built for maximum conversion and frictionless UX.',
    shortDesc: 'Human-centered wireframing, high-fidelity design systems, and rapid interactive prototypes.',
    iconName: 'Layout',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
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
        title: 'Server-Side Rendering (SSR) & Static Generation',
        description: 'Instant first-contentful paint, zero lag hydration, and edge-rendered pages that Googlebot indexes instantly.',
      },
      {
        title: 'Clean, Maintainable Codebase',
        description: 'Strict TypeScript typing, modular component directories, and strict linting for effortless future feature expansion.',
      },
      {
        title: 'Zero Vulnerabilities & Secure Deployments',
        description: 'Hardened HTTP headers, sanitized form endpoints, CSRF defenses, and automatic SSL setup on AWS/Cloud Run.',
      },
    ],
    faqs: [
      {
        question: 'Will our website load under 1 second on mobile networks in India?',
        answer: 'Yes, we optimize code bundles, leverage modern AVIF/WebP image formats, and serve assets via global CDNs to ensure sub-second mobile loads.',
      },
      {
        question: 'Can you migrate our legacy site without losing SEO rankings?',
        answer: 'Absolutely. We map every existing URL with 301 redirects, preserve meta titles and schema tags, and maintain canonical URLs.',
      },
    ],
  },
  {
    id: 'wordpress-development',
    slug: 'wordpress-development',
    title: 'WordPress Development',
    tagline: 'Bespoke custom WordPress themes and high-speed WooCommerce architectures.',
    shortDesc: 'Enterprise Gutenberg blocks, headless WordPress APIs, and zero-bloat custom PHP solutions.',
    iconName: 'Globe',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Custom lightweight PHP / Gutenberg theme',
      'Database query optimization & Redis caching',
      'WooCommerce bespoke checkout flow',
      'Advanced Custom Fields (ACF Pro) setups',
      'Automated daily backup and security hardening',
    ],
    techStack: ['WordPress', 'PHP 8.2+', 'MySQL', 'WooCommerce', 'Tailwind CSS', 'Redis'],
    features: [
      {
        title: 'Zero Bloat Architecture',
        description: 'We avoid heavy page builders that degrade PageSpeed. Everything is engineered cleanly with native Gutenberg blocks and semantic markup.',
      },
      {
        title: 'Bulletproof Security',
        description: 'Hardened wp-admin endpoints, brute force protection, two-factor authentication, and automated malware scanning.',
      },
      {
        title: 'Headless WordPress Option',
        description: 'Use WordPress as an easy editorial CMS while serving the frontend with high-performance Next.js for maximum speed.',
      },
    ],
    faqs: [
      {
        question: 'Can my non-technical marketing team update text and images easily?',
        answer: 'Yes! We configure tailored Gutenberg blocks and ACF fields so anyone on your team can edit content without touching code.',
      },
      {
        question: 'How do you prevent WordPress security breaches?',
        answer: 'We enforce custom database prefixes, disable XML-RPC, restrict admin directories, apply strict file permissions, and automate core updates.',
      },
    ],
  },
  {
    id: 'shopify-ecommerce',
    slug: 'shopify-ecommerce',
    title: 'Shopify & E-commerce',
    tagline: 'High-conversion Shopify storefronts, bespoke Liquid themes, and D2C scaling.',
    shortDesc: 'Instant 1-page checkout, custom product builders, and automated WhatsApp cart recovery.',
    iconName: 'ShoppingCart',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Custom Shopify Liquid / Hydrogen theme',
      'Seamless payment gateway integration (Razorpay, UPI, Stripe)',
      'High-converting mobile checkout flow',
      'WhatsApp abandoned cart notification engine',
      'Inventory and ERP synchronization',
    ],
    techStack: ['Shopify Liquid', 'Hydrogen / Remix', 'Tailwind CSS', 'Razorpay', 'Klaviyo'],
    features: [
      {
        title: 'Optimized Mobile First Checkout',
        description: 'Single-click UPI and wallet checkout designed to drastically reduce drop-off rates on mobile shoppers in India and abroad.',
      },
      {
        title: 'High-Speed Liquid Coding',
        description: 'Custom theme code without dependency on dozens of speed-killing third-party apps.',
      },
      {
        title: 'Automated Retention & Re-engagement',
        description: 'Trigger automated WhatsApp order confirmation, tracking updates, and re-order reminders.',
      },
    ],
    faqs: [
      {
        question: 'Can you integrate Indian payment gateways like Razorpay, Cashfree, and PayU?',
        answer: 'Yes, we have extensive experience setting up all major Indian and international payment gateways with seamless UPI auto-pay.',
      },
      {
        question: 'Do you assist with product data upload and SKU migration?',
        answer: 'Yes, we handle CSV catalog imports, collection organization, variants configuration, and high-res image compression.',
      },
    ],
  },
  {
    id: 'b2b-solutions',
    slug: 'b2b-solutions',
    title: 'B2B Solutions',
    tagline: 'Enterprise supplier portals, dealer networks, and automated quotation systems.',
    shortDesc: 'Wholesale B2B ordering systems, tiered pricing matrices, and CRM integrations.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Dealer and distributor login portal',
      'Dynamic RFQ (Request for Quotation) engine',
      'Tiered bulk discount and credit limit manager',
      'ERP and accounting software connectors (Tally, SAP)',
      'Automated GST invoice generation',
    ],
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Node.js', 'Docker', 'GraphQL'],
    features: [
      {
        title: 'Dealer Account Hierarchy',
        description: 'Multi-user organizational accounts with distinct roles for purchasing managers, finance approvers, and store managers.',
      },
      {
        title: 'Automated RFQ & Negotiation Workflows',
        description: 'Allow B2B buyers to request custom quotes and receive rapid approvals with automated margin calculations.',
      },
      {
        title: 'GST-Compliant Invoicing',
        description: 'Generate accurate B2B GST tax invoices with e-way bill readiness and export formats for accounting software.',
      },
    ],
    faqs: [
      {
        question: 'Can the portal integrate with our existing Tally or SAP accounting software?',
        answer: 'Yes, we create custom REST APIs and batch sync connectors to sync orders, inventory balances, and ledger invoices directly.',
      },
      {
        question: 'Can different dealers see different pricing tiers?',
        answer: 'Yes, our platform supports multi-tier price lists, customized discount structures, and volume-based minimum order thresholds.',
      },
    ],
  },
  {
    id: 'ai-development',
    slug: 'ai-development',
    title: 'AI Development',
    tagline: 'Autonomous AI agents, generative business intelligence, and intelligent WhatsApp bots.',
    shortDesc: 'Fine-tuned LLM workflows, private vector databases, and automated document analysis.',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Gemini & OpenAI intelligent API integration',
      'RAG (Retrieval-Augmented Generation) knowledge bases',
      '24/7 WhatsApp AI Customer Support & Sales bot',
      'Automated invoice and PDF extraction pipelines',
      'Custom business intelligence dashboard',
    ],
    techStack: ['Python', 'FastAPI', 'Gemini SDK', 'LangChain', 'Pinecone', 'PostgreSQL pgvector'],
    features: [
      {
        title: 'Private Company Knowledge Retrieval',
        description: 'Empower your team or customers to query your internal documentation, product catalogs, and policies with zero hallucinations.',
      },
      {
        title: 'WhatsApp Conversational Sales Agents',
        description: 'AI bots that qualify inbound leads, answer technical questions in natural Hindi and English, and schedule calls automatically.',
      },
      {
        title: 'Automated Data Extraction',
        description: 'Parse thousands of unstructured invoices, PDFs, and contracts into structured JSON database records in seconds.',
      },
    ],
    faqs: [
      {
        question: 'Will our proprietary corporate data be kept secure and confidential?',
        answer: 'Yes, we implement enterprise-grade privacy controls. Your proprietary documents are never used for public model training.',
      },
      {
        question: 'Can the AI bot answer queries in Hindi, Hinglish, and English?',
        answer: 'Yes, our AI pipelines handle multilingual vernacular inquiries with high semantic comprehension and natural fluency.',
      },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'High-performance cross-platform iOS & Android apps built for scale.',
    shortDesc: 'Native performance, 60fps animations, offline data sync, and instant push notifications.',
    iconName: 'Smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Production-ready React Native / Flutter apps',
      'App Store and Google Play publishing compliance',
      'Real-time GPS tracking and Bluetooth integrations',
      'FCM push notification infrastructure',
      'Offline-first SQLite / WatermelonDB synchronization',
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Swift', 'Kotlin'],
    features: [
      {
        title: 'Single Codebase, Native Speed',
        description: 'Cut development and maintenance costs in half with cross-platform frameworks compiled directly into native iOS and Android bytecode.',
      },
      {
        title: 'Reliable Offline Operation',
        description: 'Users can continue using core features even in low-connectivity areas; data automatically synchronizes when connection returns.',
      },
      {
        title: 'Full Store Compliance & Publishing',
        description: 'We handle the entire App Store Review and Google Play Console verification, privacy manifests, and release cycle.',
      },
    ],
    faqs: [
      {
        question: 'Do you manage app submission and approval on Google Play and Apple App Store?',
        answer: 'Yes, we take care of all developer account setup, test builds, privacy policy disclosures, screenshots, and review responses.',
      },
      {
        question: 'How do you ensure 60 FPS smooth rendering on budget Android devices?',
        answer: 'We profile memory allocations, utilize native UI threads, optimize image caching, and avoid unneeded re-renders.',
      },
    ],
  },
  {
    id: 'custom-software-saas',
    slug: 'custom-software-saas',
    title: 'Custom Software & SaaS',
    tagline: 'Scalable multi-tenant SaaS platforms, internal ERPs, and cloud microservices.',
    shortDesc: 'Architected with battle-tested cloud standards, high availability, and role-based access control.',
    iconName: 'Server',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Multi-tenant database architecture (PostgreSQL / Redis)',
      'Role-based access control (RBAC) security layer',
      'Automated recurring billing and subscription engines',
      'Comprehensive REST and GraphQL API suites',
      'Dockerized CI/CD automated deployment pipelines',
    ],
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS / GCP', 'Redis'],
    features: [
      {
        title: 'Built for High Concurrency',
        description: 'Designed to handle thousands of concurrent transactions without lockups, utilizing connection pooling and cached query layers.',
      },
      {
        title: 'Granular Role-Based Access Control',
        description: 'Strict security boundaries ensuring admins, managers, field operators, and clients only access data authorized for their role.',
      },
      {
        title: 'Audit Logs & Regulatory Compliance',
        description: 'Immutable transaction trails, data encryption at rest and in transit, and complete operational observability.',
      },
    ],
    faqs: [
      {
        question: 'Can you build our software in phases (MVP first)?',
        answer: 'Yes, we operate in rapid agile sprints. We typically launch a fully functional MVP in 4 to 8 weeks, then iterate based on real feedback.',
      },
      {
        question: 'Do we own 100% of the intellectual property (IP) and source code?',
        answer: 'Yes, upon project completion and handover, you receive full ownership of the Git repository, architecture documentation, and codebase.',
      },
    ],
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    title: 'SEO & Website Optimization',
    tagline: 'Dominate Google search results with technical SEO, Core Web Vitals, and semantic schema.',
    shortDesc: 'Data-driven on-page SEO, high-authority backlink strategy, and local Rohini & Delhi search dominance.',
    iconName: 'Search',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Comprehensive Technical SEO and audit report',
      'Schema.org JSON-LD rich snippet integration',
      'Core Web Vitals acceleration (LCP, FID, CLS)',
      'Keyword research & competitor gap analysis',
      'Google Search Console & GA4 tracking setup',
    ],
    techStack: ['Schema.org', 'Google Search Console', 'Ahrefs', 'Semrush', 'Lighthouse'],
    features: [
      {
        title: 'Google Core Web Vitals Dominance',
        description: 'We optimize First Input Delay, Largest Contentful Paint, and Cumulative Layout Shift to earn Google high-performance ranking boosts.',
      },
      {
        title: 'Rich Snippets & Structured Data',
        description: 'Implement Organization, LocalBusiness, FAQPage, Product, and Service schemas so your listings stand out with star ratings and rich cards.',
      },
      {
        title: 'Local SEO Dominance in Rohini & Delhi',
        description: 'Target high-intent geographic keywords to generate qualified inbound commercial phone calls and WhatsApp inquiries.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see rankings improve on Google?',
        answer: 'Technical SEO fixes and Core Web Vitals improvements typically reflect in Search Console within 2 to 4 weeks. Competitive keyword growth scales in 2 to 4 months.',
      },
      {
        question: 'Do you provide ongoing monthly ranking reports?',
        answer: 'Yes, we provide transparent monthly dashboards tracking organic impressions, clicks, keyword rank movements, and qualified conversion leads.',
      },
    ],
  },
];
