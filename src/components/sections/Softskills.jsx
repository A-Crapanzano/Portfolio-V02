import {
  HandFist, Activity, Speech, CalendarSync,
  HeartHandshake, Users, ShieldQuestionMark, Handshake,
} from 'lucide-react';
import SectionCard from '../ui/SectionCard';
import Carousel from '../ui/Carousel';

const softskillsImages = [
  { src: '/images/leader.jpg', alt: 'leader' },
  { src: '/images/stress.jpg', alt: 'stress' },
  { src: '/images/empathie.jpg', alt: 'com' },
  { src: '/images/organisation.jpg', alt: 'organisation' },
  { src: '/images/empathy2.png', alt: 'empathie' },
  { src: '/images/idea (1).png', alt: 'idea' },
  { src: '/images/teamwork.png', alt: 'equipe' },
];

const skills = [
  { icon: <HandFist size={18} className="text-blue-900 flex-shrink-0" />, label: 'Leadership et esprit d\'initiative' },
  { icon: <Activity size={18} className="text-blue-900 flex-shrink-0" />, label: 'Gestion du stress et des priorités' },
  { icon: <Speech size={18} className="text-blue-900 flex-shrink-0" />, label: 'Communication claire et persuasive' },
  { icon: <CalendarSync size={18} className="text-blue-900 flex-shrink-0" />, label: 'Organisation et coordination d\'équipe' },
  { icon: <HeartHandshake size={18} className="text-blue-900 flex-shrink-0" />, label: 'Empathie et sens de l\'écoute' },
  { icon: <Users size={18} className="text-blue-900 flex-shrink-0" />, label: 'Travail en équipe et adaptabilité' },
  { icon: <ShieldQuestionMark size={18} className="text-blue-900 flex-shrink-0" />, label: 'Résolution de problèmes en situation réelle' },
  { icon: <Handshake size={18} className="text-blue-900 flex-shrink-0" />, label: 'Sens du service et satisfaction utilisateur' },
];

const Softskills = () => {
  return (
    <SectionCard id="softskills" title="Softskills">
      <Carousel images={softskillsImages} />

      <div className="space-y-3 text-gray-700 mt-2">
        <p>Au fil de mes expériences, j'ai développé des compétences humaines solides qui enrichissent ma posture professionnelle au quotidien.</p>
        <p>Mon parcours d'infirmier m'a appris à gérer le stress, à faire preuve d'empathie, à écouter activement et à travailler en équipe pluridisciplinaire.</p>
        <p>En tant que président d'associations étudiantes et sportives, j'ai cultivé un leadership naturel, un sens aigu de l'organisation et une capacité à mobiliser les autres autour de projets concrets.</p>
        <p>Mon expérience de vendeur chez SFR m'a permis de renforcer mon aisance relationnelle, mon sens du service et ma capacité à comprendre les besoins des clients.</p>
      </div>

      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-2">
        {skills.map((s, idx) => (
          <li key={idx} className="flex items-center gap-3 border-l-2 border-teal-500 pl-3 text-gray-800">
            {s.icon}
            <span className="text-sm leading-snug">{s.label}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
};

export default Softskills;
