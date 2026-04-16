import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Cloud, Shield, Server, Code, Database, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Infrastructure",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["Azure (ARM, Bicep)", "Terraform", "AWS (EC2, S3, VPC)", "Google Cloud Platform", "Kubernetes", "Docker"]
  },
  {
    title: "Identity & Access",
    icon: <Shield className="h-6 w-6" />,
    skills: ["Entra ID (Azure AD)", "MS Active Directory", "OAuth 2.0 / OIDC", "SAML 2.0", "Zero Trust Security", "PIM / PAM"]
  },
  {
    title: "DevOps & Automation",
    icon: <Server className="h-6 w-6" />,
    skills: ["Azure DevOps", "GitHub Actions", "Jenkins", "Ansible", "PowerShell Scripting", "Python Automation"]
  },
  {
    title: "Monitoring & Logging",
    icon: <Database className="h-6 w-6" />,
    skills: ["Azure Monitor", "Log Analytics", "Grafana", "Prometheus", "ELK Stack", "Application Insights"]
  },
  {
    title: "Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["TypeScript / React", "Node.js", "C# / .NET", "RESTful APIs", "SQL / NoSQL", "Git Flow"]
  },
  {
    title: "Operating Systems",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Windows Server", "Linux (Ubuntu, RHEL)", "Bash Scripting", "System Hardening", "Virtualization (Hyper-V, VMware)"]
  }
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">Skills & Expertise</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          A comprehensive overview of my technical stack and professional capabilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="rounded-md font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
