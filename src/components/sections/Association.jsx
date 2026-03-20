import { Volleyball, MonitorPlay, Spotlight } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const Association = () => {
  return (
    <SectionCard id="association" title="Association">
      <div className="space-y-6">
        <div>
          <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <Volleyball size={22} className="text-blue-900 mr-2" />
            Association Sportive Marseille Provence
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Les expériences associatives que j'ai pu vivre en tant que Président et Fondateur de l'Association Sportive Marseille Provence (ASMP) furent incroyables.
          </p>
          <p className="text-gray-700 leading-relaxed">
            L'Association sportive avait été créée dans le but d'animer au maximum les "playgrounds" de Marseille et de créer un véritable engouement autour du basket.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Le projet dont je suis le plus fier est la création de la "Marseille Street League" en collaboration avec Le club professionnel Fos Provence Basket et La Fédération Française de Basket-Ball.
          </p>
          <div className="flex flex-col gap-2 my-4">
            <a
              href="https://ancien.ffbb.com/basket-3x3/lancement-3x3-marseille-street-league"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-all"
            >
              Article de La Marseille Street League
            </a>
            <a
              href="https://www.facebook.com/ASMProvence/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-all"
            >
              Facebook de L'association ASMP
            </a>
          </div>
        </div>

        <img
          src="/images/asmp1.jpg"
          alt="Photo de l'équipe de l'Association Sportive Marseille Provence lors d'un tournoi"
          loading="lazy"
          className="w-full sm:w-2/3 md:w-1/2 mx-auto rounded-xl shadow-lg"
        />

        <div>
          <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <MonitorPlay size={22} className="text-blue-900 mr-2" />
            La Finale de la "MSL" au Palais des Sports
          </h4>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe
              src="https://geo.dailymotion.com/player.html?video=x1st5dn"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              title="Marseille Street League Finale"
              allow="web-share"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            />
          </div>
        </div>

        <div className="mt-8">
          <img
            src="/images/blancarde-infirmier-marseille-523c00c643944be18655dd8aa2a82e22.jpg"
            alt="Logo de l'association étudiante Blancarde Infirmier Marseille (BIM)"
            loading="lazy"
            className="w-full sm:w-2/3 md:w-1/2 mx-auto rounded-xl shadow-lg mb-4"
          />
          <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <Spotlight size={22} className="text-blue-900 mr-2" />
            Blancarde Infirmier Marseille — "Le BIM"
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            La Présidence du BDE Blancarde Infirmier fut également une expérience très enrichissante. J'ai pu organiser avec mes collaborateurs différents événements, en majeure partie des soirées. L'événement le plus emblématique fut le premier Gala de l'école organisé au Sport Beach de Marseille
          </p>
          <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <MonitorPlay size={22} className="text-blue-900 mr-2" />
            Gala du BIM — Sport Beach Marseille
          </h4>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/mKI23yAjmiQ?si=vYRPvVfT5n-7IWkX"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Gala BIM au Sport Beach Marseille"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default Association;
