import { Cross, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const experiences = [
  {
    icon: <Cross size={18} className="text-blue-900" />,
    title: 'Infirmier Diplômé d\'État',
    period: 'Mars 2017 — Mars 2025',
    items: [
      'EHPAD Groupe Domusvi',
      'Infirmier Libéral',
      'Infirmier Intérimaire',
      'CH Valvert — service Psychiatrie',
      'CHP Provence — Service de Dialyse',
    ],
  },
  {
    icon: <GraduationCap size={18} className="text-blue-900" />,
    title: 'Professeur — Sciences Techniques et Médico-Sociales',
    period: 'Septembre 2021 — Novembre 2022',
    items: ['Lycée Jean-Perrin de Longjumeau'],
  },
  {
    icon: <BriefcaseBusiness size={18} className="text-blue-900" />,
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
            {/* Timeline indicator */}
            <div className="flex flex-col items-center flex-shrink-0 pt-1">
              <div className="w-9 h-9 rounded-full bg-amber-50 border-2 border-amber-400 flex items-center justify-center flex-shrink-0">
                {exp.icon}
              </div>
              {idx < experiences.length - 1 && (
                <div className="w-px bg-amber-200 flex-grow mt-2" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${idx < experiences.length - 1 ? 'pb-10' : 'pb-2'}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h4 className="text-lg font-semibold text-teal-600 leading-snug">{exp.title}</h4>
                <span className="text-sm text-gray-400 whitespace-nowrap flex-shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-1.5">
                {exp.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-teal-500 mr-2 mt-0.5 flex-shrink-0">•</span>
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
