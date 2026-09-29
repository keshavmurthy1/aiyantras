import React, { useEffect, useState } from 'react';

type IconName =
  | 'arrow'
  | 'assembly'
  | 'check'
  | 'chevron'
  | 'close'
  | 'cnc'
  | 'document'
  | 'eye'
  | 'factory'
  | 'gear'
  | 'menu'
  | 'network'
  | 'plug'
  | 'robot'
  | 'shield'
  | 'target'
  | 'test'
  | 'tools'
  | 'truck';

type RouteKey =
  | 'home'
  | 'solutions'
  | 'industries'
  | 'case-study'
  | 'about'
  | 'assessment'
  | 'contact';

const SITE_URL = 'https://www.aiyantras.com';

const COMPANY = {
  name: 'Aiyantras Automation',
  email: 'info@aiyantras.com',
  phone: '+91 90369 29191',
  location: 'Konanakunte, Bangalore, Karnataka, India',
  streetAddress:
    'No. 19/179 Annapoorneswari Layout, 3rd Cross, Konanakunte, New Bank Colony, Anjanapura Main Road',
  postalCode: '560062',
};

const routeMap: Record<string, RouteKey> = {
  '/': 'home',
  '/home': 'home',
  '/solutions': 'solutions',
  '/industries': 'industries',
  '/case-studies/hical-technologies': 'case-study',
  '/case-study/hical-technologies': 'case-study',
  '/about': 'about',
  '/automation-assessment': 'assessment',
  '/contact': 'contact',
};

const solutionCards = [
  {
    icon: 'gear' as IconName,
    eyebrow: 'SPM',
    title: 'Special Purpose Machines',
    body: 'Custom drilling, tapping, reaming, chamfering and multi-station machines engineered around your part and cycle-time targets.',
    link: '/solutions#spm',
  },
  {
    icon: 'assembly' as IconName,
    eyebrow: 'ASSEMBLY',
    title: 'Assembly Automation',
    body: 'Press-fit, fastening, dispensing, torquing, transfer and error-proofed assembly cells for repeatable production.',
    link: '/solutions#assembly',
  },
  {
    icon: 'test' as IconName,
    eyebrow: 'QUALITY',
    title: 'Testing & Inspection',
    body: 'Functional, leak, continuity, vision and end-of-line test systems with traceability and data capture.',
    link: '/solutions#testing',
  },
  {
    icon: 'cnc' as IconName,
    eyebrow: 'RETROFIT',
    title: 'CNC Automation & Retrofit',
    body: 'Legacy machine control upgrades, sensor integration, cycle improvements, SCADA dashboards and handling automation.',
    link: '/solutions#retrofit',
  },
  {
    icon: 'robot' as IconName,
    eyebrow: 'ROBOTICS',
    title: 'Robotics & Material Handling',
    body: 'Robot integration, EOAT, pick-and-place, conveyors, feeders and safe machine-to-machine material flow.',
    link: '/solutions#robotics',
  },
  {
    icon: 'tools' as IconName,
    eyebrow: 'TOOLING',
    title: 'Jigs, Fixtures & Tooling',
    body: 'Precision fixtures and poka-yoke systems designed for stable part location, repeatability and operator-friendly use.',
    link: '/solutions#tooling',
  },
];

const industryCards = [
  {
    icon: 'factory' as IconName,
    title: 'Automotive & Auto Components',
    slug: 'automotive',
    body: 'Assembly, pressing, machining support, inspection and testing for repeatable high-volume production.',
    accent: 'blue',
  },
  {
    icon: 'shield' as IconName,
    title: 'Aerospace & Defence',
    slug: 'aerospace-defence',
    body: 'Precision assembly, inspection, fixtures, testing, traceability and production tooling.',
    accent: 'violet',
  },
  {
    icon: 'plug' as IconName,
    title: 'Electronics & Electrical',
    slug: 'electronics',
    body: 'Connector handling, fastening, dispensing, functional testing and vision inspection.',
    accent: 'cyan',
  },
  {
    icon: 'target' as IconName,
    title: 'Medical Devices',
    slug: 'medical-devices',
    body: 'Repeatable precision assembly, inspection, testing and traceability for controlled processes.',
    accent: 'green',
  },
  {
    icon: 'gear' as IconName,
    title: 'General Engineering',
    slug: 'general-engineering',
    body: 'Custom automation for machine shops, precision engineering, industrial equipment and component manufacturers.',
    accent: 'orange',
  },
];

