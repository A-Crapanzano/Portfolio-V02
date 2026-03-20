import SectionCard from '../ui/SectionCard';

const Profil = () => {
  return (
    <SectionCard id="profil" title="Profil">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src="/images/profildev.png"
          alt="Photo de profil"
          loading="lazy"
          className="w-full md:w-2/5 rounded-xl shadow-lg flex-shrink-0 object-cover"
        />
        <div className="space-y-4">
          <blockquote className="font-serif text-xl md:text-2xl text-blue-900 italic border-l-4 border-amber-400 pl-5 py-1 leading-snug">
            Infirmier pendant 8 ans, développeur aujourd'hui - les deux m'ont appris à écouter avant d'agir.
          </blockquote>
          <p className="text-gray-700 leading-relaxed">
            Attiré par les nouvelles technologies depuis l'adolescence, j'ai décidé de me reconvertir dans la tech avec la volonté d'allier mes compétences humaines à des savoir-faire technologiques.
          </p>
          <p className="text-gray-700 leading-relaxed">
            J'ai intégré depuis septembre 2025 le Pré-Master of Science d'Epitech. J'ai un intérêt particulier pour l'IA et la Data.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default Profil;
