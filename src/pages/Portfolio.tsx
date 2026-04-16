import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github, Gamepad2, Globe } from "lucide-react";

const projects = [
  {
    title: "Azure Governance Framework",
    description: "A comprehensive Terraform-based framework for deploying Azure Landing Zones with built-in policy enforcement and cost management.",
    tags: ["Terraform", "Azure", "Bicep", "DevOps"],
    type: "Web",
    image: "https://picsum.photos/seed/azure/800/450",
    link: "#",
    github: "#"
  },
  {
    title: "Entra ID Identity Guard",
    description: "Automated security auditing tool for Entra ID (formerly Azure AD) to detect misconfigurations and privileged account sprawl.",
    tags: ["PowerShell", "Azure Functions", "Entra ID"],
    type: "Web",
    image: "https://picsum.photos/seed/security/800/450",
    link: "#",
    github: "#"
  },
  {
    title: "Cloud Command: The Game",
    description: "A browser-based strategy game where you manage a virtual data center, balancing load, security, and costs.",
    tags: ["React", "Canvas", "GameDev"],
    type: "Game",
    image: "https://picsum.photos/seed/game/800/450",
    link: "#",
    github: "#"
  },
  {
    title: "Hybrid AD Sync Monitor",
    description: "Real-time monitoring dashboard for Azure AD Connect sync health with automated alerting via Microsoft Teams.",
    tags: ["Python", "Azure Monitor", "MS AD"],
    type: "Web",
    image: "https://picsum.photos/seed/monitor/800/450",
    link: "#",
    github: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">Portfolio</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A collection of infrastructure projects, automation tools, and experimental games I've built.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col gap-6"
          >
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm dark:bg-zinc-900/90">
                  {project.type === "Game" ? <Gamepad2 className="mr-1 h-3 w-3" /> : <Globe className="mr-1 h-3 w-3" />}
                  {project.type}
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={project.link} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="rounded-full font-mono text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
