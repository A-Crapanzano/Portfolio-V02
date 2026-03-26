import {
  HandFist, Activity, Speech, CalendarSync,
  HeartHandshake, Users, ShieldQuestionMark, Handshake,
} from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const skills = [
  {
    icon: <HandFist size={28} />,
    label: "Leadership & initiative",
    desc: "Fondateur et président d'association sportive",
  },
  {
    icon: <Activity size={28} />,
    label: "Gestion du stress",
    desc: "8 ans en environnement médical à haute pression",
  },
  {
    icon: <Speech size={28} />,
    label: "Communication",
    desc: "Enseignant, vendeur, coordinateur d'équipe",
  },
  {
    icon: <CalendarSync size={28} />,
    label: "Organisation",
    desc: "Coordination de projets et d'événements",
  },
  {
    icon: <HeartHandshake size={28} />,
    label: "Empathie & écoute",
    desc: "Ancré dans une pratique de soin quotidienne",
  },
  {
    icon: <Users size={28} />,
    label: "Travail en équipe",
    desc: "Équipes pluridisciplinaires médicales et tech",
  },
  {
    icon: <ShieldQuestionMark size={28} />,
    label: "Résolution de problèmes",
    desc: "Décisions rapides en situation réelle",
  },
  {
    icon: <Handshake size={28} />,
    label: "Sens du service",
    desc: "Satisfaction utilisateur au cœur de la démarche",
  },
];

const SkillCard = ({ icon, label, desc }) => (
  <div
    className="flex flex-col items-center text-center gap-3 p-5 rounded-xl cursor-default"
    style={{
      backgroundColor: 'rgba(94,207,190,0.04)',
      border: '1px solid rgba(94,207,190,0.1)',
      transition: 'background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = 'rgba(94,207,190,0.1)';
      e.currentTarget.style.borderColor    = 'rgba(94,207,190,0.35)';
      e.currentTarget.style.boxShadow      = '0 0 30px rgba(94,207,190,0.12), inset 0 0 20px rgba(94,207,190,0.04)';
      e.currentTarget.style.transform      = 'translateY(-3px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = 'rgba(94,207,190,0.04)';
      e.currentTarget.style.borderColor    = 'rgba(94,207,190,0.1)';
      e.currentTarget.style.boxShadow      = 'none';
      e.currentTarget.style.transform      = 'translateY(0)';
    }}
  >
    <span style={{ color: '#5ecfbe' }}>{icon}</span>
    <span className="text-sm font-medium" style={{ color: '#f0ece4' }}>{label}</span>
    <span className="text-xs leading-snug" style={{ color: 'rgba(240,236,228,0.45)' }}>{desc}</span>
  </div>
);

const Softskills = () => {
  return (
    <SectionCard id="softskills" title="Soft skills">
      <p className="mb-10 text-sm max-w-2xl" style={{ color: 'rgba(240,236,228,0.55)', lineHeight: '1.75' }}>
        8 ans en soins infirmiers, une présidence d'association, un passage par l'enseignement -
        chaque expérience a forgé des compétences humaines que peu de développeurs ont eues
        l'occasion de construire aussi concrètement.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {skills.map((s, idx) => (
          <SkillCard key={idx} {...s} />
        ))}
      </div>
    </SectionCard>
  );
};

export default Softskills;
