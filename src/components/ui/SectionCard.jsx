import { useInView } from '../../hooks/useInView';

const SectionCard = ({ id, title, children }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      id={id}
      className={`bg-white rounded-xl shadow-md p-5 sm:p-8 md:p-10 my-8 md:my-10 max-w-5xl mx-auto scroll-mt-16 lg:scroll-mt-28 w-full
        transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="text-center mb-8">
        <h3 className="font-serif text-4xl text-blue-900 mb-3">
          {title}
        </h3>
        <div className="w-10 h-px bg-amber-500 mx-auto" />
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default SectionCard;
