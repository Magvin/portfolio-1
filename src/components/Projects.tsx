
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FolderGit2 } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  achievement?: string;
  delay: number;
}

function ProjectCard({ title, description, technologies, achievement, delay }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="col-span-1"
    >
      <Card className="glass-card h-full overflow-hidden card-hover">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          {achievement && (
            <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <span className="text-sm font-medium text-primary">{achievement}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Complex analytics solution that increased company profit by 150%",
      technologies: ["React", "TypeScript", "D3.js", "Styled Components"],
      achievement: "Increased company profit by 150%"
    },
    {
      title: "Payment Integration System",
      description: "Secure payment processing system supporting cryptocurrency and traditional payment methods",
      technologies: ["React", "Stripe API", "Crypto APIs", "NodeJS"],
    },
    {
      title: "Innovative Web Browser",
      description: "Revolutionary approach to internet browsing that was a key feature in company acquisition",
      technologies: ["React", "WebRTC", "Custom Protocols", "Browser APIs"],
      achievement: "Contributed to $450M acquisition deal"
    },
    {
      title: "Pixel Streaming Application",
      description: "High-performance streaming application for real-time pixel data",
      technologies: ["WebGL", "ThreeJS", "React", "WebSockets"],
      achievement: "Led to record-breaking client deal"
    },
    {
      title: "Analytics Tool with UX Focus",
      description: "User-friendly analytics tool that dramatically improved client task completion time",
      technologies: ["React", "MobX", "D3.js", "UX Design"],
      achievement: "Reduced task time from 3 hours to 1 minute"
    },
    {
      title: "Vue to React Migration",
      description: "Led the migration of a complex application from Vue.js to React.js",
      technologies: ["Vue.js", "React.js", "Migration Strategy", "CI/CD"],
      achievement: "Improved long-term development delivery"
    },
    {
      title: "Accessible Media Platform",
      description: "Enhanced accessibility features for a major media corporation platform",
      technologies: ["React", "ARIA", "A11y Standards", "HTML5 Video"],
    },
    {
      title: "Price Strategy Service",
      description: "Automotive pricing service that replaced expensive third-party subscription",
      technologies: ["TypeScript", "Node.js", "Data Analysis", "Market APIs"],
      achievement: "Saved £120K in third-party subscription costs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <FolderGit2 className="w-8 h-8 text-primary mr-2" />
            <h2 className="section-title mb-0">Featured Projects</h2>
          </div>
          <p className="section-description">
            Highlighted projects from my professional career
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              achievement={project.achievement}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
