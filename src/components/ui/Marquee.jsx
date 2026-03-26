const LogoItem = ({ src, alt }) => (
  <div
    className="flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 cursor-default"
    style={{
      backgroundColor: 'rgba(94,207,190,0.05)',
      border: '1px solid rgba(94,207,190,0.08)',
      transition: 'background-color 0.25s, border-color 0.25s, box-shadow 0.25s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = 'rgba(94,207,190,0.13)';
      e.currentTarget.style.borderColor    = 'rgba(94,207,190,0.4)';
      e.currentTarget.style.boxShadow      = '0 0 22px rgba(94,207,190,0.2)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = 'rgba(94,207,190,0.05)';
      e.currentTarget.style.borderColor    = 'rgba(94,207,190,0.08)';
      e.currentTarget.style.boxShadow      = 'none';
    }}
  >
    <img src={src} alt={alt} className="w-9 h-9 object-contain" loading="lazy" />
  </div>
);

/**
 * Double-marquee: row 1 scrolls left, row 2 scrolls right at a different speed.
 * Fade-out edges via CSS mask.
 * Hovers pauses both rows via .marquee-container:hover in CSS.
 */
const Marquee = ({ images }) => {
  const row1 = [...images, ...images];
  const row2 = [...[...images].reverse(), ...[...images].reverse()];

  return (
    <div
      className="marquee-container overflow-hidden py-3 select-none"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      {/* Rangée 1 — vers la gauche */}
      <div className="flex gap-4 mb-4 animate-marquee-left" style={{ width: 'max-content' }}>
        {row1.map((img, i) => <LogoItem key={i} {...img} />)}
      </div>

      {/* Rangée 2 — vers la droite */}
      <div className="flex gap-4 animate-marquee-right" style={{ width: 'max-content' }}>
        {row2.map((img, i) => <LogoItem key={i} {...img} />)}
      </div>
    </div>
  );
};

export default Marquee;
