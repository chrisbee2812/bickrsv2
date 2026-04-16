import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100">
              CHRIS B. &copy; {new Date().getFullYear()}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              DevOps Engineer | Azure | Entra ID | MS AD
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:chrisb2812@gmail.com" className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
