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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans overflow-x-hidden">
      <a href="#profil" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:text-blue-900 focus:font-medium">
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <Profil />
        <Formation />
        <Projets />
        <Hardskills />
        <Softskills />
        <Experiences />
        <Association />
        <CV />
        <Contact />
      </main>
      <footer className="text-center py-10 px-4 border-t border-stone-200 mt-4">
        <p className="font-serif text-xl text-blue-900 mb-1">Alexandre Crapanzano</p>
        <p className="text-sm text-stone-400">Disponible en alternance · Marseille &amp; remote</p>
      </footer>
    </div>
  );
}