const processSteps = [
  ['01', 'Understand', 'Part, process, volumes, quality issues and production targets.'],
  ['02', 'Concept', 'Feasibility, process flow, station architecture and automation level.'],
  ['03', 'Engineer', 'Mechanical, electrical, pneumatic, PLC/HMI, safety and controls.'],
  ['04', 'Build & Validate', 'Manufacturing, assembly, dry runs, trials and capability validation.'],
  ['05', 'Commission', 'Installation, operator training, documentation and lifecycle support.'],
];

const capabilityRows = [
  ['Mechanical design', '3D CAD, mechanisms, fixtures, DFM and detailed machine engineering.'],
  ['Controls', 'PLC, HMI, sensors, safety circuits, sequencing and machine interfaces.'],
  ['Pneumatic / hydraulic', 'Actuation, pressure control, sequencing, force applications and serviceability.'],
  ['Vision / inspection', 'Camera-based inspection, presence checks, dimensional checks and defect detection.'],
  ['Robotics', 'Robot selection, EOAT, path planning and safe cell integration.'],
  ['Testing & traceability', 'Functional tests, leak / continuity testing, result logging and traceability.'],
];

function Icon({
  name,
  size = 24,
  stroke = 1.8,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case 'assembly':
      return (
        <svg {...common}>
          <path d="M8 4h8v4H8z" />
          <path d="M6 8h12v4H6z" />
          <path d="M9 12v6" />
          <path d="M15 12v6" />
          <path d="M5 20h14" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case 'cnc':
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4z" />
          <path d="M7 9h5M7 12h3M15 9h2M15 12h2" />
          <circle cx="18" cy="16" r="1.2" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h4M10 12h5M10 16h5" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...common}>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'factory':
      return (
        <svg {...common}>
          <path d="M4 20V8l6 3V8l6 3V6h4v14z" />
          <path d="M8 20v-4h3v4M14 20v-4h3v4" />
          <path d="M6 13h1M10 13h1M14 13h1M18 10h1" />
        </svg>
      );
    case 'gear':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1a2 2 0 0 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.2a2 2 0 0 1-4 0v-.2A2 2 0 0 0 5.8 17.8l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.6 12a2 2 0 0 1 2-2h.2a2 2 0 0 0 1.4-3.4l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A2 2 0 0 0 11.4 2h.2a2 2 0 0 1 2 2v.2A2 2 0 0 0 17 5.6l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 21.2 12h.2a2 2 0 0 1-2 2h-.2a2 2 0 0 0-1.8 1Z" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="5" height="5" rx="1" />
          <rect x="15" y="4" width="5" height="5" rx="1" />
          <rect x="9.5" y="15" width="5" height="5" rx="1" />
          <path d="M9 6.5h6M7 9v3h5M17 9v3h-5" />
        </svg>
      );
    case 'plug':
      return (
        <svg {...common}>
          <path d="M9 7v5M15 7v5" />
          <path d="M6 7h12" />
          <path d="M8 12a4 4 0 0 0 8 0" />
          <path d="M12 16v5" />
        </svg>
      );
    case 'robot':
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="9" rx="2" />
          <path d="M12 4v3M9.5 11h.01M14.5 11h.01M10 16v3M14 16v3" />
          <path d="M4 10h3M17 10h3" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
        </svg>
      );
    case 'target':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case 'test':
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v6l-4.2 7.5A2 2 0 0 0 7.5 20h9a2 2 0 0 0 1.7-3.5L14 9V3" />
          <path d="M8 14h8" />
        </svg>
      );
    case 'tools':
      return (
        <svg {...common}>
          <path d="m14.5 6.5 3-3 3 3-3 3z" />
          <path d="M18.3 8.3 11 15.6a2.5 2.5 0 0 1-3.5 0l-.1-.1a2.5 2.5 0 0 1 0-3.5l7.3-7.3" />
          <path d="m5 18 2 2" />
        </svg>
      );
    case 'truck':
      return (
        <svg {...common}>
          <path d="M3 6h11v10H3z" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    default:
      return null;
  }
}

function getRoute(): { key: RouteKey; hash: string } {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const key = routeMap[path] || 'home';
  return { key, hash: window.location.hash };
}

const SEO_CONFIG: Record<
  RouteKey,
  {
    title: string;
    description: string;
    path: string;
    label: string;
  }
