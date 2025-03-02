
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';

interface SkillItemProps {
  title: string;
  items: string[];
  delay: number;
}

function SkillItem({ title, items, delay }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="col-span-1"
    >
      <Card className="glass-card h-full card-hover">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <span key={index} className="skill-badge">
                {item}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      items: ["JavaScript", "TypeScript", "React", "NextJS", "React Hooks", "MobX", "Recoil", "Styled Components"]
    },
    {
      title: "Backend",
      items: ["NodeJS", "Express.js", "Serverless", "REST API", "GraphQL"]
    },
    {
      title: "Styling",
      items: ["CSS", "SASS/SCSS", "Tailwind CSS", "CSS-in-JS", "Responsive Design"]
    },
    {
      title: "Build Tools",
      items: ["Webpack", "Vite", "Gulp", "Babel", "ESLint"]
    },
    {
      title: "Testing",
      items: ["Jest", "Enzyme", "React Testing Library", "TDD", "E2E Testing"]
    },
    {
      title: "Performance",
      items: ["Web Vitals", "Lighthouse", "Optimization Techniques", "Lazy Loading", "Code Splitting"]
    },
    {
      title: "Other Technologies",
      items: ["AWS", "ThreeJS", "Jenkins", "JWT", "OAuth", "Git", "CI/CD"]
    },
    {
      title: "Methodologies",
      items: ["Agile", "Scrum", "Kanban", "Code Reviews", "Pair Programming"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Code className="w-8 h-8 text-primary mr-2" />
            <h2 className="section-title mb-0">Skills & Expertise</h2>
          </div>
          <p className="section-description">
            A comprehensive collection of my technical skills and proficiencies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillItem 
              key={index}
              title={category.title}
              items={category.items}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
