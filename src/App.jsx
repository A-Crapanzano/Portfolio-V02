import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Profil from './components/sections/Profil';
import Formation from './components/sections/Formation';
import Projets from './components/sections/Projets';
import Hardskills from './components/sections/Hardskills';
import Softskills from './components/sections/Softskills';
import Experiences from './components/sections/Experiences';
import Association from './components/sections/Association';
import CV from './components/sections/CV';
import Contact from './components/sections/Contact';

const ChapterDivider = ({ label }) => (
  <div className="flex items-center gap-4 max-w-5xl mx-auto px-6">
    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(94,207,190,0.18)' }} />
    <span
      className="text-xs font-medium tracking-[0.22em] uppercase whitespace-nowrap"
      style={{ color: 'rgba(94,207,190,0.55)' }}
    >
      {label}
    </span>
    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(94,207,190,0.18)' }} />
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: '#07080f' }}>
      <a
        href="#profil"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-slate-900 focus:font-medium"
      >
        Aller au contenu principal
      </a>

      <Header />

      <main>
        <Hero />

        <ChapterDivider label="Mon histoire" />
        <Profil />

        <ChapterDivider label="Parcours &amp; Formation" />
        <Formation />
        <Experiences />

        <ChapterDivider label="Compétences" />
        <Hardskills />
        <Softskills />

        <ChapterDivider label="Projets &amp; Engagement" />
        <Projets />
        <Association />

        <ChapterDivider label="Me contacter" />
        <CV />
        <Contact />
      </main>

      <footer
        className="text-center py-14 px-4 mt-4"
        style={{ borderTop: '1px solid rgba(94,207,190,0.15)' }}
      >
        <p className="font-serif text-2xl text-white mb-2">Alexandre Crapanzano</p>
        <p className="text-sm" style={{ color: 'rgba(240,236,228,0.35)' }}>
          Alternant Développeur IA &amp; Data · Dev-id
        </p>
      </footer>
    </div>
  );
}
