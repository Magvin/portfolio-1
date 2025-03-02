
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            A passionate Frontend Engineer with a proven track record of building innovative web applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Professional Profile</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Senior Frontend Engineer specializing in building exceptional digital experiences. With a focus on React and TypeScript, I create performant, accessible, and beautiful web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My expertise includes building complex dashboards, implementing payment systems, and developing streaming applications. I have a strong commitment to code quality, performance optimization, and creating intuitive user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working remotely at Infinite Reality, I enjoy tackling challenging projects that push the boundaries of what's possible on the web.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-primary">Languages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-24">English</span>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-full rounded-full w-[95%]"></div>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-24">Latvian</span>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-full rounded-full w-[100%]"></div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-primary">Education</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium">Self-taught Developer</p>
                    <p className="text-sm">Continuous learning through online courses, documentation, and hands-on project experience</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="sm:col-span-2"
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-primary">Special Achievement</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Built an application that was part of a company acquisition valued at 450 million dollars.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
