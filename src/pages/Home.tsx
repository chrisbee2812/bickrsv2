import { motion } from "motion/react";
import { ArrowRight, Cloud, Shield, Server, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-10">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-100">
            Architecting <span className="text-zinc-500">Resilient</span> Infrastructure.
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            DevOps Engineer specializing in Microsoft Azure, Entra ID, and Active Directory. 
            Bridging the gap between development and operations with secure, scalable cloud solutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features/Expertise Highlights */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                <Cloud className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Azure Cloud</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Expertise in Azure Resource Manager, Bicep, and Terraform for automated infrastructure provisioning.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                <Shield className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Identity & Security</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Deep knowledge of Entra ID (Azure AD), MS Active Directory, and Zero Trust security models.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-800">
                <Server className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">CI/CD Pipelines</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Implementing robust deployment workflows using Azure DevOps, GitHub Actions, and Jenkins.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">A glimpse into my recent technical endeavors.</p>
          </div>
          <Link to="/portfolio" className="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100">
            View all projects
          </Link>
        </div>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src={`https://picsum.photos/seed/project${i}/800/450`} 
                  alt={`Project ${i}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Enterprise Azure Migration</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  Migrating legacy on-prem Active Directory to a hybrid Entra ID environment with automated governance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
