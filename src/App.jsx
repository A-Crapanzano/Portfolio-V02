import { Menu,MemoryStick,HardDriveUpload, X, Download,Handshake, Speech, Mail, Linkedin, Github,CalendarSync,HeartHandshake,HandFist,BriefcaseBusiness, Activity,Users,ShieldQuestionMark,Cross,GraduationCap,Volleyball,MonitorPlay,Spotlight,Computer } from 'lucide-react';
import emailjs from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Profil', href: '#profil' },
    { label: 'Formation', href: '#formation' },
    { label: 'Projets', href: '#projets' },
    { label: 'Hardskills', href: '#hardskills' },
    { label: 'Softskills', href: '#softskills' },
    { label: 'Expériences', href: '#experiences' },
    { label: 'Association', href: '#association' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-5 relative">
    <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
      Alexandre Crapanzano
    </h1>

    
  <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="lg:hidden fixed top-0 right-0 p-3 z-50"
  aria-label="Toggle menu"
>
  {isMenuOpen ? (
    <X className="w-6 h-6 text-blue-900" />
  ) : (
    <Menu className="w-6 h-6 text-blue-900" />
  )}
</button>


    
    <nav
      className={`
        lg:block
        ${isMenuOpen ? 'block' : 'hidden'}
        lg:relative absolute lg:top-auto top-0 lg:right-auto right-0
        lg:w-auto w-56 lg:bg-transparent bg-white
        lg:shadow-none shadow-lg lg:rounded-none rounded-lg
        lg:p-0 p-4
      `}
    >
      <ul className="flex lg:flex-row flex-col lg:justify-center lg:gap-2 gap-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={handleNavClick}
              className="block uppercase text-sm font-medium text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-md transition-all duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</header>

  );
};


const Hero = () => {
  return (
    <section 
      className="h-[90vh] w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/artificial-intelligence-5866644_1920.jpg')"
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center text-white max-w-3xl mx-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Alternant Développeur IA & Data
        </h2>
        <p className="text-lg md:text-xl">
          Actuellement en Formation à Epitech Marseille et en alternance en Janvier chez Dev-id.
        </p>
      </div>
    </section>
  );
};


