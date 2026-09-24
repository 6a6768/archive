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

const aboutText = `UCI ’25 · B.S. Computer Science
Specialization in Intelligent Systems
Building for the web, mobile, and ML — from client sites to models from scratch.`;

const experiences: Entry[] = [
  {
    title: 'Web Developer',
    subtitle: 'Sherpa Collaborative',
    dates: 'June 2026 – Present',
    detail: [
      'Build and publish product, landing, and informational pages (HTML/CSS/Liquid); update navigation and homepage layouts; integrate social feeds and map widgets across 5+ clients on Shopify, Squarespace, and Webflow.',
      'Build custom features, API integrations, and Shopify theme customizations (Liquid, JS, Slick.js sliders); develop lead capture forms and multi-step booking flows; support performance optimization with SEO partners.',
      'Maintain internal tooling and DNS/email configs (Google Workspace, SPF/DKIM/DMARC, Klaviyo); conduct QA and cross-browser testing pre-launch; document builds and issues for the account team.',
    ],
  },
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
    link: 'https://6a6768.github.io/archive/reports/cs172b/main.html',
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

function EntryList({ items, idPrefix }: { items: Entry[]; idPrefix: string }) {
  return (
    <ul className="entries">
      {items.map((item) => (
        <li key={item.title} id={`${idPrefix}-${slugify(item.title)}`}>
          <div className="entry-header">
            <h3 className="entry-title">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            {item.dates ? <span className="entry-dates">{item.dates}</span> : null}
          </div>
          {item.subtitle ? <p className="entry-subtitle">{item.subtitle}</p> : null}
          {Array.isArray(item.detail) ? (
            <ul className="entry-detail">
              {item.detail.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : item.detail ? (
            <p className="entry-detail">{item.detail}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <h1>Jesus Rafael Palo</h1>
        <p>jesus.rafaelpalo@gmail.com · 619-746-5345</p>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <section id="about">
        <h2>About</h2>
        <p className="about-text">{aboutText}</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <EntryList items={experiences} idPrefix="experience" />
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <EntryList items={projects} idPrefix="project" />
      </section>
    </main>
  );
}
