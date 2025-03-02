
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { BriefcaseIcon } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location: string;
  delay: number;
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  location,
  delay
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="timeline-item"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center space-x-2 md:text-right mt-1 md:mt-0">
          <Badge variant="outline" className="font-normal text-xs">
            {period}
          </Badge>
          <Badge variant="secondary" className="font-normal text-xs">
            {location}
          </Badge>
        </div>
      </div>
      
      <h4 className="text-lg text-primary mb-3">{company}</h4>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <h5 className="text-base font-semibold mb-2">Key Achievements:</h5>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="pl-1">{achievement}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <span key={index} className="skill-badge">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      title: "Staff Frontend Engineer",
      company: "Infinite Reality, Inc",
      period: "07/2022 - Present",
      location: "Fully remote",
      description: "Infinite Reality™ is a pioneering company determined to improve the way we all connect on the world wide web.",
      achievements: [
        "Built an Analytics Dashboard, which increased the company's profit by 150%.",
        "Implemented payment integration including both Cryptocurrencies payments and Stripe.",
        "Created a new way how people browse internet, later on this key feature helped company to be sold for 450 million dollars.",
        "Built a Pixel Streaming Application which led to signed a record breaking deal in companies history."
      ],
      technologies: ["NextJS", "React", "Recoil", "Styled Components", "ThreeJS", "AWS", "NodeJS", "Serverless"],
    },
    {
      title: "Senior Frontend Engineer",
      company: "Once For All",
      period: "02/2021 - 07/2022",
      location: "Remote",
      description: "Constructionline is RegTech company in construction/gas industry.",
      achievements: [
        "In 1 month, successfully started the takeover from contractors and upscaled APP's (features) to certain industry standards.",
        "Built an analytics tool with a user-friendly interface, allowing clients to complete a task within a minute versus 3 hours before, generating a new revenue stream.",
      ],
      technologies: ["React", "NextJS", "MobX", "CSS/SASS", "Restful API", "Webpack", "TDD", "Unit tests / E2E"],
    },
    {
      title: "Software Engineer",
      company: "Indeed.com",
      period: "09/2020 - 03/2021",
      location: "Remote",
      description: "Indeed.com is the biggest job advertisement board in the world.",
      achievements: [
        "Led app migration from Vue.js to React.js, which improved development delivery in the long run.",
        "Optimized accessibility to match A11y standards.",
        "Developed a flow chart-based dashboard that helped customers with day-to-day tasks on our platform."
      ],
      technologies: ["Vue.js", "React.js", "Node.js", "PHP", "Express.js", "Jenkins", "Jest", "Enzyme", "React Testing Library", "OAuth", "GraphQL"],
    },
    {
      title: "JavaScript / React Developer",
      company: "Accenture UK (Channel4 project)",
      period: "01/2020 - 09/2020",
      location: "Remote",
      description: "Worked on Media Corporation products.",
      achievements: [
        "Improved accessibility for Media Corporation products.",
        "Optimized website load time.",
        "Increased performance for HTML5 video stream player."
      ],
      technologies: ["React", "React Hooks", "NodeJS", "ExpressJS", "Jenkins", "Jest", "Enzyme", "React Testing Library", "SCSS/CSS", "GraphQL"],
    },
    {
      title: "TypeScript Developer",
      company: "Vertu Motors",
      period: "03/2016 - 02/2020",
      location: "Newcastle",
      description: "Automotive dealership group.",
      achievements: [
        "Optimized website for web speed, reducing load time from 6.4 seconds to 1.3 seconds.",
        "Migrated legacy applications to a newer stack, which helped to hire stronger candidates with more knowledge.",
        "Built a service to bring accurate price strategy on cars, which replaced a £120k subscription to a third party."
      ],
      technologies: ["TypeScript", "Angular", "React", "Sass", "HTML", "NodeJS", "MongoDB", "Electron", "Puppeteer", "Gulp"],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <BriefcaseIcon className="w-8 h-8 text-primary mr-2" />
            <h2 className="section-title mb-0">Work Experience</h2>
          </div>
          <p className="section-description">
            My professional journey as a senior developer
          </p>
        </motion.div>
        
        <div className="mt-12 ml-4">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              achievements={exp.achievements}
              technologies={exp.technologies}
              location={exp.location}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
