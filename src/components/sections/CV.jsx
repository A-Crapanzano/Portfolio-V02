import { Download } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const CV = () => {
  return (
    <SectionCard id="cv" title="CV">
      <img
        src="/images/CV3.0.jpg"
        alt="Aperçu de mon CV"
        loading="lazy"
        className="w-2/3 mx-auto rounded-xl shadow-lg mb-4 max-w-full"
      />
      <p className="text-gray-700 leading-relaxed">
        Mon CV est disponible en téléchargement au format PDF. Il contient un résumé des éléments que vous avez pu voir jusqu'ici mais également des informations supplémentaires importantes que je serai ravi d'expliquer plus en détails lors d'un entretien.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.
      </p>
      <a
        href="/fichier/CV 3.0.pdf"
        download
        className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-all"
      >
        <Download className="w-5 h-5" />
        Télécharger mon CV
      </a>
    </SectionCard>
  );
};

export default CV;
