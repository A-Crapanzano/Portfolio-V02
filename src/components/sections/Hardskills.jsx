import SectionCard from '../ui/SectionCard';
import Marquee from '../ui/Marquee';

const techLogos = [
  { src: '/images/logo html (1).png',                            alt: 'HTML' },
  { src: '/images/logo css.png',                                 alt: 'CSS' },
  { src: '/images/javascript-8543231_1920.png',                  alt: 'JavaScript' },
  { src: '/images/react_original_wordmark_logo_icon_146375.png', alt: 'React' },
  { src: '/images/react-native.svg',                             alt: 'React Native' },
  { src: '/images/python.png',                                   alt: 'Python' },
  { src: '/images/nestjs.svg',                                   alt: 'NestJS' },
  { src: '/images/symfony_icon_137135.png',                      alt: 'Symfony' },
  { src: '/images/logo-docker-1.svg',                            alt: 'Docker' },
  { src: '/images/Git-logo.svg.png',                             alt: 'Git' },
];

const skills = [
  { label: 'HTML · CSS · JavaScript',   tags: ['Front-end'] },
  { label: 'React',                      tags: ['Front-end', 'Framework'] },
  { label: 'React Native',              tags: ['Mobile'] },
  { label: 'Python',                     tags: ['IA', 'Data', 'Scripting'] },
  { label: 'NestJS',                     tags: ['Back-end', 'Node.js'] },
  { label: 'Symfony · PHP',             tags: ['Back-end'] },
  { label: 'Docker · Git',              tags: ['DevOps', 'Outils'] },
];

const Hardskills = () => {
  return (
    <SectionCard id="hardskills" title="Hard skills">
      {/* Liste des stacks */}
      <ul className="flex flex-wrap gap-3 mb-12">
        {skills.map((s, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span
              className="text-sm px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(94,207,190,0.07)',
                border: '1px solid rgba(94,207,190,0.2)',
                color: 'rgba(240,236,228,0.8)',
              }}
            >
              {s.label}
            </span>
            {s.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'rgba(94,207,190,0.12)', color: '#5ecfbe' }}
              >
                {tag}
              </span>
            ))}
          </li>
        ))}
      </ul>

      {/* Double marquee */}
      <Marquee images={techLogos} />
    </SectionCard>
  );
};

export default Hardskills;
