import { useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

// Define SVG components inline if they're not imported from SVGAssets
const StarIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ListIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const projects = [
  { 
    id: 1, 
    name: "EmojiBee", 
    description: "AI-powered emoji generator for images", 
    tech: ["Python", "BLIP", "GPT-3"],
    github: "https://github.com/New-dev0/EmojiBee"
  },
  { 
    id: 2, 
    name: "SpotifyIG", 
    description: "Automate Spotify song sharing to Instagram stories", 
    tech: ["JavaScript", "Spotify API", "Instagram API"],
    github: "https://github.com/New-dev0/SpotifyIG"
  },
  { 
    id: 3, 
    name: "TeleCloudBot", 
    description: "Switch Mini-App for Telegram file streaming", 
    tech: ["Python", "Telegram API"],
    github: "https://github.com/New-dev0/TeleCloudBot"
  },
  { 
    id: 4, 
    name: "switch-ts", 
    description: "TypeScript client library for Switch platform bots and apps", 
    tech: ["TypeScript", "Node.js"],
    github: "https://github.com/New-dev0/switch-ts"
  },
  { 
    id: 5, 
    name: "TgTwitterStreamer", 
    description: "Continuous Twitter to Telegram Integration", 
    tech: ["Python", "Twitter API", "Telegram API"],
    github: "https://github.com/New-dev0/TgTwitterStreamer"
  },
  { 
    id: 6, 
    name: "Bing-ChatBot", 
    description: "Bing Chat Bot on Telegram", 
    tech: ["Python", "Bing API", "Telegram API"],
    github: "https://github.com/New-dev0/Bing-ChatBot"
  },
  { 
    id: 7, 
    name: "Template-Generator", 
    description: "Create attractive templates", 
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/New-dev0/Template-Generator"
  },
  { 
    id: 8, 
    name: "Ultroid", 
    description: "Advanced Multi-Featured Telegram UserBot", 
    tech: ["Python", "Telethon"],
    github: "https://github.com/TeamUltroid/Ultroid"
  }
];

const ProjectCard = ({ project, isGridView }) => {
  return (
    <motion.div
      layout
      className={`card hover:shadow-primary/20 ${isGridView ? 'h-full' : 'flex items-center'}`}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={isGridView ? '' : 'flex-1'}>
        <h4 className="text-xl font-bold mb-2 text-primary">{project.name}</h4>
        <p className="text-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-primary bg-opacity-20 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-primary hover:text-secondary transition-colors duration-300 inline-flex items-center"
      >
        <CodeIcon className="mr-2" /> View on GitHub
      </a>
    </motion.div>
  );
};

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isGridView, setIsGridView] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filterProjects = useCallback((filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tech.includes(filter)));
    }
  }, []);

  const handleSearch = useCallback((e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = projects.filter(project => 
      project.name.toLowerCase().includes(term) || 
      project.description.toLowerCase().includes(term) ||
      project.tech.some(tech => tech.toLowerCase().includes(term))
    );
    setFilteredProjects(filtered);
  }, []);

  const allTechnologies = [...new Set(projects.flatMap(project => project.tech))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-start to-background-end text-foreground overflow-hidden">
      <Head>
        <title>Projects - Devesh Pal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBackground />

      <main className="relative z-30 flex flex-col items-center justify-center min-h-screen p-5 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">My Projects</h1>

        <div className="w-full mb-8 flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <SearchIcon className="text-primary mr-2" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-content-background text-foreground px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsGridView(true)}
              className={`p-2 rounded-full ${isGridView ? 'bg-primary text-white' : 'text-primary'}`}
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`p-2 rounded-full ${!isGridView ? 'bg-primary text-white' : 'text-primary'}`}
            >
              <ListIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => filterProjects('All')}
            className={`px-4 py-2 rounded-full ${activeFilter === 'All' ? 'bg-primary text-white' : 'bg-content-background text-foreground'}`}
          >
            All
          </button>
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => filterProjects(tech)}
              className={`px-4 py-2 rounded-full ${activeFilter === tech ? 'bg-primary text-white' : 'bg-content-background text-foreground'}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <motion.div 
            className={`w-full mb-12 ${isGridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}
            layout
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isGridView={isGridView} />
            ))}
          </motion.div>
        </AnimatePresence>

        <Link href="/" passHref>
          <motion.a
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RocketIcon className="mr-2" /> Back to Home
          </motion.a>
        </Link>
      </main>

      <footer className="relative z-30 text-center text-foreground py-4">
        <p>© {new Date().getFullYear()} Devesh Pal. All rights reserved.</p>
      </footer>
    </div>
  );
}
