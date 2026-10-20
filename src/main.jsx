import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone, MessageCircle,
  Code2, Layers3, Smartphone, Database, ExternalLink, Menu, X,
  Sparkles, Trophy, GraduationCap, BriefcaseBusiness
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    category: "Full stack",
    title: "HRMS Platform",
    type: "Mobile & web product · Full stack",
    status: "In Progress",
    description:
      "Contributing to a role-based HRMS platform supporting employee, manager, HR, and admin workflows across mobile and web experiences.",
    tags: [
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    accent: "lavender",
    icon: <Smartphone size={25} />,
    points: [
      "Role-based user experiences",
      "API-driven workflows",
      "Docker and CI/CD collaboration"
    ]
  },
  {
    number: "02",
    category: "Full stack",
    title: "SN Travels",
    type: "Bus travel · Fleet management platform",
    status: "In Progress",
    description:
      "Developing a bus operator management platform to manage fleets, transport networks, routes, and trip operations, with customer booking workflows planned.",
    tags: [
      "Node.js",
      "Prisma",
      "Redis",
      "REST APIs",
      "Database Design"
    ],
    accent: "peach",
    icon: <Layers3 size={25} />,
    points: [
      "Fleet management",
      "Network and route management",
      "Scalable foundation for booking workflows"
    ]
  },
  {
    number: "03",
    category: "Web",
    title: "Aurowinx Technologies",
    type: "Business website · Interactive UI",
    description:
      "Building a premium technology website with interactive 3D sections and a protected job-management dashboard.",
    tags: [
      "React",
      "Vite",
      "Three.js",
      "Framer Motion",
      "Supabase"
    ],
    accent: "mint",
    icon: <Sparkles size={25} />,
    points: [
      "Admin job-listing CRUD",
      "Job application workflows",
      "Motion-led visual storytelling"
    ]
  },
  {
    number: "04",
    category: "Web",
    title: "Zero2Billion",
    type: "Startup incubation platform",
    description:
      "Collaborated on a platform connecting founders and mentors, with founder registration and funding milestone tracking.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Figma"
    ],
    accent: "blue",
    icon: <Database size={25} />,
    points: [
      "Mentor search and filtering",
      "Founder registration",
      "Funding milestone tracking"
    ]
  }
];

const skillGroups = [
  { title: "Frontend", icon: <Code2 size={19} />, skills: ["React.js", "React Native", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "React Router", "React Hooks", "Framer Motion", "Three.js"] },
  { title: "Backend & data", icon: <Database size={19} />, skills: ["Node.js", "Express.js", "NestJS", "Django", "REST APIs", "PostgreSQL", "MySQL", "Supabase", "Redis"] },
  { title: "Tools & practices", icon: <Layers3 size={19} />, skills: ["Git & GitHub", "Docker", "GitHub Actions", "Vite", "Figma", "SEO", "Accessibility", "Web performance", "OOP", "DSA", "LLM integration"] }
];

const experience = [
  { date: "May 2026 — Present", role: "Freelance Full Stack Developer", company: "Client Engagement", description: "Contributing to an HRMS platform with a three-developer team. Building React Native experiences and NestJS + TypeScript backend workflows, with PostgreSQL, Redis, Docker, and GitHub Actions." },
  { date: "May 2024 — Jul 2024", role: "Full Stack Developer Intern", company: "Quazr Ventures", description: "Built client-facing web applications for two companies using React, Node.js, and Supabase. Worked on public pages, admin workflows, REST APIs, CRUD operations, responsive layouts, and on-page SEO." },
  { date: "Nov 2023 — Jan 2024", role: "Full Stack Developer Intern", company: "Glitzern Technologies", description: "Built an Electronic Health Record application using Django and PostgreSQL. Designed patient intake and consultation wireframes in Figma and implemented validated, accessible forms." }
];

