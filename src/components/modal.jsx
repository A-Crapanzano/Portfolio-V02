export default function Modal({ isOpen, onClose, title, description, image }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl text-center">
        {image && (
          <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
        )}
        <h2 className="text-xl font-bold text-blue-900 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}