
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/90 to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0,rgba(56,189,248,0)_50%)]" />
      </div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-primary font-medium mb-3"
        >
          Hello, I'm
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4"
        >
          Zans Litinskis
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-display text-muted-foreground mb-8"
        >
          Senior Frontend Engineer
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-4 mb-12"
        >
          <a href="https://github.com/Magvin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/Jeanlitinskis" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:zans.litinskis@gmail.com" aria-label="Email">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10"
        >
          <a href="#about" aria-label="Scroll down">
            <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
              <ArrowDown className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