const certifications = [
  "Intro to AI: A Beginner’s Guide to Artificial Intelligence — Udemy",
  "Frontend Development Using React — Board Infinity",
  "JavaScript Essentials 1 — Cisco Networking Academy",
  "SEO Certified — HubSpot Academy"
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [darkMode, setDarkMode] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(null);
  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [activeFilter, activeProject]);

  const filters = ["All", "Full stack", "Web", "Healthcare"];
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("swethasatishkumar3@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:swethasatishkumar3@gmail.com";
    }
  };

  return (
    <div className={darkMode ? "portfolio-shell dark-mode" : "portfolio-shell"}>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S.</span><span>Swetha S</span></a>
        <div className="header-right">
          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            {[["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) =>
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            )}
            <a className="nav-cta" href="mailto:swethasatishkumar3@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
          </nav>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} title={darkMode ? "Switch to light theme" : "Switch to dark theme"}>{darkMode ? "☼" : "◐"}</button>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="availability"><span className="status-dot" /> FULL STACK DEVELOPER <span className="availability-divider">/</span> SDE</div>
            <h1>Thoughtful code.<br /><span>Useful products.</span><br />Better experiences.</h1>
            <p className="hero-lede">Hi, I’m Swetha — a Full Stack Developer building responsive web and mobile applications across frontend interfaces, backend APIs, and data-driven workflows.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Chennai, India</span><span><Code2 size={15} /> React · TypeScript · APIs</span></div>
          </div>
          <div className="hero-art reveal" aria-label="Animated code-inspired illustration">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="floating-code code-top"><span className="code-pip"></span> building / shipping / learning</div>
            <div className="art-card card-back"><span className="tiny-label">SYSTEM / FLOW</span><div className="skeleton-line long"></div><div className="skeleton-line medium"></div><div className="skeleton-line short"></div><div className="mini-grid"><i></i><i></i><i></i></div></div>
            <div className="art-card card-front"><div className="card-top"><span className="window-dots"><i></i><i></i><i></i></span><span className="tiny-label">SWETHA.DEV</span></div><div className="code-symbol">{"<"}<span>/</span>{">"}</div><p className="art-caption">From problem<br />to <b>product.</b></p><div className="art-bottom"><span>FRONTEND + BACKEND</span><ArrowUpRight size={17} /></div></div>
            <div className="floating-chip chip-one"><span className="chip-icon"><Code2 size={16}/></span> API-driven apps</div>
            <div className="floating-chip chip-two"><span className="chip-icon chip-orange"><Sparkles size={16}/></span> Detail-minded UI</div>
            <div className="art-sparkle sparkle-one">✳</div><div className="art-sparkle sparkle-two">✳</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
          <div className="hero-index">PORTFOLIO <b>2026</b></div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionHeading eyebrow="01 / ABOUT" title={<>Developer by craft.<br /><span className="muted-heading">Curious by nature.</span></>} />
          <div className="about-grid">
            <p className="about-statement">I enjoy working across the stack — from <em>clear interfaces</em> to the APIs and data behind them.</p>
            <div className="about-details"><p>I build responsive client-facing websites, interactive admin dashboards, REST APIs, and mobile applications, with a focus on scalable solutions and seamless user experiences.</p><p>I bring a frontend-first mindset, a foundation in software engineering, and an interest in building practical products with thoughtful user experiences.</p><div className="about-facts"><div><strong>500+</strong><span>LeetCode problems solved</span></div><div><strong>Top 10</strong><span>Walmart Sparkathon</span></div><div><strong>3</strong><span>Internship / client experiences</span></div></div></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / SELECTED WORK" title={<>A few things I’ve<br /><span className="muted-heading">helped bring to life.</span></>} text="Projects across full-stack product workflows, interactive web experiences, and healthcare software." />
            <div className="project-toolbar"><div className="filter-label">FILTER PROJECTS <span>↘</span></div><div className="project-filters" role="group" aria-label="Filter projects">{filters.map(filter => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => { setActiveFilter(filter); setActiveProject(null); }}>{filter}<span>{filter === "All" ? projects.length : projects.filter(p => p.category === filter).length}</span></button>)}</div></div>
            <div className="project-grid">
              {visibleProjects.map(project => <article className={`project-card ${project.accent} reveal ${activeProject === project.number ? "project-expanded" : ""}`} key={project.number}>
                <button className="project-open" aria-label={`${activeProject === project.number ? "Collapse" : "Expand"} ${project.title} details`} onClick={() => setActiveProject(activeProject === project.number ? null : project.number)}>
                  <div className="project-visual"><span className="project-number">{project.number} / 04</span><div className="project-icon">{project.icon}</div><div className="visual-lines"><i></i><i></i><i></i></div><div className="visual-stamp">{project.type.split(" · ")[0].toUpperCase()}</div><span className="project-expand-icon">{activeProject === project.number ? "−" : "+"}</span></div>
                  <div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
                    <div className="project-card-bottom"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="details-prompt">{activeProject === project.number ? "LESS DETAIL ↑" : "MORE DETAIL ↗"}</span></div>
                  </div>
                </button>
                {activeProject === project.number && <div className="project-details"><p className="eyebrow">WORK HIGHLIGHTS</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul></div>}
              </article>)}
            </div>
          </div>
        </section>

        <section className="experience section-wrap section-pad" id="experience">
          <SectionHeading eyebrow="03 / EXPERIENCE" title={<>Learning by building.<br /><span className="muted-heading">Growing with every project.</span></>} />
          <div className="timeline">{experience.map((item, index) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.role}</h3><p className="company-name">{item.company}</p><p>{item.description}</p></div></article>)}</div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 / TOOLKIT" title={<>A practical stack for<br /><span className="muted-heading">building end to end.</span></>} text="Technologies and practices listed in my resume, from interface development to backend services and collaboration." />
            <div className="skills-grid">{skillGroups.map(group => <article className="skill-card reveal" key={group.title}><div className="skill-card-heading"><span>{group.icon}</span><h3>{group.title}</h3></div><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="recognition section-wrap section-pad">
          <div className="recognition-main reveal"><SectionHeading eyebrow="05 / MILESTONES" title={<>Progress through<br /><span className="muted-heading">practice and curiosity.</span></>} /><div className="achievement"><div className="achievement-icon"><Trophy size={22}/></div><div><p className="eyebrow">HACKATHON · TOP 10</p><h3>Walmart Sparkathon</h3><p>Built an accessible e-commerce UI in React.js with voice-based product search for visually impaired users.</p></div></div><div className="achievement"><div className="achievement-icon"><Code2 size={22}/></div><div><p className="eyebrow">PROBLEM SOLVING</p><h3>500+ LeetCode problems</h3><p>Practice across data structures, algorithms, dynamic programming, trees, and graphs.</p></div></div></div>
          <div className="certifications reveal"><div className="cert-heading"><GraduationCap size={21}/><h3>Certifications</h3></div>{certifications.map((cert, i) => <div className="cert-item" key={cert}><span>{String(i + 1).padStart(2, "0")}</span><p>{cert}</p><ArrowUpRight size={15}/></div>)}</div>
        </section>

        <section className="education section-wrap reveal">
          <div className="education-label"><GraduationCap size={20}/><span>EDUCATION</span></div><div className="education-main"><h3>Chennai Institute of Technology</h3><p>B.E. — Computer Science (Artificial Intelligence & Machine Learning)</p></div><div className="education-meta"><strong>8.5 / 10</strong><span>CGPA · 2022–2026</span></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-wrap contact-inner reveal"><p className="eyebrow">06 / CONTACT</p><h2>Have a problem<br />worth <em>solving?</em></h2><p className="contact-copy">I’m interested in Full Stack Developer and Software Development Engineer opportunities, and in collaborating on useful products.</p><a className="button button-light" href="mailto:swethasatishkumar3@gmail.com">Email me <ArrowUpRight size={17}/></a><div className="contact-links"><button onClick={copyEmail}><Mail size={16}/> {copied ? "Email copied!" : "swethasatishkumar3@gmail.com"} <span className="copy-hint">{copied ? "✓" : "COPY"}</span></button><a href="tel:+918148329325"><Phone size={16}/> Call +91 81483 29325</a><a href="https://wa.me/918148329325" target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a><a href="https://linkedin.com/in/swetha-s17" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16}/> LinkedIn <ExternalLink size={13}/></a><a href="https://github.com/swethaCIT" target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub <ExternalLink size={13}/></a></div></div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>Swetha S</span></a><span>A little lost, a lot becoming!!</span><a href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);