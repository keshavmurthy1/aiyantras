import React from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Case Studies", href: "#cases" },
  { label: "Contact", href: "#contact" },
];

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions /> .
        <Industries />
        <Capabilities />
        <Process />
        <WhyChooseUs />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">Ai</span>
          <span className="logo-text">
            AiYantras<span className="logo-dot"> Automation</span>
          </span>
        </a>
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-eyebrow">Special Purpose Machine Design</p>
          <h1 className="hero-title">
            Intelligent Special Purpose Machines
            <span className="hero-highlight"> for modern manufacturing.</span>
          </h1>
          <p className="hero-subtitle">
            AiYantras designs and builds custom special purpose machines (SPMs)
            for drilling, tapping, assembly, testing and inspection – tailored
            to your components, cycle time, and quality requirements.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a discussion
            </a>
            <a href="#solutions" className="btn btn-ghost">
              Explore solutions
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="hero-meta-number">10+</span>
              <span className="hero-meta-label">Application areas</span>
            </div>
            <div>
              <span className="hero-meta-number">End-to-End</span>
              <span className="hero-meta-label">Design to commissioning</span>
            </div>
            <div>
              <span className="hero-meta-number">Industry 4.0</span>
              <span className="hero-meta-label">Connected solutions</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <h2 className="hero-card-title">Why AiYantras?</h2>
          <ul className="hero-card-list">
            <li>Deliver innovative automation systems</li>
            <li>
              To deliver turnkey mechanical, electrical, and automation
              solutions under one roof
            </li>
            <li>
              To partner with industries in their journey toward smart and
              automated manufacturing
            </li>
            <li>Custom SPMs for drilling, tapping, milling & assembly</li>
            <li>Optimized for throughput, quality and operator safety</li>
            <li>Structured design process and documentation</li>
            <li>Lifecycle support – retrofit, upgrades & service</li>
          </ul>
          <p className="hero-card-note">
            Inspired by proven global SPM, tooling and automation practices,
            engineered for Indian manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container two-column">
        <div>
          <h2 className="section-title">About AiYantras</h2>
          <p className="section-lead">
            Aiyantras Automation is an innovative engineering company
            specializing in the design and manufacturing of high-performance
            industrial equipment, custom machinery, and Special Purpose Machines
            (SPMs).
          </p>
          <p className="section-body">
            We combine machine design, precision tooling knowledge and
            industrial automation to deliver reliable, operator-friendly SPMs.
            From drilling and tapping units inspired by global SPM manufacturers
            to high-precision machining and assembly lines similar to those used
            by leading cutting-tool and automation companies, our solutions are
            built for demanding production environments.
          </p>
          <p className="section-body">
            Our name blends AI and “Yantra” (machine), reflecting our focus on
            smart machines – data-enabled, intuitive to operate, and ready for
            Industry 4.0.
          </p>
          <p className="section-body">
            We provide end-to-end automation solutions that enhance
            productivity, precision, and operational efficiency for
            manufacturing industries.
          </p>
        </div>
        <div className="card values-card" style={{ marginTop: "72px" }}>
          <h3 className="card-title">Our core values</h3>
          <ul className="pill-list">
            <li>Integrity in every commitment</li>
            <li>Respect for people & safety</li>
            <li>Deep customer engagement</li>
            <li>Obsession for excellence</li>
            <li>Curiosity & continuous learning</li>
          </ul>
          <p className="card-note">
            Inspired by world-class engineering organizations that thrive on
            solving complex automation challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

