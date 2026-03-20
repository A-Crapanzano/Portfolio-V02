const Hero = () => {
  return (
    <section
      className="h-[90vh] w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/artificial-intelligence-5866644_1920.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-950/78" />

      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
        <h2
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          Alternant Développeur<br className="hidden sm:block" /> IA & Data
        </h2>
        <div
          className="w-16 h-px bg-amber-400 mx-auto mb-6 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        />
        <p
          className="text-lg md:text-xl text-white/75 max-w-xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          Actuellement en formation à Epitech Marseille et en alternance chez Dev-id.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
