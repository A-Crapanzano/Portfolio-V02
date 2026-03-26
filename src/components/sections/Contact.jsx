import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const IconLinkedin = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconGithub = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
import SectionCard from '../ui/SectionCard';

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  backgroundColor: '#0f1521',
  border: '1px solid rgba(94,207,190,0.2)',
  borderRadius: '0.5rem',
  color: '#f0ece4',
  outline: 'none',
  transition: 'border-color 0.2s',
};

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
          alert("Échec de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <SectionCard id="contact" title="Contact">
      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Réseaux */}
        <div className="md:w-1/3 space-y-6">
          <p style={{ color: 'rgba(240,236,228,0.55)', lineHeight: '1.75' }}>
            Disponible pour toute opportunité d'alternance ou collaboration. N'hésitez pas à me contacter.
          </p>
          <div className="space-y-4">
            <a
              href="https://www.linkedin.com/in/alexandre-crapanzano-89b856241/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn d'Alexandre Crapanzano"
              className="flex items-center gap-3 transition-colors group"
            >
              <IconLinkedin size={20} style={{ color: '#5ecfbe', flexShrink: 0 }} />
              <span className="text-sm" style={{ color: 'rgba(240,236,228,0.6)' }}>LinkedIn</span>
            </a>
            <a
              href="https://github.com/A-Crapanzano/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub d'Alexandre Crapanzano"
              className="flex items-center gap-3 transition-colors"
            >
              <IconGithub size={20} style={{ color: '#5ecfbe', flexShrink: 0 }} />
              <span className="text-sm" style={{ color: 'rgba(240,236,228,0.6)' }}>GitHub</span>
            </a>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#5ecfbe' }} aria-hidden="true" />
              <span className="text-sm" style={{ color: 'rgba(240,236,228,0.6)' }}>Via le formulaire →</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <form ref={form} onSubmit={sendEmail} className="flex-1 space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium mb-2 tracking-wide" style={{ color: 'rgba(240,236,228,0.5)' }}>
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = '#5ecfbe'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(94,207,190,0.2)'; }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium mb-2 tracking-wide" style={{ color: 'rgba(240,236,228,0.5)' }}>
              Votre email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Votre email"
              required
              style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor = '#5ecfbe'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(94,207,190,0.2)'; }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium mb-2 tracking-wide" style={{ color: 'rgba(240,236,228,0.5)' }}>
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              rows="5"
              required
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => { e.currentTarget.style.borderColor = '#5ecfbe'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(94,207,190,0.2)'; }}
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#5ecfbe', color: '#07080f' }}
            onMouseEnter={e => { if (!isSending) e.currentTarget.style.backgroundColor = '#3aafa0'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#5ecfbe'; }}
          >
            {isSending ? 'Envoi en cours…' : 'Envoyer le message'}
          </button>
        </form>

      </div>
    </SectionCard>
  );
};

export default Contact;
