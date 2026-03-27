import ParticleNetwork from '../ui/ParticleNetwork';

const Hero = () => {
  return (
    <section
      className="h-screen relative flex items-center justify-center bg-[#07080f] overflow-hidden"
      aria-label="Présentation"
    >
      <ParticleNetwork />

      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        <p
          className="text-[#5ecfbe] text-xs font-semibold tracking-[0.4em] uppercase mb-10 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Alternant Fullstack · Dev-id &amp; Epitech Marseille
        </p>

        <h1
          className="font-serif text-6xl md:text-7xl lg:text-[6rem] text-white leading-none mb-6 animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          Alexandre<br />Crapanzano
        </h1>

        <p
          className="text-xl md:text-2xl font-light mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s', color: '#7a9eb5' }}
        >
          Développeur IA &amp; Data
        </p>

        <div
          className="w-12 h-px mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: '0.5s', backgroundColor: '#5ecfbe' }}
        />

        <p
          className="text-base md:text-lg italic max-w-sm mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.6s', color: 'rgba(240,236,228,0.6)' }}
        >
          En soins infirmiers, on évalue avant d'agir.<br />
          En dev, j'ai gardé ce réflexe.
        </p>

        <div
          className="mt-10 flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.75s' }}
        >
          <a
            href="#profil"
            className="inline-flex items-center gap-3 text-sm font-medium px-8 py-3.5 rounded-full border transition-all duration-300"
            style={{
              borderColor: '#5ecfbe',
              color: '#5ecfbe',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#5ecfbe';
              e.currentTarget.style.color = '#07080f';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#5ecfbe';
            }}
          >
            Découvrir mon parcours
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint">
        <svg
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#5ecfbe" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
