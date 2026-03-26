import { useInView } from '../../hooks/useInView';

const SectionCard = ({ id, title, label, children }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 px-6 max-w-5xl mx-auto scroll-mt-14 w-full
        transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="mb-12">
        {label && (
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(94,207,190,0.6)' }}>
            {label}
          </p>
        )}
        <h3 className="font-serif text-5xl" style={{ color: '#f0ece4' }}>{title}</h3>
        <div className="w-12 h-0.5 mt-4" style={{ backgroundColor: '#5ecfbe' }} />
      </div>
      {children}
    </section>
  );
};

export default SectionCard;
