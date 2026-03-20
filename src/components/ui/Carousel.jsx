const Carousel = ({ images, duration = 20 }) => {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden h-40 relative">
      <div
        className="flex gap-4 h-full animate-carousel"
        style={{ width: 'max-content', animationDuration: `${duration}s` }}
      >
        {doubled.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="flex-shrink-0 h-full w-auto object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
