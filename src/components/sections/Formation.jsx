import { useState, useEffect } from 'react';
import SectionCard from '../ui/SectionCard';

const formations = [
  {
    title:  "Master of Science - Architecte des systèmes d'informations",
    lieu:   'Epitech Marseille',
    period: '2025 - 2028',
    image:  '/images/Epitech.jpg',
    tag:    'En cours',
  },
  {
    title:  "Master - Métiers de l'enseignement et de la formation",
    lieu:   'Université de Cergy',
    period: '2021 - 2022',
    image:  '/images/logo20cy20ucp202.png',
    tag:    'Diplômé',
  },
  {
    title:  "Formation Infirmier Diplômé d'État",
    lieu:   'IFSI Blancarde',
    period: '2013 - 2017',
    image:  '/images/logo_blancarde.jpg',
    tag:    'Diplômé',
  },
];

const INTERVAL = 4000;

const FormationShowcase = () => {
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const step   = 50;
    const tick   = (step / INTERVAL) * 100;
    const timer  = setInterval(() => setProgress(p => Math.min(p + tick, 100)), step);
    const advance = setTimeout(() => {
      setActive(prev => (prev + 1) % formations.length);
    }, INTERVAL);
    return () => { clearInterval(timer); clearTimeout(advance); };
  }, [active]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-stretch">

      {/* Tabs — liste des formations */}
      <div className="md:w-2/5 flex flex-col justify-center gap-2">
        {formations.map((f, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className="text-left px-4 py-3 rounded-xl transition-all duration-300"
            style={{
              backgroundColor: active === idx ? 'rgba(94,207,190,0.1)'  : 'rgba(94,207,190,0.03)',
              border:          active === idx ? '1px solid rgba(94,207,190,0.35)' : '1px solid rgba(94,207,190,0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: active === idx ? '#5ecfbe' : 'rgba(94,207,190,0.35)' }}
              >
                {f.tag}
              </span>
              <span
                className="text-xs"
                style={{ color: 'rgba(240,236,228,0.3)' }}
              >
                {f.period}
              </span>
            </div>
            <p
              className="text-sm font-medium leading-snug"
              style={{ color: active === idx ? '#f0ece4' : 'rgba(240,236,228,0.4)' }}
            >
              {f.title}
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: active === idx ? 'rgba(94,207,190,0.7)' : 'rgba(240,236,228,0.25)' }}
            >
              {f.lieu}
            </p>
          </button>
        ))}
      </div>

      {/* Visuel — crossfade + progress bar */}
      <div className="md:w-3/5 flex flex-col gap-4">
        <div
          className="relative flex-1 min-h-56 rounded-xl overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(94,207,190,0.04)',
            border: '1px solid rgba(94,207,190,0.1)',
          }}
        >
          {formations.map((f, idx) => (
            <img
              key={idx}
              src={f.image}
              alt={f.lieu}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain p-10 transition-all duration-700"
              style={{
                opacity: active === idx ? 1 : 0,
                transform: active === idx ? 'scale(1)' : 'scale(0.97)',
              }}
            />
          ))}
        </div>

        {/* Indicateurs + barre de progression */}
        <div className="flex items-center gap-3">
          {formations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: active === idx ? '4rem' : '1rem',
                backgroundColor: 'rgba(94,207,190,0.15)',
              }}
              aria-label={`Formation ${idx + 1}`}
            >
              {active === idx && (
                <span
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ width: `${progress}%`, backgroundColor: '#5ecfbe' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

const Formation = () => (
  <SectionCard id="formation" title="Formation">
    <FormationShowcase />
  </SectionCard>
);

export default Formation;
