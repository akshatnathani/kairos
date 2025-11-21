"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import ThemeBtn from "@/components/theme-btn";
import { Sparkles, Zap, Target, TrendingUp, FileText, Brain, Github, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-30" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/kairos-logo.png"
                alt="Kairos Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            {/* <span className="text-lg font-bold tracking-tight">Kairos</span> */}
          </div>
          {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav> */}
          <div className="flex items-center gap-4">
            <ThemeBtn />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v1.0 Public Beta Coming Soon
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              Craft the perfect
              <br />
              <span className="text-primary">resume with AI.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Kairos intelligently optimizes your resume for every job application.
              Beat the ATS, impress recruiters, and land your dream role.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8">
              <WaitlistForm />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-6 mb-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
            <p className="text-muted-foreground text-lg">Powerful features to help you stand out.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Brain className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI-Powered Optimization</h3>
                <p className="text-muted-foreground max-w-md">
                  Our advanced AI analyzes your resume against job descriptions to suggest impactful improvements, keywords, and formatting changes that get you noticed.
                </p>
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="row-span-2 p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-colors group relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-48 h-48" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">ATS Scoring</h3>
                <p className="text-muted-foreground mb-8">
                  Get a real-time ATS score for every version of your resume. Know exactly where you stand before you apply.
                </p>
                <div className="mt-auto bg-background/50 rounded-xl p-4 border border-border/50 backdrop-blur-sm">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium">ATS Score</span>
                    <span className="text-2xl font-bold text-primary">98/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub Sync</h3>
              <p className="text-muted-foreground text-sm">
                Automatically import your projects and contributions directly from GitHub.
              </p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">LaTeX Export</h3>
              <p className="text-muted-foreground text-sm">
                Export perfectly formatted PDFs using our professional LaTeX templates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6">
          <div className="rounded-3xl bg-primary/5 border border-primary/10 p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to upgrade your career?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the waitlist today and get early access to the future of resume building.
              </p>
              <div className="flex justify-center">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="border-t border-border/40 py-12 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center overflow-hidden">
              <Image
                src="/kairos-logo.png"
                alt="Kairos Logo"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold">Kairos</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Kairos Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}