import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Azure Entra ID Governance",
    excerpt: "A deep dive into Access Reviews, PIM, and Entitlement Management to secure your cloud identity footprint.",
    category: "Tutorial",
    date: "April 12, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog1/800/400"
  },
  {
    id: 2,
    title: "The Future of Hybrid Active Directory",
    excerpt: "Exploring the roadmap for MS AD and how to prepare for a cloud-first identity strategy without losing legacy support.",
    category: "News",
    date: "April 05, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/blog2/800/400"
  },
  {
    id: 3,
    title: "Troubleshooting Azure VPN Gateway Latency",
    excerpt: "Common pitfalls and performance tuning tips for site-to-site VPNs in complex hub-and-spoke architectures.",
    category: "Tech Assistance",
    date: "March 28, 2024",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/blog3/800/400"
  }
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">Blog</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Insights, tutorials, and technical deep-dives into the world of DevOps and Cloud Identity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-zinc-200 bg-white transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 w-full md:h-auto md:w-1/3">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="rounded-full">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-bold text-zinc-900 group-hover:text-zinc-500 transition-colors dark:text-zinc-100">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 p-0">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="mt-6 flex items-center text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
