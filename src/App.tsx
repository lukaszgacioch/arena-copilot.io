import './App.css'

// ===== INTERFEJSY TYPESCRIPT =====
/**
 * Interfejs reprezentujący pojedynczą umiejętność
 */
interface Skill {
  name: string;
  level: 'Początkujący' | 'Średniozaawansowany' | 'Zaawansowany' | 'Expert';
}

/**
 * Interfejs reprezentujący doświadczenie zawodowe
 */
interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

/**
 * Interfejs dla danych kontaktowych
 */
interface Contact {
  email: string;
  phone: string;
  location: string;
}

/**
 * Interfejs dla linków społecznościowych
 */
interface SocialLinks {
  linkedin: string;
  github: string;
}

/**
 * Interfejs dla edukacji
 */
interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

/**
 * Interfejs dla języków
 */
interface Language {
  name: string;
  level: string;
}

function App() {
  // ===== DANE DO WYŚWIETLENIA =====
  const profileImage = "https://ui-avatars.com/api/?name=Jan+Kowalski&size=400&background=1e3a5f&color=fff&bold=true";
  
  const bio = "Doświadczony specjalista frontend z pasją do tworzenia intuicyjnych i wydajnych aplikacji webowych. Specjalizuję się w ekosystemie React oraz nowoczesnych technologiach JavaScript. Posiadam udokumentowane sukcesy w prowadzeniu zespołów technicznych oraz wdrażaniu rozwiązań zwiększających efektywność biznesową.";
  
  const skills: Skill[] = [
    { name: 'React & Next.js', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Zaawansowany' },
    { name: 'Node.js', level: 'Zaawansowany' },
    { name: 'Git & GitHub', level: 'Zaawansowany' },
    { name: 'PostgreSQL', level: 'Średniozaawansowany' },
    { name: 'REST API', level: 'Zaawansowany' },
    { name: 'GraphQL', level: 'Średniozaawansowany' },
  ];

  const experiences: Experience[] = [
    {
      company: 'Borcelle Studio',
      position: 'Senior Frontend Developer',
      period: '2023 - obecnie',
      description: 'Rozwój i utrzymanie zaawansowanych aplikacji webowych wykorzystujących React i TypeScript. Prowadzenie zespołu deweloperskiego oraz mentoring juniorów. Odpowiedzialność za architekturę frontendową i optymalizację wydajności.',
    },
    {
      company: 'Digital Agency Sp. z o.o.',
      position: 'Frontend Developer',
      period: '2021 - 2023',
      description: 'Tworzenie responsywnych aplikacji SPA dla klientów z sektora e-commerce. Implementacja designów z Figma do kodu. Współpraca z zespołem backend przy integracji API.',
    },
    {
      company: 'StartupLab',
      position: 'Junior Frontend Developer',
      period: '2019 - 2021',
      description: 'Nauka i rozwój umiejętności w technologiach webowych. Budowa komponentów UI oraz implementacja funkcjonalności według specyfikacji. Udział w code review i daily standupach.',
    },
  ];

  const education = [
    {
      degree: 'Magister Informatyki',
      school: 'Politechnika Warszawska',
      period: '2021 - 2023',
      details: 'Specjalizacja: Inżynieria Oprogramowania',
    },
    {
      degree: 'Inżynier Informatyki',
      school: 'Politechnika Warszawska',
      period: '2017 - 2021',
      details: 'Średnia ocen: 4.5/5.0',
    },
  ];

  const languages = [
    { name: 'Polski', level: 'Ojczysty' },
    { name: 'Angielski', level: 'Biegły (C1)' },
    { name: 'Niemiecki', level: 'Podstawowy (A2)' },
  ];

  const contact: Contact = {
    email: 'jan.kowalski@example.com',
    phone: '+48 123 456 789',
    location: 'Warszawa, Polska',
  };

  const socialLinks: SocialLinks = {
    linkedin: 'https://linkedin.com/in/jankowalski',
    github: 'https://github.com/jankowalski',
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      {/* Główny kontener CV */}
      <div className="bg-white rounded-none shadow-2xl max-w-6xl w-full overflow-hidden flex">
        
        {/* ===== LEWA KOLUMNA - CIEMNY PANEL ===== */}
        <div className="w-[320px] bg-[#1e3a5f] text-white p-10 flex flex-col">
          
          {/* Zdjęcie profilowe */}
          <div className="mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto">
              <img
                src={profileImage}
                alt="Zdjęcie profilowe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b-2 border-white/30 pb-2">
              Contact
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="break-all">{contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href={`mailto:${contact.email}`} className="hover:text-gray-300 transition-colors break-all">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{contact.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  linkedin.com/in/jankowalski
                </a>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b-2 border-white/30 pb-2">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="text-sm">
                  <div className="font-bold mb-1">{edu.period}</div>
                  <div className="font-semibold uppercase text-xs mb-1">{edu.school}</div>
                  <div className="text-white/90">{edu.degree}</div>
                  <div className="text-white/70 text-xs mt-1">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b-2 border-white/30 pb-2">
              Skills
            </h2>
            <ul className="space-y-2 text-sm">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LANGUAGES */}
          <div>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b-2 border-white/30 pb-2">
              Languages
            </h2>
            <ul className="space-y-2 text-sm">
              {languages.map((lang, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>{lang.name} ({lang.level})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== PRAWA KOLUMNA - JASNA TREŚĆ ===== */}
        <div className="flex-1 p-12 bg-gray-50">
          
          {/* Nagłówek z nazwiskiem */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-2">
              JAN <span className="font-light">KOWALSKI</span>
            </h1>
            <div className="h-1 w-20 bg-[#1e3a5f] mb-3"></div>
            <p className="text-xl text-gray-600 uppercase tracking-wide">Senior Frontend Developer</p>
          </div>

          {/* PROFILE */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4 border-b-2 border-gray-300 pb-2">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {bio}
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 uppercase mb-6 border-b-2 border-gray-300 pb-2">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1e3a5f]"></div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{exp.company}</h3>
                      <p className="text-gray-600 font-medium italic">{exp.position}</p>
                    </div>
                    <span className="text-gray-500 text-sm font-semibold whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-1 mt-3">
                    {exp.description.split('.').filter(Boolean).map((point, i) => (
                      <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-[#1e3a5f] mt-1.5">•</span>
                        <span>{point.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