const Solutions: React.FC = () => {
  const items = [
    {
      title: "Custom SPM Design & Manufacturing",
      points: [
        "Dedicated drilling, tapping, reaming and chamfering stations",
        "Multi-spindle heads and programmable feed units",
        "High repeatability for high-volume components",
      ],
    },
    {
      title: "Automated Assembly Lines & Cells (Assembly Automation 4.0)",
      points: [
        "Fully automatic and lean assembly cells for discrete parts",
        "Press-fit, fastening, dispensing and torquing operations",
        "Error-proofing (Poka-Yoke) and traceability built-in",
      ],
    },
    {
      title: "Robotics Integration",
      points: [
        "Robot selection, payload & reach optimisation for the task",
        "End-of-arm tooling (EOAT) design for grippers, vacuum and custom tools",
        "Robot safety integration: light curtains, fences and collaborative modes",
        "Offline programming, cycle simulation and path optimisation",
        "Flanged integration with conveyors, feeders and other automation assets",
      ],
    },
    {
      title: "Pneumatic & Hydraulic Automation",
      points: [
        "Custom valve manifolds, sequencing circuits and compact actuators",
        "Proportional valve control, pressure regulation and flow tuning",
        "Energy-efficient designs, leak management and maintenance accessibility",
        "Integration of electro-pneumatic/hydraulic controls with PLC and HMI",
        "High-force press solutions, cushioning and overload protection",
      ],
    },
    {
      title: "Testing & Inspection Systems",
      points: [
        "End-of-line functional testing of assemblies",
        "Vision-based inspection for dimensions & cosmetic defects",
        "Data logging, analytics and digital test reports",
      ],
    },
    {
      title: "Retrofit & Upgrades",
      points: [
        "Control upgrades for legacy SPMs and lines",
        "Cycle-time and ergonomics improvements",
        "Integration of sensors, SCADA and dashboards",
      ],
    },
  ];

  return (
    <section id="solutions" className="section section-muted">
      <div className="container">
        <h2 className="section-title">Solutions we build</h2>
        <p className="section-lead">
          From standalone SPMs to complete assembly and test lines, we design
          solutions around your part, process and productivity goals.
        </p>
        <div className="grid-2">
          {items.map((item) => (
            <div key={item.title} className="card card-solution">
              <h3 className="card-title">{item.title}</h3>
              <ul className="card-list">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      name: "Automative and Auto Components",
      desc: "SPMs for machining, assembly and testing of automotive parts and sub-assemblies.",
    },
    {
      name: "Packing & Packaging Machinery",
      desc: "Custom machines for packaging lines, including filling, sealing, labeling and inspection.",
    },
    {
      name: "Electronic components & Semiconductors Manufactures",
      desc: "Precision assembly and testing of PCBs, connectors and semiconductor devices.",
    },
    {
      name: "Energy & Utilities",
      desc: "Components and assemblies for conventional and renewable energy equipment.",
    },

    {
      name: "Life Sciences",
      desc: "Automation for medical devices and disposable components with strict quality and cleanliness needs.",
    },
    {
      name: "Engineering & Industrial",
      desc: "General engineering parts, valves, pumps and custom mechanisms.",
    },
    {
      name: "Consumer Packaged Goods",
      desc: "High-speed assembly, labeling and inspection for consumer products.",
    },
    {
      name: "Pharmaceuticals",
      desc: "Automated assembly and inspection of pharmaceutical packaging and delivery systems.",
    },
    {
      name: "General Manufacturing",
      desc: "Versatile SPMs for a wide range of manufacturing applications and processes.",
    },
  ];

  return (
    <section id="industries" className="section">
      <div className="container">
        <h2 className="section-title">Industries we serve</h2>
        <p className="section-lead">
          Our approach is industry-agnostic: we focus on your process,
          tolerances and throughput. We particularly serve segments where
          repeatability and traceability are non-negotiable.
        </p>
        <div className="grid-3">
          {industries.map((ind) => (
            <div key={ind.name} className="card card-industry">
              <h3 className="card-title">{ind.name}</h3>
              <p className="card-body">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities: React.FC = () => {
  const caps = [
    {
      title: "Mechanical Design",
      body: "Concept design, 3D modeling, detailed engineering and design for manufacturability of special purpose machines.",
    },
    {
      title: "Assembly Line",
      body: "Fixturing, part handling, transfer mechanisms and assembly modules tailored to your component geometry.",
    },
    {
      title: "Pressing machine(Pneumatic, hydraulic, servo)",
      body: "Custom press solutions with precise force control, cushioning and safety features for assembly and forming operations.",
    },
    {
      title: "Testing machine(Leak testing, current continuity testing )",
      body: "End-of-line testing systems for functional verification, leak testing and quality assurance of assemblies.",
    },
    {
      title: "Conveyor and Palletization",
      body: "Design and integration of conveyors, palletizers and material flow systems for efficient part handling.",
    },
    {
      title: "Material handling(pick & place)",
      body: "Robotic and automated material handling solutions including pick & place, conveyors and feeders.",
    },
    {
      title: "Drilling and tapping machine",
      body: "High-precision drilling and tapping SPMs with multi-spindle heads and programmable feed units for high-volume production.",
    },

    {
      title: "Marking machine (dot pin & laser)",
      body: "Custom marking solutions using dot pin or laser technology for traceability and identification of components.",
    },

    {
      title: "Thread checking machine",
      body: "Automated thread checking systems for quality assurance of threaded components, ensuring compliance with specifications.",
    },
    {
      title: "Dispensing machine",
      body: "Precision dispensing systems for adhesives, sealants and lubricants in assembly processes.",
    },

    {
      title: "Tightening machine",
      body: "Automated fastening solutions including torque-controlled tightening for assembly applications.",
    },

    {
      title: "Vision integrated system",
      body: "Vision-based inspection and quality control systems integrated into SPMs for dimensional checks and defect detection.",
    },
    {
      title: "Jig and fixtures",
      body: "Custom jigs and fixtures for secure part holding, alignment and repeatability in machining and assembly operations.",
    },
  ];

  return (
    <section id="capabilities" className="section section-muted">
      <div className="container">
        <h2 className="section-title">Technical capabilities</h2>
        <p className="section-lead">
          A multi-disciplinary engineering team ensures your SPM is not just
          mechanically sound, but also robust in controls, safety and data.
        </p>
        <div className="grid-3">
          {caps.map((cap) => (
            <div key={cap.title} className="card">
              <h3 className="card-title">{cap.title}</h3>
              <p className="card-body">{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      title: "1. Requirement study and understanding your part & process",
      body: "We start with your part drawings, current process, quality issues and production targets to define clear requirements.",
    },
    {
      title: "2. Concept design & Feasibility",
      body: "Initial concepts are developed, evaluated and refined with your feedback to arrive at the optimal solution.",
    },
    {
      title: "3. Detailed 3D design & engineering",
      body: "Mechanical, electrical, pneumatic and software engineering are carried out with regular design reviews and approvals.",
    },
    {
      title: "4. Manufacturing & assembly",
      body: "Parts are manufactured, outsourced items are sourced, and the machine is assembled and wired in our workshop.",
    },
    {
      title: "5. Testing & Validation",
      body: "Dry runs, capability studies and production trials are done to validate performance and reliability before dispatch.",
    },
    {
      title: "6. Installation & lifecycle support",
      body: "We install and commission at your site, train operators and provide ongoing support, upgrades and retrofits.",
    },
    {
      title: "7. Machine handover & documentation",
      body: "Comprehensive documentation including operation manuals, maintenance guides and as-built drawings are provided at handover.",
    },
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="section-title">How we work</h2>
        <p className="section-lead">
          A structured, transparent process from concept to commissioning
          ensures that your machine performs as promised on the shop floor.
        </p>
        <div className="timeline">
          {steps.map((step) => (
            <div key={step.title} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Multi-station SPM for automotive housing",
      result:
        "Reduced cycle time by over 30% by combining drilling, tapping and chamfering operations into a single fixture with automatic indexing.",
    },
    {
      title: "Lean assembly cell for electromechanical device",
      result:
        "Improved first-time-right quality to 99% using guided assembly, torque monitoring and in-process checks.",
    },
    {
      title: "Vision inspection system for precision components",
      result:
        "Eliminated manual gauging and reduced inspection time per part while improving traceability of defects.",
    },
  ];

  return (
    <section id="cases" className="section section-muted">
      <div className="container">
        <h2 className="section-title">Representative projects</h2>
        <p className="section-lead">
          Here are sample problem statements and outcomes that represent the
          kind of work AiYantras is built to deliver.
        </p>
        <div className="grid-3">
          {cases.map((cs) => (
            <div key={cs.title} className="card">
              <h3 className="card-title">{cs.title}</h3>
              <p className="card-body">{cs.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why" className="section section-muted">
      <div className="container two-column">
        <div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-lead">
            Solutions founded on engineering rigour, practical experience and
            customer focus.
          </p>
          <ul className="pill-list">
            <li>Custom-built solutions</li>
            <li>Strong engineering expertise</li>
            <li>Competitive pricing</li>
            <li>Transparent project execution</li>
            <li>Reliable after-sales support</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card-title">Strong industrial experience</h3>
          <p className="card-body">
            Our founders bring extensive hands-on experience from leading
            industries, having worked with SPM (Special Purpose Machine)
            manufacturers in small-scale industries as well as globally
            recognized MNCs such as TITAN and Schneider Electric. This unique
            blend of exposure ensures deep technical understanding and the
            ability to deliver high-quality, practical solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container two-column">
        <div>
          <h2 className="section-title">
            Let&apos;s discuss your next machine
          </h2>
          <p className="section-lead">
            Share your component drawings, current process and production
            targets, and we&apos;ll propose a practical SPM or automation
            concept.
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@aiyantras.com" style={{ color: "#38bdf8" }}>
                info@aiyantras.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91-9036929191
            </li>
            <br />
            <li>
              <strong>Location:</strong> No. 19/179 Annapoorneswari layout 3rd
              cross,
              <br />
              Konanakunte, New bank colony, Anjanapura main road,
              <br />
              Bangalore:560062 India.
            </li>
          </ul>
          <p className="section-body">
            We work with OEMs, tier suppliers and job shops. Even if you only
            have a rough idea or a manual process today, we can help you define
            the right level of automation.
          </p>
        </div>
        <div className="card contact-card">
          <h3 className="card-title">Quick contact form</h3>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const name =
                (
                  form.querySelector(
                    'input[placeholder="Your name"]'
                  ) as HTMLInputElement
                )?.value.trim() || "";
              const company =
                (
                  form.querySelector(
                    'input[placeholder="Company name"]'
                  ) as HTMLInputElement
                )?.value.trim() || "";
              const email =
                (
                  form.querySelector(
                    'input[placeholder="you@company.com"]'
                  ) as HTMLInputElement
                )?.value.trim() || "";
              const requirement =
                (
                  form.querySelector(
                    'textarea[placeholder^="Briefly describe"]'
                  ) as HTMLTextAreaElement
                )?.value.trim() || "";

              const subject = encodeURIComponent(
                `Enquiry from ${name || company || email}`
              );
              const body = encodeURIComponent(
                `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nRequirement:\n${requirement}`
              );

              const mailto = `mailto:info@aiyantras.com?subject=${subject}&body=${body}`;

              // Open user's email client with composed message
              window.location.href = mailto;

              // Optionally reset the form after triggering mail client
              form.reset();
            }}>
            <div className="form-row">
              <label>
                Name
                <input type="text" placeholder="Your name" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Company
                <input type="text" placeholder="Company name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Requirement
                <textarea
                  rows={4}
                  placeholder="Briefly describe the part, process and expected volumes."
                  required
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Submit enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span className="logo-text">
            AiYantras<span className="logo-dot">Automation</span>
          </span>
          <p className="footer-text">
            Intelligent special purpose machines and automation solutions.
          </p>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} AiYantras Automation.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default App;
