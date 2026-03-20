import { Computer, MemoryStick, HardDriveUpload } from 'lucide-react';
import SectionCard from '../ui/SectionCard';
import Carousel from '../ui/Carousel';

const hardskillsImages = [
  { src: '/images/logo html (1).png', alt: 'HTML' },
  { src: '/images/logo css.png', alt: 'CSS' },
  { src: '/images/javascript-8543231_1920.png', alt: 'JavaScript' },
  { src: '/images/react_original_wordmark_logo_icon_146375.png', alt: 'React' },
  { src: '/images/python.png', alt: 'Python' },
  { src: '/images/symfony_icon_137135.png', alt: 'Symfony' },
  { src: '/images/logo-docker-1.svg', alt: 'Docker' },
  { src: '/images/Git-logo.svg.png', alt: 'Git' },
];

const skills = [
  { icon: <Computer size={20} className="text-blue-900 mr-2" />, label: 'HTML, CSS, JavaScript, Python, React' },
  { icon: <MemoryStick size={20} className="text-blue-900 mr-2" />, label: 'Symfony, PHP' },
  { icon: <HardDriveUpload size={20} className="text-blue-900 mr-2" />, label: 'Docker, Git' },
];

const Hardskills = () => {
  return (
    <SectionCard id="hardskills" title="Hardskills">
      <p className="text-gray-700 mb-6 text-center">
        Voici Les compétences développées grâce aux différents projets dans la section précédents :
      </p>
      <ul className="space-y-2 text-gray-700">
        {skills.map((s, idx) => (
          <li key={idx} className="flex items-center border-l-2 border-teal-500 pl-3">
            {s.icon}
            {s.label}
          </li>
        ))}
      </ul>
      <Carousel images={hardskillsImages} />
    </SectionCard>
  );
};

export default Hardskills;
