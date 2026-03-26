import { Download } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const CV = () => {
  return (
    <SectionCard id="cv" title="CV">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src="/images/CV3.0.jpg"
          alt="Aperçu de mon CV"
          loading="lazy"
          className="w-full md:w-1/2 rounded-xl flex-shrink-0"
          style={{ border: '1px solid rgba(94,207,190,0.12)', boxShadow: '0 0 40px rgba(94,207,190,0.06)' }}
        />
        <div className="space-y-4">
          <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
            Mon CV est disponible en téléchargement au format PDF. Il contient un résumé des éléments que vous avez pu voir jusqu'ici mais également des informations supplémentaires importantes.
          </p>
          <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
            Je serai ravi d'en parler plus en détails lors d'un entretien.
          </p>
          <a
            href="/fichier/CV 3.0.pdf"
            download
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 mt-2"
            style={{ backgroundColor: '#5ecfbe', color: '#07080f' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3aafa0'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#5ecfbe'; }}
          >
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </SectionCard>
  );
};

export default CV;