> = {
  home: {
    title:
      'Special Purpose Machine & Industrial Automation Company in Bangalore | Aiyantras',
    description:
      'Aiyantras Automation designs and builds custom Special Purpose Machines (SPMs), assembly automation, testing, inspection, robotics and machine retrofit solutions in Bangalore and across India.',
    path: '/',
    label: 'Home',
  },
  solutions: {
    title: 'SPM & Industrial Automation Solutions in Bangalore | Aiyantras',
    description:
      'Explore custom SPMs, assembly automation, testing and inspection systems, CNC retrofit, robotics, material handling, jigs and fixtures from Aiyantras Automation.',
    path: '/solutions',
    label: 'Solutions',
  },
  industries: {
    title:
      'Manufacturing Automation for Automotive, Aerospace & Electronics | Aiyantras',
    description:
      'Automation solutions for automotive, aerospace and defence, electronics, medical devices and precision engineering manufacturers from Aiyantras Automation, Bangalore.',
    path: '/industries',
    label: 'Industries',
  },
  'case-study': {
    title: 'Hical Technologies Automation Project | Aiyantras Automation',
    description:
      'Read about Aiyantras Automation’s completed automation project for Hical Technologies in Bangalore and the engineering approach used to deliver the solution.',
    path: '/case-studies/hical-technologies',
    label: 'Hical Technologies',
  },
  about: {
    title: 'About Aiyantras Automation | SPM & Machine Design Engineering',
    description:
      'Learn about Aiyantras Automation, a Bangalore-based engineering company focused on custom SPMs, machine design, industrial automation and production equipment.',
    path: '/about',
    label: 'About',
  },
  assessment: {
    title: 'Factory Automation Assessment | Aiyantras Automation',
    description:
      'Share your production process, cycle time, volumes or bottleneck with Aiyantras Automation and explore a practical SPM or industrial automation concept.',
    path: '/automation-assessment',
    label: 'Automation Assessment',
  },
  contact: {
    title: 'Contact Aiyantras Automation | Bangalore SPM & Automation',
    description:
      'Contact Aiyantras Automation in Bangalore for custom SPMs, assembly automation, testing, inspection, robotics, retrofit and machine design engineering.',
    path: '/contact',
    label: 'Contact',
  },
};

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let meta = document.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
}

function upsertJsonLd(id: string, data: unknown) {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

function updateSeo(key: RouteKey) {
  const config = SEO_CONFIG[key];
  const canonical = `${SITE_URL}${config.path}`;

  document.title = config.title;

  upsertMeta('name', 'description', config.description);
  upsertMeta(
    'name',
    'robots',
    'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  );

  upsertMeta('property', 'og:title', config.title);
  upsertMeta('property', 'og:description', config.description);
  upsertMeta(
    'property',
    'og:type',
    key === 'case-study' ? 'article' : 'website'
  );
  upsertMeta('property', 'og:url', canonical);
  upsertMeta('property', 'og:site_name', COMPANY.name);
  upsertMeta('property', 'og:locale', 'en_IN');
  upsertMeta('name', 'twitter:card', 'summary');
  upsertMeta('name', 'twitter:title', config.title);
  upsertMeta('name', 'twitter:description', config.description);

  upsertCanonical(canonical);

  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ];

  if (key !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: config.label,
      item: canonical,
    });
  }

  const graph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE_URL}#organization`,
      name: COMPANY.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: COMPANY.email,
      telephone: COMPANY.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.streetAddress,
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: COMPANY.postalCode,
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: COMPANY.name,
      url: SITE_URL,
      publisher: {
        '@id': `${SITE_URL}#organization`,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: config.title,
      description: config.description,
      isPartOf: {
        '@id': `${SITE_URL}#website`,
      },
      about: {
        '@id': `${SITE_URL}#organization`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ];

  upsertJsonLd('aiyantras-seo-jsonld', {
    '@context': 'https://schema.org',
    '@graph': graph,
  });
}

