type Entry = {
  title: string;
  detail?: string | string[];
  link?: string;
  subtitle?: string;
  dates?: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const experiences: Entry[] = [
  {
    title: 'Mobile Developer',
    subtitle: 'Philippine Institute of Civil Engineers, USA Chapter',
    dates: 'Dec 2025 – Present',
    detail: [
      'Developing a cross-platform mobile membership app using React Native (Expo) with a Next.js backend to improve accessibility to organization news and events for 100+ members.',
      'Implementing secure member authentication, applications, and renewal workflows, including profile and membership status management.',
      'Building event registration and content delivery features for newsletters, blog/vlog posts, and announcements, with real-time updates for members.',
    ],
  },
  {
    title: 'Full-Stack Developer, Team Lead',
    subtitle: 'UCI Undergraduate Research Opportunities Program',
    dates: 'Sep 2024 – Dec 2024',
    detail: [
      'Developed a searchable database system for UROP to manage student data, designing a RESTful Express.js backend and implementing a normalized SQLite schema.',
      'Acted as liaison between technical team and non-technical sponsors, translating requirements into technical objectives and coordinating Agile sprint deliverables.',
      'Achieved > 80% backend and frontend test coverage using Jest and React Testing Library; delivered across phases including UI/UX, software design, and software testing.',
    ],
  },
  {
    title: 'Computer Organization and Assembly Learning Assistant',
    subtitle: 'UCI ICS Department',
    dates: 'Sep 2023 – Dec 2023',
    detail: [
      'Provided guidance to over 200 undergraduate students in computer organization and MIPS Assembly 2-3x a week',
      'Corrected and assisted in proofreading and creation of 5 coding assignments over a 10 week period.',
      'Displayed high understanding of concepts regarding computer system components; machine-level data and instruction representation; instruction sets and addressing modes; memory organization and low-level programming languages.',
    ],
  },
  
];

const projects: Entry[] = [
  {
    title: 'Transformer From Scratch',
    subtitle: 'Python, PyTorch, Hugging Face',
    dates: 'Jan 2026',
    detail: [
      'Built a PyTorch Transformer seq2seq for EN -> RU, trained on 17k OPUS Books pairs with custom Hugging Face WordLevel tokenizers; max sequence length 256.',
      'Implemented a full training pipeline with checkpointing/resume, validation decoding, and TensorBoard logging of BLEU, character error rate (CER), and word error rate (WER).',
      'Optimized for Apple M1 (MPS) with optional mixed precision, configurable batch size/loader workers, and runtime length stats to keep batches efficient.',
    ],
    link: 'https://github.com/6a6768/transformers',
  },
  {
    title: 'Image to Ingredient Prediction Model',
    subtitle: 'Python, PyTorch, OpenAI CLIP',
    dates: 'Feb 2025',
    detail: [
      'Utilized OpenAI CLIP (Contrastive Language Image Pre-training) to learn relations between ≈13,000 image and ingredient pairs.',
      'Applied agglomerative clustering to generate 332 labels in order to create multi-hot vectors representing ingredients for self-supervised learning.',
      'Optimized a transformer classifier that can predict presence of ingredients within an image with a ≈ 98% accuracy.',
    ],
  },
  {
    title: 'Diabetes Classification', 
    subtitle: 'Python, SciPy, NumPy',
    dates: 'Sep 2023 - Dec 2023',
    detail: [
      'Analyzed various features of the data set to determine which features were significant.',
      'Utilized random forests, neural networks, linear and logistic regression, gradient boosting and stacking in order to determine whether diabetes patients would be readmitted with a ≈ 60% accuracy.',
      'Implemented randomized search cross validation to find the best hyperparameters for the models.',
    ],
  },
  {
    title: 'Minesweeper AI',
    subtitle: 'Python',
    dates: 'Mar 2023 – May 2023',
    detail: [
      'Designed an AI solver using model checking, backtracking, and probability heuristics to efficiently clear boards.',
      'Analyzed board patterns and applied probability calculations to drive move decisions.',
      'Achieved ≈60% win rate on Easy (8x8, 10 mines), ≈50% on Intermediate (16x16, 40 mines), and ≈10% on Expert (16x30, 99 mines).',
    ],
  },
  {
    title: 'Search Engine with Multithreaded Web Crawler',
    subtitle: 'Python, Cython',
    dates: 'Mar 2023 – May 2023',
    detail: [
      'Built a search engine with a functional front end serving 12,000+ documents from UCI ICS domains.',
      'Delivered sub-300 ms query responses using stemming, tf-idf, and positional ranking.',
      'Integrated a multithreaded crawler with BeautifulSoup for concurrent parsing, robust error handling, and reliable data ingestion.',
    ],
  },
];

function EntryList({
  items,
  emptyLabel,
  idPrefix,
}: {
  items: Entry[];
  emptyLabel: string;
  idPrefix?: string;
}) {
  if (!items.length) {
    return <p className="forum-empty">{emptyLabel}</p>;
  }

  return (
    <ul className="forum-list">
      {items.map((item) => (
        <li
          key={item.title}
          id={idPrefix ? `${idPrefix}-${slugify(item.title)}` : undefined}
        >
          <div className="entry-header">
            <div className="entry-title">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </div>
            {item.dates ? <div className="entry-dates">{item.dates}</div> : null}
          </div>
          {item.subtitle ? (
            <div className="entry-subtitle">{item.subtitle}</div>
          ) : null}
          {item.detail ? (
            Array.isArray(item.detail) ? (
              <ul className="entry-detail-list">
                {item.detail.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <div className="entry-detail">{item.detail}</div>
            )
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="forum-banner">
        <div className="forum-title">Jesus Rafael Palo</div>
        <p className="forum-subtitle">jesus.rafaelpalo@gmail.com | 619-746-5345</p>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-title">Navigation</div>
          <ul className="sidebar-list">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <div className="sidebar-section">
            <div className="sidebar-subtitle">Experience</div>
            <ul className="sidebar-list sidebar-list--nested">
              {experiences.map((exp) => (
                <li key={exp.title}>
                  <a href={`#experience-${slugify(exp.title)}`}>{exp.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-subtitle">Projects</div>
            <ul className="sidebar-list sidebar-list--nested">
              {projects.map((proj) => (
                <li key={proj.title}>
                  <a href={`#project-${slugify(proj.title)}`}>{proj.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="content">
          <section className="forum-section" id="about">
            <header className="forum-section__header">
              <h2>About Me</h2>
            </header>
            <div className="forum-section__body">
              <p>UCI CS AI ML
              </p>
            </div>
          </section>

          <section className="forum-section" id="experience">
            <header className="forum-section__header">
              <h2>Experience</h2>
            </header>
            <div className="forum-section__body">
              <EntryList
                items={experiences}
                emptyLabel="(List roles or milestones.)"
                idPrefix="experience"
              />
            </div>
          </section>

          <section className="forum-section" id="projects">
            <header className="forum-section__header">
              <h2>Projects</h2>
            </header>
            <div className="forum-section__body">
              <EntryList
                items={projects}
                emptyLabel="(Add your projects.)"
                idPrefix="project"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
