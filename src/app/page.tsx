type Project = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const projects: Project[] = [
  {
    title: 'Static Portfolio',
    description:
      'This site. Built with the Next.js App Router and exported for GitHub Pages.',
    tech: ['Next.js', 'TypeScript', 'CSS Modules'],
    repo: 'https://github.com/your-handle/upgraded-computing-machine',
  },
  {
    title: 'Design System Starter',
    description:
      'Reusable UI tokens and components to quickly bootstrap new web apps.',
    tech: ['React', 'Storybook', 'Vite'],
    live: 'https://example.com/design-system',
    repo: 'https://github.com/your-handle/design-system-starter',
  },
  {
    title: 'Data Dashboard',
    description:
      'Interactive dashboard with charts, filters, and exportable reports.',
    tech: ['Next.js', 'TypeScript', 'D3.js'],
    live: 'https://example.com/data-dashboard',
  },
];

const experience: Experience[] = [
  {
    role: 'Frontend Engineer',
    company: 'Acme Inc.',
    period: '2023 — Present',
    summary:
      'Building performant, accessible web interfaces with React, TypeScript, and modern tooling.',
  },
  {
    role: 'UI Engineer',
    company: 'Bright Studio',
    period: '2021 — 2023',
    summary:
      'Partnered with designers to ship component libraries and marketing sites.',
  },
];

const skills = [
  'Next.js',
  'TypeScript',
  'React',
  'CSS / Tailwind',
  'Node.js',
  'Design Systems',
  'Accessibility',
  'Testing',
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div className="badge">Available for new opportunities</div>
        <h1>Hi, I&apos;m Your Name</h1>
        <p className="lede">
          Frontend engineer who ships fast, accessible experiences with modern
          React tooling. I enjoy crafting clean UI systems and thoughtful
          interactions.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:you@example.com">
            Email me
          </a>
          <a
            className="button ghost"
            href="https://github.com/your-handle"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button ghost"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="card-header">
                <h3>{project.title}</h3>
                <div className="links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                  ) : null}
                </div>
              </div>
              <p className="muted">{project.description}</p>
              <ul className="tags">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">Background</p>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((role) => (
            <article className="timeline-item" key={role.role}>
              <header>
                <h3>{role.role}</h3>
                <p className="muted">
                  {role.company} • {role.period}
                </p>
              </header>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <h2>Skills</h2>
        </div>
        <ul className="pill-grid">
          {skills.map((skill) => (
            <li className="pill" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="cta">
        <div>
          <p className="eyebrow">Let&apos;s talk</p>
          <h2>Have a role or project in mind?</h2>
          <p className="muted">
            I&apos;m open to freelancing, contract roles, or full-time
            positions. Reach out and let&apos;s build something great.
          </p>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="mailto:you@example.com">
            Email me
          </a>
          <a className="button ghost" href="#projects">
            View projects
          </a>
        </div>
      </section>
    </main>
  );
}