function App() {
  const [{ key, hash }, setRoute] = useState(getRoute);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setRoute(getRoute());

    window.addEventListener('popstate', handle);

    return () => window.removeEventListener('popstate', handle);
  }, []);

  useEffect(() => {
    updateSeo(key);
  }, [key]);

  useEffect(() => {
    setMenuOpen(false);

    if (hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(hash.replace('#', ''))
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      );
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    }
  }, [key, hash]);

  const nav = [
    ['/solutions', 'Solutions'],
    ['/industries', 'Industries'],
    ['/case-studies/hical-technologies', 'Case Study'],
    ['/about', 'Engineering'],
  ];

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span>
            <span className="dot-live" /> Bangalore-based custom machine design
            & automation
          </span>
          <a
            href="/automation-assessment"
            className="announcement-link"
          >
            Request an automation assessment <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      <Header
        nav={nav}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        {key === 'home' && <Home />}
        {key === 'solutions' && <SolutionsPage />}
        {key === 'industries' && <IndustriesPage />}
        {key === 'case-study' && <HicalCaseStudy />}
        {key === 'about' && <EngineeringPage />}
        {key === 'assessment' && <AssessmentPage />}
        {key === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );

  function Header({
    nav,
    menuOpen,
    setMenuOpen,
  }: {
    nav: string[][];
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
  }) {
    return (
      <header className="site-header">
        <div className="container header-row">
          <a href="/" className="brand" aria-label="AIYANTRAS AUTOMATION">
            <img
              src="/logo.png"
              alt="AIYANTRAS AUTOMATION"
              className="brand-logo"
            />
            <span className="brand-copy" aria-label="AIYANTRAS AUTOMATION">
              <strong>AIYANTRAS</strong>
              <span>AUTOMATION</span>
            </span>
          </a>

          <nav
            className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}
            aria-label="Primary"
          >
            <a href="/" className="nav-link">
              Home
            </a>

            {nav.map(([path, label]) => (
              <a key={path} href={path} className="nav-link">
                {label}
              </a>
            ))}

            <a href="/contact" className="nav-link">
              Contact
            </a>

            <a
              href="/automation-assessment"
              className="btn btn-small btn-primary"
            >
              Get an assessment <Icon name="arrow" size={16} />
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-nav-panel">
            <a href="/" className="mobile-nav-link">
              Home
            </a>

            {nav.map(([path, label]) => (
              <a key={path} href={path} className="mobile-nav-link">
                {label}
              </a>
            ))}

            <a href="/contact" className="mobile-nav-link">
              Contact
            </a>

            <a
              href="/automation-assessment"
              className="btn btn-primary mobile-cta"
            >
              Request automation assessment <Icon name="arrow" size={17} />
            </a>
          </div>
        )}
      </header>
    );
  }
}

