import React from "react";
import aboutMeImage from './assets/about_me.jpg';
import experienceImage from './assets/exp.jpg';
import skillsImage from './assets/skills.jpg'
import projectsImage from './assets/Project.jpg';
import profileImage from './assets/Arnold.jpg';

function App() {
  const [activeSection, setActiveSection] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentView, setCurrentView] = React.useState('splash');
  //const [selectedProject, setSelectedProject] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const sections = [
    {
      id: 1,
      title: "ABOUT ME",
      description: "Full Stack Developer with 5+ years of experience in building scalable web and mobile applications. Passionate about creating innovative solutions using modern technologies.",
      image: aboutMeImage,
      color: "rgb(186, 24, 27)"
    },
    {
      id: 2,
      title: "EXPERIENCE",
      description: "Depression 🤓🔥🤣 (2024 - Present)\nApp developer at Nibiaa Devices (Jan-Dec, 2023)",
      image: experienceImage,
      color: "rgb(28, 54, 152)"
    },
    {
      id: 3,
      title: "SKILLS",
      description: "React.js • Node.js • Python • MongoDB • Dart • Java \nFlutter • JavaScript • tailwindcss",
      image: skillsImage,
      color: "rgb(189, 66, 252)"
    },
    {
      id: 4,
      title: "PROJECTS",
      description: "Click to explore my featured projects:\n\n• Sentiment Analysis on Twitter\n • Netflix-Clone ",
      image: projectsImage,
      color: "rgb(0, 187, 84)"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis on Twitter",
      description: "Sentiment Analysis on Twitter using NLP, python, NLTK, SkLearn",
      technologies: ["NLP", "Python", "NLTK", "SkLearn"],
      image: "https://placehold.co/800x400/1a1a1a/666"
    },
    {
      id: 2,
      title: "Netflix-Clone",
      description: "Netflix Clone built using React.js, Node.js, and MongoDB",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      image: "https://placehold.co/800x400/"
    },
    
    // Add more projects as needed
  ];

  // At the top of your App component, add this constant
const CONTACT_EMAIL = "2013arnold@gmail.com"; // Replace with your actual email

// Then modify the handleSubmit function like this:
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Create mailto link with form data
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
    `Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio website`
  )}`;

  // Open default email client
  window.location.href = mailtoLink;
};

const SplashScreen = () => (
  <div className="h-screen bg-gray-900 flex items-center px-4 sm:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div className="order-2 sm:order-1 text-center sm:text-left">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto mb-6 sm:mb-0"
        />
      </div>
      <div className="space-y-4 sm:space-y-6 order-1 sm:order-2 text-center sm:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">Arnold</h1>
        <p className="text-lg sm:text-xl text-gray-400">Developer</p>
        <button
          onClick={() => setCurrentView('main')}
          className="px-6 sm:px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors flex items-center space-x-2 mx-auto sm:mx-0"
        >
          <span>Click Me</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="min-h-screen bg-black p-4 sm:p-8">
    <button
      onClick={() => setCurrentView('main')}
      className="mb-6 sm:mb-8 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors"
    >
      ← Back
    </button>
    <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-white block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-white block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-white block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );

  const ProjectDetails = () => (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <button
        onClick={() => setCurrentView('main')}
        className="mb-6 sm:mb-8 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors"
      >
        ← Back
      </button>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-white text-4xl font-bold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  if (currentView === 'splash') {
    return <SplashScreen />;
  }

  if (currentView === 'contact') {
    return <ContactForm />;
  }

  if (currentView === 'project') {
    return <ProjectDetails />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-black/90">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div
              className="text-xl sm:text-2xl font-bold cursor-pointer"
              onClick={() => setCurrentView('splash')}
            >
            Arnold
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:space-x-6">
           <button
              onClick={() => setCurrentView('contact')}
              className="px-4 sm:px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Me
            </button>
            <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Anrold-cd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
            
                  <a
                    href="https://linkedin.com/in/lourembam-arnold-singh-405490196"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
              </div>
            
          </div>
        </div>
      </nav>

      <div className="pt-20 sm:pt-24">
        {sections.map((section) => (
            <div
            key={section.id}
            className="relative w-full h-[60vh] sm:h-[70vh] transition-all duration-700 ease-in-out"
            style={{
              height: activeSection === section.id ? '75vh' : '60vh',
            }}
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
            >
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                transform: activeSection === section.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 sm:to-transparent z-10"
                style={{
                  opacity: activeSection === section.id ? 1 : 0.8,
                  transition: 'opacity 700ms ease-in-out',
                }}
              />
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
              </div>

              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
                <div className="max-w-full sm:max-w-2xl">
                  <h2
                    className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 transform transition-all duration-700"
                    style={{
                      color: activeSection === section.id ? section.color : 'white',
                      transform: activeSection === section.id ? 'translateY(0)' : 'translateY(20px)',
                      opacity: activeSection === section.id ? 1 : 0.7,
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-lg sm:text-xl transform transition-all duration-700 delay-100 whitespace-pre-line"
                    style={{
                      transform: activeSection === section.id ? 'translateY(0)' : 'translateY(20px)',
                      opacity: activeSection === section.id ? 1 : 0,
                    }}
                  >
                    {section.description}
                  </p>
                {section.title === "PROJECTS" && (
                  <button
                    onClick={() => {
                      setCurrentView('project');  // Remove setSelectedProject since we're showing all projects
                    }}
                    className="mt-8 px-8 py-3 rounded-full transform transition-all duration-700 delay-200"
                    style={{
                      backgroundColor: section.color,
                      transform: activeSection === section.id ? 'translateY(0)' : 'translateY(20px)',
                      opacity: activeSection === section.id ? 1 : 0,
                    }}
                  >
                    Explore →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;