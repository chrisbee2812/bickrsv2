import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
            <Terminal className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
            <span>DEV_OPS</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100",
                  location.pathname === item.path
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 dark:text-zinc-400"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-5.25 left-0 h-0.5 w-full bg-zinc-900 dark:bg-zinc-100"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-b border-zinc-200 bg-white px-4 pt-2 pb-6 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 dark:text-zinc-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
