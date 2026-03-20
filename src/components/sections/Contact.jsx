import { useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionCard from '../ui/SectionCard';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm('service_8otywua', 'template_6736uh5', form.current, 'sCz-VpL1fspuBC7Pw')
      .then(
        () => {
          setIsSending(false);
          alert('Message envoyé !');
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          console.log('FAILED...', error.text);
          alert('Échec de l\'envoi. Veuillez réessayer.');
        }
      );
  };

  return (
    <SectionCard id="contact" title="Contact et Réseaux">
      <div className="flex justify-center gap-8 mb-6">
        <span aria-hidden="true">
          <Mail className="w-12 h-12 text-teal-600" />
        </span>
        <a
          href="https://www.linkedin.com/in/alexandre-crapanzano-89b856241/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn d'Alexandre Crapanzano"
        >
          <Linkedin className="w-12 h-12 text-teal-600 hover:text-blue-900 transition-colors" />
        </a>
        <a
          href="https://github.com/A-Crapanzano/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub d'Alexandre Crapanzano"
        >
          <Github className="w-12 h-12 text-teal-600 hover:text-blue-900 transition-colors" />
        </a>
      </div>

      <div className="text-center mb-8">
        <a
          href="https://www.linkedin.com/in/alexandre-crapanzano-89b856241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-blue-900 font-medium mx-2"
        >
          LinkedIn
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="https://github.com/A-Crapanzano/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-blue-900 font-medium mx-2"
        >
          Github
        </a>
      </div>

      <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Me contacter</h4>
      <p className="text-gray-700 text-center mb-6">
        Vous pouvez m'envoyer un message directement depuis ce formulaire :
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Votre nom
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Votre email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            rows="5"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSending ? 'Envoi en cours…' : 'Envoyer'}
        </button>
      </form>
    </SectionCard>
  );
};

export default Contact;