function Home() {
  return (
    <>
      <section className="hero section-grid-bg">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" /> CUSTOM MACHINE ENGINEERING
            </div>

            <h1>
              Custom Special Purpose Machines &amp;{' '}
              <span className="gradient-text">
                Industrial Automation.
              </span>
            </h1>

            <p className="hero-lead">
              Bangalore-based SPM and machine design engineering for assembly,
              drilling, tapping, testing, inspection, material handling and
              machine retrofit applications — built around your production
              process.
            </p>

            <div className="hero-actions">
              <a
                href="/automation-assessment"
                className="btn btn-primary btn-lg"
              >
                Request automation assessment{' '}
                <Icon name="arrow" size={18} />
              </a>

              <a
                href="/case-studies/hical-technologies"
                className="btn btn-secondary btn-lg"
              >
                View Hical project <Icon name="chevron" size={18} />
              </a>
            </div>

            <div className="trust-row">
              <span>
                <Icon name="check" size={16} /> Bangalore based
              </span>
              <span>
                <Icon name="check" size={16} /> End-to-end engineering
              </span>
              <span>
                <Icon name="check" size={16} /> Custom built
              </span>
            </div>
          </div>

          <MachineVisual />
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          <div className="proof-label">RECENTLY COMPLETED</div>

          <div className="proof-main">
            <strong>Hical Technologies</strong>
            <span>Custom automation project · Bangalore</span>
          </div>

          <a
            href="/case-studies/hical-technologies"
            className="text-link"
          >
            Explore case study <Icon name="arrow" size={16} />
          </a>
        </div>
      </section>

      <section
        className="section section-light"
        id="solutions-preview"
      >
        <div className="container">
          <SectionIntro
            eyebrow="WHAT WE BUILD"
            title="From one bottleneck to a production-ready machine."
            text="Start with the process. We engineer the right level of automation around the component, cycle time, quality targets and operator workflow."
          />

          <div className="solution-grid">
            {solutionCards.map((item) => (
              <article
                className="solution-card"
                key={item.title}
              >
                <div className="icon-box">
                  <Icon name={item.icon} size={23} />
                </div>

                <span className="card-eyebrow">{item.eyebrow}</span>

                <h3>{item.title}</h3>

                <p>{item.body}</p>

                <a href={item.link} className="card-link">
                  Explore <Icon name="arrow" size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-grid">
          <div>
            <SectionIntro
              eyebrow="HOW WE THINK"
              title="Solve the production problem, not just the machine brief."
              text="Aiyantras combines mechanical design, controls, pneumatics, robotics and testing into one engineering workflow — so the finished machine works as a production asset, not a collection of components."
              light
            />

            <div className="feature-list">
              {[
                'Cycle time & throughput',
                'Quality & error proofing',
                'Operator safety & ergonomics',
                'Maintainability & documentation',
              ].map((item) => (
                <div className="feature-item" key={item}>
                  <span>
                    <Icon name="check" size={16} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="architecture-card">
            <div className="architecture-head">
              <span>ENGINEERING STACK</span>
              <Icon name="network" size={18} />
            </div>

            <div className="architecture-flow">
              {[
                'Part & process',
                'Mechanical design',
                'Pneumatics / hydraulics',
                'PLC / HMI & safety',
                'Vision / testing',
                'Production-ready machine',
              ].map((item, index) => (
                <div className="arch-node" key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionIntro
            eyebrow="INDUSTRIES"
            title="Built for manufacturing environments where repeatability matters."
            text="Our current capabilities are a strong fit for automotive, aerospace & defence, electronics, medical devices and precision/general engineering."
          />

          <div className="industry-grid home-industry-grid">
            {industryCards.slice(0, 5).map((item) => (
              <IndustryCard
                key={item.title}
                item={item}
                compact
              />
            ))}
          </div>

          <div className="center-row">
            <a href="/industries" className="btn btn-secondary">
              Explore industries <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container">
          <div className="showcase-card">
            <div className="showcase-copy">
              <div className="eyebrow">FEATURED CASE STUDY</div>

              <h2>Hical Technologies</h2>

              <p>
                Aiyantras recently completed an automation project for Hical
                Technologies in Bangalore. The project gives us a real
                manufacturing reference to build on as we support more
                production teams with custom machine engineering.
              </p>

              <div className="mini-proof">
                <span>
                  <Icon name="check" size={15} /> Completed project
                </span>

                <span>
                  <Icon name="factory" size={15} /> Bangalore
                </span>

                <span>
                  <Icon name="gear" size={15} /> Custom automation
                </span>
              </div>

              <a
                href="/case-studies/hical-technologies"
                className="btn btn-case-study"
              >
                Read the case study <Icon name="arrow" size={17} />
              </a>
            </div>

            <div className="case-visual">
              <div className="visual-grid-lines" />

              <div className="machine-stack">
                <div className="machine-tower" />
                <div className="machine-bed" />

                <div className="machine-panel">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="machine-arm" />
              </div>

              <div className="visual-badge">
                PROJECT
                <br />
                <strong>HICAL</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionIntro
            eyebrow="ENGINEERING PROCESS"
            title="A structured path from requirement to commissioning."
            text="The customer always sees the engineering path, review points and handover expectations before the build starts."
          />

          <div className="process-grid">
            {processSteps.map(([num, title, body]) => (
              <div className="process-card" key={num}>
                <span className="process-num">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title="Custom automation, matched to the process."
        text="Explore the machine types and automation modules Aiyantras can engineer, integrate and commission for manufacturing teams."
      />

      <section className="section section-light">
        <div className="container detail-grid">
          {solutionCards.map((item) => (
            <article
              className="detail-card"
              id={item.link.split('#')[1]}
              key={item.title}
            >
              <div className="icon-box large">
                <Icon name={item.icon} size={28} />
              </div>

              <span className="card-eyebrow">{item.eyebrow}</span>

              <h2>{item.title}</h2>

              <p>{item.body}</p>

              <ul className="check-list">
                {solutionPoints(item.title).map((point) => (
                  <li key={point}>
                    <Icon name="check" size={16} />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="/automation-assessment"
                className="text-link"
              >
                Discuss this application <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-grid">
          <div>
            <SectionIntro
              eyebrow="CAPABILITIES"
              title="One engineering partner across the machine stack."
              text="Mechanical design, controls, pneumatics/hydraulics, robotics, vision, testing and documentation are connected inside one project workflow."
              light
            />
          </div>

          <CapabilityList />
        </div>
      </section>

      <CTASection />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title="Automation for demanding manufacturing environments."
        text="Our capabilities are designed for plants where repeatability, throughput, quality and controlled processes matter."
      />

      <section className="section section-light">
        <div className="container industry-detail-grid">
          {industryCards.map((item) => (
            <IndustryFeature key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section soft-section">
        <div className="container split-grid">
          <div>
            <SectionIntro
              eyebrow="USE CASES"
              title="Common automation opportunities we evaluate."
              text="The first conversation is about the process, not the machine brand."
            />
          </div>

          <div className="opportunity-list">
            {[
              'Manual repetitive assembly',
              'Long cycle-time operations',
              'Operator-dependent quality checks',
              'Press / fastening processes',
              'Leak or functional testing',
              'Part identification & traceability',
              'CNC handling and machine retrofit',
              'Vision inspection & poka-yoke',
            ].map((item, index) => (
              <div className="opportunity" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                <Icon name="arrow" size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function HicalCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="CASE STUDY"
        title="Hical Technologies — a completed Bangalore automation project."
        text="Aiyantras has completed its first automation project for Hical Technologies. This reference is now the foundation for our next customer conversations."
      />

      <section className="section section-light">
        <div className="container case-study-layout">
          <div className="case-study-main">
            <div className="case-study-visual large-visual">
              <div className="visual-grid-lines" />

              <div className="machine-stack scale-up">
                <div className="machine-tower" />
                <div className="machine-bed" />

                <div className="machine-panel">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="machine-arm" />
              </div>

              <div className="visual-badge">
                COMPLETED
                <br />
                <strong>PROJECT</strong>
              </div>
            </div>

            <div className="case-summary">
              <span>Customer</span>
              <strong>Hical Technologies</strong>
              <span>Location</span>
              <strong>Bangalore</strong>
              <span>Type</span>
              <strong>Custom automation</strong>
            </div>

            <div className="story-block">
              <span className="card-eyebrow">WHY THIS MATTERS</span>

              <h2>
                Turn one successful machine into a repeatable customer proof
                point.
              </h2>

              <p>
                The current site should tell the Hical story with real approved
                photos, the original manufacturing challenge, the engineered
                solution and verified project results. This page is
                intentionally structured so those details can be dropped in
                without rewriting the design.
              </p>
            </div>
          </div>

          <aside className="case-aside">
            <div className="aside-card">
              <span className="card-eyebrow">PROJECT SNAPSHOT</span>

              <h3>What to publish here</h3>

              <ul className="check-list">
                <li>
                  <Icon name="check" size={16} />
                  Customer-approved project photographs
                </li>

                <li>
                  <Icon name="check" size={16} />
                  Process challenge and constraints
                </li>

                <li>
                  <Icon name="check" size={16} />
                  Machine architecture / station flow
                </li>

                <li>
                  <Icon name="check" size={16} />
                  Verified cycle-time or quality improvements
                </li>

                <li>
                  <Icon name="check" size={16} />
                  Controls, safety and validation details
                </li>
              </ul>

              <a
                href="/automation-assessment"
                className="btn btn-primary btn-full"
              >
                Discuss a similar project <Icon name="arrow" size={17} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function EngineeringPage() {
  return (
    <>
      <PageHero
        eyebrow="ENGINEERING"
        title="Mechanical design meets controls, automation and production reality."
        text="Aiyantras combines machine design, precision tooling knowledge and industrial automation into a single engineering workflow."
      />

      <section className="section section-light">
        <div className="container">
          <SectionIntro
            eyebrow="CORE CAPABILITIES"
            title="The disciplines behind the machine."
            text="The current website already covers a broad technical stack. This page groups it into the way a plant engineering team actually evaluates a machine builder."
          />

          <CapabilityList light />

          <div className="engineering-table-wrap">
            <table className="engineering-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>What it covers</th>
                </tr>
              </thead>

              <tbody>
                {capabilityRows.map(([a, b]) => (
                  <tr key={a}>
                    <td>{a}</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionIntro
            eyebrow="PROCESS"
            title="Clear review points before the machine reaches your floor."
            text="Requirement study → concept → detailed engineering → manufacturing & assembly → testing → installation & support → documentation."
            light
          />

          <div className="process-rail">
            {processSteps.map(([num, title, body]) => (
              <div className="rail-step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="AUTOMATION ASSESSMENT"
        title="Have a manual or bottlenecked process? Let's assess it."
        text="Share your production problem, component, drawing or process details. The first step is understanding whether automation is technically and commercially sensible."
      />

      <section className="section section-light">
        <div className="container assessment-grid">
          <div>
            <div className="assessment-callout">
              <div className="icon-box large">
                <Icon name="target" size={28} />
              </div>

              <h2>What we evaluate</h2>

              <div className="assessment-points">
                {[
                  'Cycle time & throughput',
                  'Operator dependency',
                  'Quality / rejection points',
                  'Part handling & ergonomics',
                  'Testing / inspection opportunities',
                  'Automation level & machine concept',
                ].map((item) => (
                  <div key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="assessment-note">
              <Icon name="document" size={19} />

              <div>
                <strong>Useful inputs</strong>

                <p>
                  Part drawing, process video, current cycle time, daily
                  volume, number of operators and the outcome you want to
                  improve.
                </p>
              </div>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's discuss your next machine or automation project."
        text="Tell us what you're manufacturing, where the bottleneck is and what you need the process to achieve."
      />

      <section className="section section-light">
        <div className="container contact-grid">
          <div className="contact-panel">
            <span className="card-eyebrow">AIYANTRAS AUTOMATION</span>

            <h2>
              Bangalore engineering support for custom automation.
            </h2>

            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="document" size={18} />
              </span>

              <div>
                <small>Email</small>
                <a href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="truck" size={18} />
              </span>

              <div>
                <small>Phone</small>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <Icon name="factory" size={18} />
              </span>

              <div>
                <small>Location</small>
                <strong>{COMPANY.location}</strong>
              </div>
            </div>

            <div className="contact-callout">
              <strong>Best starting point:</strong>
              <span>
                Send a drawing, process video or a short description of the
                bottleneck.
              </span>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    requirement: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Aiyantras Automation Assessment — ${
        form.company || form.name
      }`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nRole: ${form.role}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nRequirement:\n${form.requirement}`
    );

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-card">
        <div className="success-icon">
          <Icon name="check" size={28} />
        </div>

        <h2>Thank you.</h2>

        <p>
          Your email client has been prepared with the project details. Send
          the message and the Aiyantras team can take it forward.
        </p>

        <button
          className="btn btn-secondary"
          onClick={() => setSubmitted(false)}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <div className="form-head">
        <span className="card-eyebrow">START A CONVERSATION</span>

        <h2>Tell us about the process.</h2>

        <p>
          Share the essentials. We will take the conversation from there.
        </p>
      </div>

      <div className="form-grid">
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            placeholder="Your name"
          />
        </label>

        <label>
          Company
          <input
            required
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
            placeholder="Company name"
          />
        </label>

        <label>
          Role
          <input
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
            placeholder="Plant / Engineering / Procurement"
          />
        </label>

        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            placeholder="you@company.com"
          />
        </label>

        <label>
          Phone
          <input
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            placeholder="+91"
          />
        </label>

        <label className="full">
          Requirement
          <textarea
            required
            value={form.requirement}
            onChange={(e) =>
              setForm({
                ...form,
                requirement: e.target.value,
              })
            }
            rows={6}
            placeholder="Describe the part, process, volume or bottleneck..."
          />
        </label>
      </div>

      <button className="btn btn-primary btn-full" type="submit">
        Prepare enquiry email <Icon name="arrow" size={17} />
      </button>

      <small className="form-foot">
        Or email us directly at{' '}
        <a href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>
        .
      </small>
    </form>
  );
}

function MachineVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-grid-lines" />

      <div className="visual-copy">
        <span>SPM / AUTOMATION CELL</span>
        <strong>
          ENGINEERED
          <br />
          FOR THE PROCESS
        </strong>
      </div>

      <div className="machine-stack hero-machine">
        <div className="machine-tower" />
        <div className="machine-bed" />

        <div className="machine-panel">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="machine-arm" />

        <div className="machine-part">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="visual-chip chip-a">CYCLE TIME</div>
      <div className="visual-chip chip-b">P L C · H M I</div>
      <div className="visual-chip chip-c">QUALITY</div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  light?: boolean;
}) {
  return (
    <div className={`section-intro ${light ? 'light' : ''}`}>
      <span className="card-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero section-grid-bg">
      <div className="container narrow">
        <span className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </span>

        <h1>{title}</h1>

        <p>{text}</p>
      </div>
    </section>
  );
}

function IndustryCard({
  item,
  compact = false,
}: {
  item: (typeof industryCards)[number];
  compact?: boolean;
}) {
  return (
    <article
      className={`industry-card accent-${item.accent} ${
        compact ? 'compact' : ''
      }`}
    >
      <div className="industry-icon">
        <Icon name={item.icon} size={23} />
      </div>

      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>

      <a
        href={`/industries#${item.slug}`}
        className="icon-arrow"
        aria-label={`Explore ${item.title}`}
      >
        <Icon name="arrow" size={17} />
      </a>
    </article>
  );
}

function IndustryFeature({
  item,
}: {
  item: (typeof industryCards)[number];
}) {
  return (
    <article
      className={`industry-feature accent-${item.accent}`}
      id={item.slug}
    >
      <div className="industry-feature-visual">
        <div className="visual-orbit orbit-1" />
        <div className="visual-orbit orbit-2" />
        <div className="visual-orbit orbit-3" />
        <Icon name={item.icon} size={44} />
      </div>

      <div className="industry-feature-copy">
        <span className="card-eyebrow">INDUSTRY</span>

        <h2>{item.title}</h2>

        <p>{item.body}</p>

        <div className="usecase-pills">
          {industryUseCases(item.slug).map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>

        <a
          href="/automation-assessment"
          className="text-link"
        >
          Discuss an application <Icon name="arrow" size={16} />
        </a>
      </div>
    </article>
  );
}

function CapabilityList({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`capability-list ${
        light ? 'capability-list-light' : ''
      }`}
    >
      {capabilityRows.map(([title, body], index) => (
        <div className="capability-item" key={title}>
          <span>0{index + 1}</span>

          <div>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <span className="card-eyebrow">
              READY TO EXPLORE A PROCESS?
            </span>

            <h2>
              Bring us the bottleneck. We'll bring the machine thinking.
            </h2>

            <p>
              Share a drawing, process video or a short description of the
              production challenge.
            </p>
          </div>

          <a
            href="/automation-assessment"
            className="btn btn-primary btn-lg"
          >
            Request automation assessment <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function solutionPoints(title: string) {
  const map: Record<string, string[]> = {
    'Special Purpose Machines': [
      'Dedicated drilling, tapping, reaming and chamfering stations',
      'Multi-spindle heads and programmable feed units',
      'High repeatability for high-volume components',
      'Part-specific fixtures and poka-yoke',
    ],
    'Assembly Automation': [
      'Press-fit, fastening, dispensing and torquing operations',
      'Automatic transfer, indexing and operator guidance',
      'Error-proofing and traceability built in',
      'Flexible cells for evolving product families',
    ],
    'Testing & Inspection': [
      'Functional and end-of-line testing',
      'Vision-based presence and defect inspection',
      'Leak / continuity testing applications',
      'Data logging and digital test results',
    ],
    'CNC Automation & Retrofit': [
      'Legacy PLC / HMI control upgrades',
      'Cycle-time and ergonomics improvements',
      'Sensors, SCADA and machine dashboards',
      'Automatic part loading and unloading',
    ],
    'Robotics & Material Handling': [
      'Robot selection and payload/reach optimisation',
      'EOAT and custom gripper development',
      'Conveyors, feeders and transfer systems',
      'Machine safety and cell integration',
    ],
    'Jigs, Fixtures & Tooling': [
      'Part location and repeatability',
      'Error-proofing / poka-yoke',
      'Assembly and machining fixtures',
      'Operator-friendly access and maintenance',
    ],
  };

  return map[title] || [];
}

function industryUseCases(slug: string) {
  const map: Record<string, string[]> = {
    automotive: ['Pressing', 'Assembly', 'Inspection', 'Testing'],
    'aerospace-defence': [
      'Precision assembly',
      'Fixtures',
      'Inspection',
      'Traceability',
    ],
    electronics: [
      'Fastening',
      'Dispensing',
      'Functional testing',
      'Vision',
    ],
    'medical-devices': [
      'Precision assembly',
      'Inspection',
      'Testing',
      'Traceability',
    ],
    'general-engineering': [
      'CNC support',
      'Assembly',
      'Handling',
      'Retrofitting',
    ],
  };

  return map[slug] || [];
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="/" className="brand footer-brand">
            <img
              src="/logo.png"
              alt="Aiyantras Automation"
              className="brand-logo"
            />

            <span className="brand-copy">
              <strong>AIYANTRAS</strong>
              <span>AUTOMATION</span>
            </span>
          </a>

          <p className="footer-note">
            Custom SPMs and industrial automation for production-critical
            processes.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <a href="/solutions">Solutions</a>
            <a href="/industries">Industries</a>
            <a href="/case-studies/hical-technologies">
              Case study
            </a>
          </div>

          <div>
            <span>START</span>
            <a href="/automation-assessment">
              Automation assessment
            </a>
            <a href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Aiyantras Automation. All rights
          reserved.
        </span>
        <span>Bangalore · Karnataka · India</span>
      </div>
    </footer>
  );
}

export default App;