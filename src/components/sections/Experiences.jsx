import { Cross, GraduationCap, BriefcaseBusiness, Code } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const experiences = [
  {
    icon: <Code size={18} style={{ color: '#5ecfbe' }} />,
    title: 'Alternant Développeur Fullstack',
    period: 'Janvier 2026 - Présent',
    items: ['Dev-id'],
  },
  {
    icon: <Cross size={18} style={{ color: '#5ecfbe' }} />,
    title: "Infirmier Diplômé d'État",
    period: 'Mars 2017 - Mars 2025',
    items: [
      'EHPAD Groupe Domusvi',
      'Infirmier Libéral',
      'Infirmier Intérimaire',
      'CH Valvert - service Psychiatrie',
      'CHP Provence - Service de Dialyse',
    ],
  },
  {
    icon: <GraduationCap size={18} style={{ color: '#5ecfbe' }} />,
    title: 'Professeur - Sciences Techniques et Médico-Sociales',
    period: 'Septembre 2021 - Novembre 2022',
    items: ['Lycée Jean-Perrin de Longjumeau'],
  },
  {
    icon: <BriefcaseBusiness size={18} style={{ color: '#5ecfbe' }} />,
    title: 'Conseiller de Vente',
    period: 'Juillet 2010 — Août 2013',
    items: ['Société SFR — Centre commercial le Merlan'],
  },
];

const Experiences = () => {
  return (
    <SectionCard id="experiences" title="Expériences">
      <div>
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex gap-5">
            {/* Timeline */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'rgba(94,207,190,0.08)',
                  border: '2px solid rgba(94,207,190,0.4)',
                }}
              >
                {exp.icon}
              </div>
              {idx < experiences.length - 1 && (
                <div
                  className="w-px flex-grow mt-2"
                  style={{ backgroundColor: 'rgba(94,207,190,0.18)' }}
                />
              )}
            </div>

            {/* Contenu */}
            <div className={`flex-1 ${idx < experiences.length - 1 ? 'pb-10' : 'pb-2'}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h4 className="text-base font-semibold leading-snug" style={{ color: '#5ecfbe' }}>
                  {exp.title}
                </h4>
                <span className="text-xs whitespace-nowrap flex-shrink-0" style={{ color: 'rgba(240,236,228,0.35)' }}>
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm" style={{ color: 'rgba(240,236,228,0.65)' }}>
                    <span className="mr-2 mt-0.5 flex-shrink-0" style={{ color: '#5ecfbe' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Experiences;
