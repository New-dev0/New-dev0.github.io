import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { CodeIcon, RocketIcon, StarIcon } from '../components/SVGAssets';
import SkillVisualization from '../components/SkillVisualization';
import dynamic from 'next/dynamic';
import ShootingStarBackground from '../components/ShootingStarBackground';
import WavesAnimation from '../components/WavesAnimation';
import AnimatedBackground from '../components/AnimatedBackground';
import BombMarioAnimation from '../components/BombMarioAnimation';

const ReactTypingEffect = dynamic(() => import('react-typing-effect'), {
  ssr: false,
  loading: () => <span>Full Stack Developer</span>
});

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/New-dev0', icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deveshpal0/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Twitter', url: 'https://x.com/newdev0', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { name: 'Telegram', url: 'https://t.me/karboncopy', icon: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12 3.6C7.2 3.6 3.6 7.2 3.6 12c0 4.8 3.6 8.4 8.4 8.4 4.8 0 8.4-3.6 8.4-8.4 0-4.8-3.6-8.4-8.4-8.4zm3.6 11.4l-1.2-4.2-4.8 3 3.6-7.2 1.2 4.2 4.8-3-3.6 7.2z' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/newdev0', icon: 'M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.624.547 1.095 1.23 1.095.557 0 .938-.244 1.17-.717h1.675c-.41 1.215-1.444 1.907-2.845 1.907-1.787 0-3.007-1.225-3.007-2.845 0-1.593 1.23-2.832 2.975-2.832 1.728 0 2.947 1.239 2.947 2.818 0 .2-.02.39-.059.574h.273v-.005zm-3.358-1.229h1.934c-.068-.664-.537-1.106-1.201-1.106-.635 0-1.201.442-1.23 1.106h.497zm-2.344 3.822h-1.612v-4.872h1.612v4.872zm-2.463 0h-1.612v-4.872h1.612v4.872zm-2.462 0H2.983v-7.205h1.612v7.205zm19.407-12.977v9.803c0 2.096-1.7 3.798-3.797 3.798H5.789c-2.096 0-3.797-1.702-3.797-3.798V4.229c0-2.096 1.701-3.798 3.797-3.798h4.392v1.239c0 .909.732 1.641 1.641 1.641h3.347c.909 0 1.641-.732 1.641-1.641V.431h4.392c2.096 0 3.797 1.702 3.797 3.798z' },
];

const AvatarAnimation = () => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-10"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/69723581?v=4"
          alt="Devesh Pal"
          width={180}
          height={180}
          className="rounded-full border-4 border-primary shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

const ClientOnlyAvatarAnimation = dynamic(() => Promise.resolve(AvatarAnimation), {
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const skills = ['Python', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Docker'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-start to-background-end text-foreground overflow-hidden">
      <Head>
        <title>Devesh Pal - Full Stack Developer</title>
        <meta name="description" content="Devesh Pal is a Full Stack Developer specializing in AI, bots, and cutting-edge web technologies." />
        <meta name="keywords" content="Devesh Pal, Full Stack Developer, AI, Bots, Web Development" />
        <meta name="author" content="Devesh Pal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Devesh Pal - Full Stack Developer" />
        <meta property="og:description" content="Devesh Pal is a Full Stack Developer specializing in AI, bots, and cutting-edge web technologies." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/69723581?v=4" />
        <meta property="og:url" content="https://newdev0.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isClient && <AnimatedBackground />}
      <ShootingStarBackground />
      <WavesAnimation />
      <BombMarioAnimation />

      <motion.main
        className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isClient ? "visible" : "hidden"}
      >
        <motion.div 
          variants={itemVariants}
          className="absolute top-8 right-8 z-50"
        >
          <Link href="/projects" className="btn btn-primary flex items-center">
            <RocketIcon />
            <span className="ml-2">View Projects</span>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 animate-float">
          <ClientOnlyAvatarAnimation />
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-4 gradient-text">
          Devesh Pal
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-4xl mb-8 text-secondary">
          <ReactTypingEffect
            text={["Full Stack Developer", "AI Enthusiast", "Bot Creator"]}
            cursorRenderer={cursor => <h2>{cursor}</h2>}
            displayTextRenderer={(text, i) => {
              return (
                <h2 className="text-4xl">
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={i%2 === 0 ? { color: 'var(--primary)' } : { color: 'var(--secondary)' }}
                      >{char}</span>
                    );
                  })}
                </h2>
              );
            }}
          />
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl mb-12 max-w-2xl text-center text-foreground">
          Crafting innovative solutions with AI, bots, and cutting-edge web technologies.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-content-background px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-primary group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d={link.icon} />
              </svg>
              <span className="text-foreground group-hover:text-white">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.section variants={itemVariants} className="mb-12 w-full">
          <h3 className="text-3xl font-bold mb-6 text-accent flex items-center justify-center">
            <StarIcon />
            <span className="ml-2">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-content-background text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center">
                <CodeIcon />
                <span className="ml-2">{skill}</span>
              </span>
            ))}
          </div>
        </motion.section>
      </motion.main>

      <footer className="relative z-20 text-center text-foreground py-4">
        <p>© {new Date().getFullYear()} Devesh Pal. All rights reserved.</p>
      </footer>
    </div>
  );
}
