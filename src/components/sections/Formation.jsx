import SectionCard from '../ui/SectionCard';
import Carousel from '../ui/Carousel';

const formationImages = [
  { src: '/images/Epitech.jpg', alt: 'Epitech' },
  { src: '/images/logo_blancarde.jpg', alt: 'IFSI Blancarde' },
  { src: '/images/logo20cy20ucp202.png', alt: 'Université Cergy' },
];

const formations = [
  {
    title: 'Master of science : Architecte des systèmes d\'informations',
    lieu: 'Epitech Marseille',
    period: '2025 — 2028',
  },
  {
    title: 'Master Métiers de l\'enseignement et de la formation',
    lieu: 'Université de Cergy',
    period: '2021 — 2022',
  },
  {
    title: 'Formation Infirmier Diplômé D\'État',
    lieu: 'IFSI Blancarde',
    period: '2013 — 2017',
  },
];

const Formation = () => {
  return (
    <SectionCard id="formation" title="Formation">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-5">
          {formations.map((f, idx) => (
            <div key={idx} className="border-l-2 border-teal-500 pl-4">
              <h4 className="text-lg font-semibold text-teal-600 leading-snug">{f.title}</h4>
              <p className="text-gray-600 mt-1">{f.lieu}</p>
              <p className="text-sm text-gray-400">{f.period}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/5 flex-shrink-0">
          <Carousel images={formationImages} duration={10} />
        </div>
      </div>
    </SectionCard>
  );
};

export default Formation;
