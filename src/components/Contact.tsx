import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "zans.litinskis@gmail.com",
      href: "mailto:zans.litinskis@gmail.com",
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "+447522065410",
      href: "tel:+447522065410",
    },
    {
      icon: <Github className="w-5 h-5 text-primary" />,
      label: "GitHub",
      value: "github.com/Magvin",
      href: "https://github.com/Magvin",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-primary" />,
      label: "LinkedIn",
      value: "linkedin.com/in/Jeanlitinskis",
      href: "https://linkedin.com/in/Jeanlitinskis",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-background/90"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or just want to say hello? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card overflow-hidden transition-transform duration-300 hover:translate-x-2">
                    <CardContent className="p-4 flex items-center">
                      <div className="mr-4 p-3 rounded-full bg-accent/10">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
