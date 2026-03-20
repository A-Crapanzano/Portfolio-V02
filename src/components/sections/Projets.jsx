import SectionCard from '../ui/SectionCard';

const projects = [
  {
    title: 'JobBoard React/Symfony',
    image: '/images/logo_findjob.png',
    description: 'Plateforme de mise en relation entre candidats et recruteurs avec backend dynamique.',
    github: 'https://github.com/A-Crapanzano/FindJob',
  },
  {
    title: 'Portfolio V1',
    image: '/images/site 1.jpg',
    description: 'Première version de mon portfolio',
    github: 'https://github.com/A-Crapanzano/portfolio',
  },
  {
    title: 'Hangman Python',
    image: '/images/hangman.png',
    description: 'Jeu du pendu développé en Python, avec logique de mot caché et gestion des erreurs.',
    github: 'https://github.com/A-Crapanzano/Hangman',
  },
];

const Projets = () => {
  return (
    <SectionCard id="projets" title="Projets">
      <p className="text-gray-700 mb-6 text-center">
        Voici quelques projets que j'ai réalisés ou auxquels j'ai contribué :
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
            <img
              src={proj.image}
              alt={proj.title}
              loading="lazy"
              className="w-full h-60 object-cover rounded mb-4"
            />
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">{proj.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
            </div>
            <div className="flex gap-2 mt-auto">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-3 py-1 rounded text-sm hover:bg-blue-800 transition-all"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Projets;
