import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, Phone, MapPin, Download, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data here
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">Get in Touch</h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Have a project in mind or just want to chat about DevOps? I'm always open to new opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Info & Resume */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <Mail className="mb-4 h-8 w-8 text-zinc-500" />
                <h3 className="font-bold">Email</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">chrisb2812@gmail.com</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <Phone className="mb-4 h-8 w-8 text-zinc-500" />
                <h3 className="font-bold">Phone</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">+44 7000 000000</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Resume / CV
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                Interested in my professional background? Download my latest resume in PDF format.
              </p>
              <Button className="w-full rounded-full" variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <MapPin className="h-5 w-5" />
            <span>London, United Kingdom (Available for Remote)</span>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <CardContent className="p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="link" 
                  className="mt-6"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="min-h-37.5" 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
