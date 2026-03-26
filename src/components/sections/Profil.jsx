import SectionCard from '../ui/SectionCard';

const Profil = () => {
  return (
    <SectionCard id="profil" title="Profil">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src="/images/profildev.png"
          alt="Photo de profil"
          loading="lazy"
          className="w-full md:w-2/5 rounded-xl flex-shrink-0 object-cover"
          style={{ boxShadow: '0 0 40px rgba(94,207,190,0.12)' }}
        />
        <div className="space-y-5">
          <blockquote
            className="font-serif text-xl md:text-2xl italic pl-5 py-1 leading-snug"
            style={{
              color: '#f0ece4',
              borderLeft: '4px solid #5ecfbe',
            }}
          >
            En soins infirmiers, on évalue avant d'agir - en dev, j'ai gardé ce réflexe.
          </blockquote>
          <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
            Attiré par les nouvelles technologies depuis l'adolescence, j'ai décidé de me reconvertir dans la tech avec la volonté d'allier mes compétences humaines à des savoir-faire technologiques.
          </p>
          <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
            J'ai intégré depuis septembre 2025 le Pré-Master of Science d'Epitech. J'ai un intérêt particulier pour l'IA et la Data.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default Profil;