const Carousel = ({ images }) => {
  return (
    <div className="flex overflow-x-auto gap-4 h-40 snap-x snap-mandatory pb-2 no-scrollbar">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className="cursor-pointer snap-center flex-shrink-0 h-full w-auto object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
};




const SectionCard = ({ id, title, children }) => {
  return (
    <section 
      id={id} 
      className="bg-white rounded-xl shadow-lg p-8 md:p-10 my-10 max-w-5xl mx-auto scroll-mt-24 w-full"
    >
      <h3 className="text-3xl font-bold text-blue-900 text-center mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};
 


 

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8otywua",
        "template_6736uh5",
        form.current,
        "sCz-VpL1fspuBC7Pw"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message envoyé!");
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (

<form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        rows="5"
        required
        className="w-full p-2 border rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all"
      >
        Envoyer
      </button>
    </form>
  );
};



export default function Portfolio() {
  const formationImages = [
    { src: '/images/Epitech.jpg', alt: 'Epitech' },
    { src: '/images/logo_blancarde.jpg', alt: 'IFSI' },
    { src: '/images/logo20cy20ucp202.png', alt: 'Université Cergy' }
  ];



  const hardskillsImages = [
    { src: '/images/logo html (1).png', alt: 'HTML' },
    { src: '/images/logo css.png', alt: 'CSS' },
    { src: '/images/javascript-8543231_1920.png', alt: 'JavaScript' },
    { src: '/images/react_original_wordmark_logo_icon_146375.png', alt: 'React' },
    { src: '/images/python.png', alt: 'Python' },
    { src: '/images/symfony_icon_137135.png', alt: 'Symfony' },
    { src: '/images/logo-docker-1.svg', alt: 'Docker' },
    { src: '/images/Git-logo.svg.png', alt: 'Git' }
  ];

  const softskillsImages = [

    {src:'/images/leader.jpg', alt :"leader"},
    {src:'/images/stress.jpg', alt :"stress"},
    {src:'/images/empathie.jpg', alt :"com"},
    {src:'/images/organisation.jpg', alt :"organisation"},
    {src:'/images/empathy2.png', alt :"empathie"},
    {src:'/images/idea (1).png', alt :"idea"},
    {src:'/images/teamwork.png', alt :"equipe"},

  ]

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      <Header />
      <Hero />

      <SectionCard id="profil" title="Profil">
        <img 
            src="/images/DSC_0059.JPG" 
            alt="profil_img" 
            className="w-1/2 mx-auto rounded-xl shadow-lg"
          />
        <p className="text-gray-700 leading-relaxed">
          Infirmier diplômé depuis 2017, j'ai toujours été attiré par les nouvelles technologies et l'informatique en général. Dès l'adolescence, j'ai appris à monter mes propres PC pour jouer à mes jeux vidéo favoris. En quête de renouveau professionnel, j'ai décidé de me reconvertir dans la tech avec la volonté d'allier mes compétences humaines à des savoir-faire technologiques.
        </p>
        <p className="text-gray-700 leading-relaxed">
          J'ai intégré depuis septembre 2025 le Pré-Master of Science d'Epitech. J'ai un intérêt particulier pour l'IA et la Data
        </p>
      </SectionCard>

     
      <SectionCard id="formation" title="Formation">
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-teal-600">
              Master of science : Architecte des systèmes d'informations
            </h4>
            <p className="text-gray-600">Epitech Marseille / 2025-2028</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-600">
              Master Métiers de l'enseignement et de la formation
            </h4>
            <p className="text-gray-600">Université de Cergy / 2021-2022</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-teal-600">
              Formation Infirmier Diplômé D'État
            </h4>
            <p className="text-gray-600">IFSI Blancarde / 2013-2017</p>
          </div>
        </div>
        <Carousel images={formationImages} />
      </SectionCard>

      
      
<SectionCard id="projets" title="Projets">
  <p className="text-gray-700 mb-6 text-center">
    Voici quelques projets que j’ai réalisés ou auxquels j’ai contribué :
  </p>

  <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
    {[
      {
        title: 'JobBoard React/Symfony',
        image: '/images/logo_findjob.png',
        description: 'Plateforme de mise en relation entre candidats et recruteurs avec backend dynamique.',
        github: 'https://github.com/A-Crapanzano/FindJob',
      },
      
      {
        title: 'Portfolio V1',
        image: '/images/site 1.jpg',
        description: 'Première version de mon portfolio',
        github: 'https://github.com/A-Crapanzano/portfolio',
        
      },
      {
        title: 'Hangman Python',
        image: '/images/hangman.png',
        description: 'Jeu du pendu développé en Python, avec logique de mot caché et gestion des erreurs.',
        github: 'https://github.com/A-Crapanzano/Hangman',
        
      }
    ].map((proj, idx) => (
      <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-60 object-cover rounded mb-4"
        />
        <div>
          <h4 className="text-lg font-semibold text-blue-900 mb-2">{proj.title}</h4>
          <p className="text-gray-600 text-sm mb-4">{proj.description}</p>
        </div>
        <div className="flex gap-2 mt-auto">
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}
          
          
        </div>
      </div>
    ))}
  </div>
</SectionCard>


      
      <SectionCard id="hardskills" title="Hardskills">
        <p className="text-gray-700 mb-6 text-center">
    Voici Les compétences développées grâce aux différents projets dans la section précédentes :
  </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            
            <Computer size={20} className="text-blue-900 mr-2"/>
            HTML, CSS, JavaScript, Python, React
          </li>
          <li className="flex items-start">
            <MemoryStick size={20} className="text-blue-900 mr-2"/>
            Symfony, PHP
          </li>
          <li className="flex items-start">
            <HardDriveUpload size={20} className="text-blue-900 mr-2"/>
            Docker, Git
          </li>
        </ul>
        <Carousel images={hardskillsImages} />
      </SectionCard>

      
      <SectionCard id="softskills" title="Softskills">
        <div className="space-y-4 text-gray-700">
      <Carousel images={softskillsImages} />
    

          <p>Au fil de mes expériences, j'ai développé des compétences humaines solides qui enrichissent ma posture professionnelle au quotidien.</p>
          <p>Mon parcours d'infirmier m'a appris à gérer le stress, à faire preuve d'empathie, à écouter activement et à travailler en équipe pluridisciplinaire.</p>
          <p>En tant que président d'associations étudiantes et sportives, j'ai cultivé un leadership naturel, un sens aigu de l'organisation et une capacité à mobiliser les autres autour de projets concrets.</p>
          <p>Mon expérience de vendeur chez SFR m'a permis de renforcer mon aisance relationnelle, mon sens du service et ma capacité à comprendre les besoins des clients.</p>
        </div>
        <ul className="space-y-2 text-gray-700">
          {[
            <p className="flex items-center text-gray-800">
            <HandFist size={20} className="text-blue-900 mr-2" />
            Leadership et esprit d'initiative</p>,
            <p className="flex items-center text-gray-800">
            <Activity size={20} className="text-blue-900 mr-2" />
            Gestion du stress et des priorités</p>,
            <p className="flex items-center text-gray-800">
            <Speech size={20} className="text-blue-900 mr-2" />
            Communication claire et persuasive</p>,
            <p className="flex items-center text-gray-800">
            <CalendarSync size={20} className="text-blue-900 mr-2" />
            Organisation d'événements et coordination d'équipe</p>,
            <p className="flex items-center text-gray-800">
            <HeartHandshake size={20} className="text-blue-900 mr-2" />
            Empathie et sens de l'écoute</p>,
            <p className="flex items-center text-gray-800">
            <Users size={20} className="text-blue-900 mr-2" />
            Travail en équipe et adaptabilité</p>,
            <p className="flex items-center text-gray-800">
            <ShieldQuestionMark size={20} className="text-blue-900 mr-2" />
            Résolution de problèmes en situation réelle</p>,
            <p className="flex items-center text-gray-800">
            <Handshake size={20} className="text-blue-900 mr-2" />
            Sens du service client et de la satisfaction utilisateur</p>,
          ].map((skill, idx) => (
            <li key={idx} className="flex items-start">
              {/* <span className="text-teal-600 mr-2">•</span> */}
              {skill}
            </li>
            
          ))}
        </ul>
      </SectionCard>
      
      <SectionCard id="experiences" title="Expériences">
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <Cross size={20} className="text-blue-900 mr-2" />
            INFIRMIER DIPLÔMÉ D'ÉTAT
            </h4>

            <p className="text-gray-600 mb-2">Mars 2017 | Mars 2025</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>EHPAD Groupe Domusvi</li>
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>Infirmier Libéral</li>
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>Infirmier Intérimaire</li>
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>CH Valvert - service Psychiatrie</li>
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>CHP Provence - Service de Dialyse</li>
            </ul>
          </div>
          
          <div>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <GraduationCap size={20} className="text-blue-900 mr-2" />
            PROFESSEUR
            </h4>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">SCIENCES TECHNIQUES ET MÉDICO-SOCIALES</h4>
            <p className="text-gray-600 mb-2">Septembre 2021 | Novembre 2022</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>Lycée Jean-Perrin de Longjumeau</li>
            </ul>
          </div>
          
          <div>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <BriefcaseBusiness size={20} className="text-blue-900 mr-2" />
            CONSEILLER DE VENTE
            </h4>
            <p className="text-gray-600 mb-2">Juillet 2010 - Août 2013</p>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start"><span className="text-teal-600 mr-2">•</span>Société SFR-Centre commercial le Merlan</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      
      <SectionCard id="association" title="Association">
        <div className="space-y-6">
          <div>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <Volleyball size={20} className="text-blue-900 mr-2" />
            Association Sportive 
            </h4>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">Marseille Provence</h4>
            <p className="text-gray-700 leading-relaxed">
              Les expériences associatives que j'ai pu vivre en tant que Président et Fondateur de l'Association Sportive Marseille Provence (ASMP) furent incroyables.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L'Association sportive avait été créée dans le but d'animer au maximum les "playgrounds" de Marseille et de créer un véritable engouement autour du basket.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le projet dont je suis le plus fier est la création de la "Marseille Street League" en collaboration avec Le club professionnel Fos Provence Basket et La Fédération Française de Basket-Ball.
            </p>
            
            <div className="flex flex-col gap-2 my-4">
  <a
    href="https://ancien.ffbb.com/basket-3x3/lancement-3x3-marseille-street-league"
    target="_blank"
    className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-teal-600 transition"
  >
    Article de La Marseille Street League
  </a>

  <a
    href="https://www.facebook.com/ASMProvence/"
    target="_blank"
    className="w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-teal-600 transition"
  >
    Facebook de L'association ASMP
  </a>
</div>
          </div>

          <img 
          src="/images/asmp1.jpg" 
          alt="ASMP" 
          className="w-1/2 mx-auto rounded-xl shadow-lg max-w-full"
          />

          <div>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <MonitorPlay size={20} className="text-blue-900 mr-2" />
            La Finale de la "MSL" 
            </h4>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">au Palais des Sports</h4>
            
          <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2"></h4>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
              <iframe 
                src="https://geo.dailymotion.com/player.html?video=x1st5dn"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                title="Marseille Street League Finale"
                allow="web-share"
              />
            </div>
          </div>

          <div className="mt-8">
            <img 
              src="/images/blancarde-infirmier-marseille-523c00c643944be18655dd8aa2a82e22.jpg" 
              alt="BIM" 
              className="w-1/2 mx-auto rounded-xl shadow-lg mb-4 max-w-full"
            />
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <Spotlight size={20} className="text-blue-900 mr-2" />
            Blancarde Infirmier Marseille
            </h4>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2"> "Le BIM"</h4>
        
             
            <p className="text-gray-700 leading-relaxed mb-4">
              La Présidence du BDE Blancarde Infirmier fut également une expérience très enrichissante. J'ai pu organiser avec mes collaborateurs différents événements, en majeure partie des soirées. L'événement le plus emblématique fut le premier Gala de l'école organisé au Sport Beach de Marseille
            </p>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">
            <MonitorPlay size={20} className="text-blue-900 mr-2" />
            Gala du BIM
            </h4>
            <h4 className="flex items-center text-2xl font-semibold text-teal-600 mb-2">Sport Beach Marseille</h4>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
              <iframe 
                src="https://www.youtube.com/embed/mKI23yAjmiQ?si=vYRPvVfT5n-7IWkX" 
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Gala BIM"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </SectionCard>

     
      <SectionCard id="cv" title="CV">
      <img 
       src="/images/CV3.0.jpg" 
       alt="CV" 
      className="w-2/3 mx-auto rounded-xl shadow-lg mb-4 max-w-full"
/>
        <p className="text-gray-700 leading-relaxed">
          Mon CV est disponible en téléchargement au format PDF. Il contient un résumé des éléments que vous avez pu voir jusqu'ici mais également des informations supplémentaires importantes que je serai ravi d'expliquer plus en détails lors d'un entretien.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vous pouvez le télécharger en cliquant sur le bouton ci-dessous.
        </p>
        <a 
          href="/fichier/CV 3.0.pdf" 
          download
          className="inline-flex items-center gap-2w-fit px-4 py-2 bg-blue-600 text-white rounded hover:bg-teal-600 transition"
        >
          <Download className="w-5 h-5" />
          Télécharger mon CV
        </a>
      </SectionCard>

      
      <SectionCard id="contact" title="Contact et Réseaux">
        <div className="flex justify-center gap-8 mb-6">
          <Mail className="w-12 h-12 text-teal-600" />
          <Linkedin className="w-12 h-12 text-teal-600" />
          <Github className="w-12 h-12 text-teal-600" />
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

        <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Me contacter
        </h4>
        <p className="text-gray-700 text-center mb-6">
          Vous pouvez m'envoyer un message directement depuis ce formulaire :
        </p>
        
        <ContactUs />
      </SectionCard>
      
    </div>
  );
}