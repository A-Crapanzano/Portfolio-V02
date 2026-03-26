import SectionCard from '../ui/SectionCard';
import lezomVideo from '../../assets/output_progressive_c61c45ad-7aac-4acd-bd87-0b52b5465ab4.mp4';
import seaTrackerVideo from '../../assets/3addb5ce-4ecf-4a49-a1fd-c28794cf2260.mov';

const projects = [
  {
    title: 'SeaTracker',
    video: seaTrackerVideo,
    description: 'Application mobile de suivi de course de voile développée pour un client professionnel. Timmers en temps réel, historique de flotte et alertes live.',
    tags: ['React Native', 'Expo', 'NestJS', 'Socket.io', 'PostgreSQL'],
    featured: true,
    badge: 'Projet client',
  },
  {
    title: 'Lezom RTC',
    video: lezomVideo,
    description: 'Messagerie temps réel inspirée de Discord - serveurs, channels, DMs, rôles et partage de fichiers.',
    tags: ['Next.js', 'Socket.io', 'Docker', 'MySQL', 'MongoDB'],
    github: 'https://github.com/A-Crapanzano/Lezom-RTC',
  },
  {
    title: 'JobBoard React/Symfony',
    image: '/images/logo_findjob.png',
    description: 'Plateforme de mise en relation entre candidats et recruteurs avec backend dynamique.',
    tags: ['React', 'Symfony'],
    github: 'https://github.com/A-Crapanzano/FindJob',
  },
  {
    title: 'Portfolio V1',
    image: '/images/site 1.jpg',
    description: 'Première version de mon portfolio.',
    tags: ['React'],
    github: 'https://github.com/A-Crapanzano/portfolio',
  },
  {
    title: 'Hangman Python',
    image: '/images/hangman.png',
    description: 'Jeu du pendu en Python avec logique de mot caché et gestion des erreurs.',
    tags: ['Python'],
    github: 'https://github.com/A-Crapanzano/Hangman',
  },
];

const Tag = ({ label }) => (
  <span
    className="text-xs px-2 py-0.5 rounded-full"
    style={{ backgroundColor: 'rgba(94,207,190,0.1)', color: '#5ecfbe' }}
  >
    {label}
  </span>
);

const GithubLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full w-fit transition-all duration-300 mt-auto"
    style={{ border: '1px solid rgba(94,207,190,0.4)', color: '#5ecfbe' }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#5ecfbe';
      e.currentTarget.style.color = '#07080f';
      e.currentTarget.style.borderColor = '#5ecfbe';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#5ecfbe';
      e.currentTarget.style.borderColor = 'rgba(94,207,190,0.4)';
    }}
  >
    GitHub →
  </a>
);

const ProjectCard = ({ proj, featured }) => {
  const media = proj.video ? (
    <video src={proj.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
  ) : (
    <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
  );

  if (featured) {
    return (
      <div
        className="lg:col-span-2 rounded-xl overflow-hidden flex flex-col sm:flex-row transition-transform duration-300 hover:-translate-y-1 group"
        style={{ backgroundColor: '#0f1521', border: '1px solid rgba(94,207,190,0.2)' }}
      >
        <div className="sm:w-1/2 h-48 sm:h-auto overflow-hidden flex-shrink-0">
          {media}
        </div>
        <div className="flex flex-col p-5 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: 'rgba(94,207,190,0.12)', color: '#5ecfbe' }}
            >
              {proj.badge}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">{proj.title}</h4>
          <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: 'rgba(240,236,228,0.5)' }}>
            {proj.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {proj.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>
          <p className="text-xs italic" style={{ color: 'rgba(240,236,228,0.25)' }}>
            Code source confidentiel
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 group"
      style={{ backgroundColor: '#0f1521', border: '1px solid rgba(94,207,190,0.1)' }}
    >
      <div className="h-40 overflow-hidden flex-shrink-0">
        {media}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-sm font-semibold mb-1.5 text-white">{proj.title}</h4>
        <p className="text-xs flex-1 mb-3 leading-relaxed" style={{ color: 'rgba(240,236,228,0.45)' }}>
          {proj.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {proj.tags.map(tag => <Tag key={tag} label={tag} />)}
        </div>
        {proj.github && <GithubLink href={proj.github} />}
      </div>
    </div>
  );
};

const Projets = () => {
  const [featured, ...rest] = projects;

  return (
    <SectionCard id="projets" title="Projets">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard proj={featured} featured />
        {rest.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Projets;
