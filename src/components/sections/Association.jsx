import { Volleyball, Spotlight } from 'lucide-react';
import SectionCard from '../ui/SectionCard';

const VideoEmbed = ({ src, title, sandbox }) => (
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl" style={{ border: '1px solid rgba(94,207,190,0.12)' }}>
    <iframe
      src={src}
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      sandbox={sandbox || 'allow-scripts allow-same-origin allow-presentation allow-popups'}
    />
  </div>
);

const Association = () => {
  return (
    <SectionCard id="association" title="Association">
      <div className="space-y-16">

        <div>
          <h4
            className="flex items-center gap-2 text-xl font-semibold mb-4"
            style={{ color: '#5ecfbe' }}
          >
            <Volleyball size={20} />
            Association Sportive Marseille Provence
          </h4>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
                Les expériences associatives que j'ai pu vivre en tant que Président et Fondateur de l'ASMP furent incroyables.
              </p>
              <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
                L'association avait été créée dans le but d'animer les "playgrounds" de Marseille et de créer un véritable engouement autour du basket.
              </p>
              <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
                Le projet dont je suis le plus fier est la création de la <strong style={{ color: '#f0ece4' }}>"Marseille Street League"</strong> en collaboration avec le club professionnel Fos Provence Basket et la FFBB.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://ancien.ffbb.com/basket-3x3/lancement-3x3-marseille-street-league"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-full transition-all duration-300"
                  style={{ border: '1px solid rgba(94,207,190,0.4)', color: '#5ecfbe' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#5ecfbe'; e.currentTarget.style.color = '#07080f'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5ecfbe'; }}
                >
                  Article FFBB
                </a>
                <a
                  href="https://www.facebook.com/ASMProvence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-full transition-all duration-300"
                  style={{ border: '1px solid rgba(94,207,190,0.4)', color: '#5ecfbe' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#5ecfbe'; e.currentTarget.style.color = '#07080f'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#5ecfbe'; }}
                >
                  Facebook ASMP
                </a>
              </div>
              <img
                src="/images/asmp1.jpg"
                alt="Photo de l'équipe ASMP lors d'un tournoi"
                loading="lazy"
                className="w-full rounded-xl mt-2"
                style={{ border: '1px solid rgba(94,207,190,0.1)' }}
              />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(94,207,190,0.6)' }}>
                Finale — Palais des Sports
              </p>
              <VideoEmbed
                src="https://geo.dailymotion.com/player.html?video=x1st5dn"
                title="Marseille Street League Finale"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              />
            </div>
          </div>
        </div>

        <div>
          <h4
            className="flex items-center gap-2 text-xl font-semibold mb-4"
            style={{ color: '#5ecfbe' }}
          >
            <Spotlight size={20} />
            Blancarde Infirmier Marseille — "Le BIM"
          </h4>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(94,207,190,0.6)' }}>
                Gala — Sport Beach Marseille
              </p>
              <VideoEmbed
                src="https://www.youtube.com/embed/mKI23yAjmiQ?si=vYRPvVfT5n-7IWkX"
                title="Gala BIM au Sport Beach Marseille"
              />
            </div>

            <div className="space-y-4">
              <img
                src="/images/blancarde-infirmier-marseille-523c00c643944be18655dd8aa2a82e22.jpg"
                alt="Logo de l'association BIM"
                loading="lazy"
                className="w-40 rounded-xl"
                style={{ border: '1px solid rgba(94,207,190,0.1)' }}
              />
              <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
                La Présidence du BDE Blancarde Infirmier fut également une expérience très enrichissante. J'ai pu organiser avec mes collaborateurs différents événements — en majeure partie des soirées.
              </p>
              <p style={{ color: 'rgba(240,236,228,0.65)', lineHeight: '1.75' }}>
                L'événement le plus emblématique fut le premier <strong style={{ color: '#f0ece4' }}>Gala de l'école</strong> organisé au Sport Beach de Marseille.
              </p>
            </div>
          </div>
        </div>

      </div>
    </SectionCard>
  );
};

export default Association;
