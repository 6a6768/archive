type Entry = {
  title: string;
  detail?: string;
  link?: string;
};

const experiences: Entry[] = [
  { title: 'Full-Stack Developer | 9/24/ - 12/24', detail: 'Developed a searchable database system for UCI\'s Undergraduate Research Program.'},
  { title: 'Learning Assistant | 9/23 - 12/23', detail: 'Guided students in low level coding and systems architecture.' },
  
];

const projects: Entry[] = [
  { title: 'Image to Ingredient Prediction Model', detail: 'Utilizing OpenAI CLIP and PyTorch to predict ingredients from images.'},
  { title: 'Diabetes Classification', detail: 'Analysis and experimentation with various machine learning models to predict diabetes.',link: 'youtube.com'},
];

function EntryList({
  items,
  emptyLabel,
}: {
  items: Entry[];
  emptyLabel: string;
}) {
  if (!items.length) {
    return <p className="forum-empty">{emptyLabel}</p>;
  }

  return (
    <ul className="forum-list">
      {items.map((item) => (
        <li key={item.title}>
          <div className="entry-title">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </div>
          {item.detail ? <div className="entry-detail">{item.detail}</div> : null}
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
              />
            </div>
          </section>

          <section className="forum-section" id="projects">
            <header className="forum-section__header">
              <h2>Projects</h2>
            </header>
            <div className="forum-section__body">
              <EntryList items={projects} emptyLabel="(Add your projects.)" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
