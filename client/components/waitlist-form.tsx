"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, CheckCircle2, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setEmail("");
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 5000);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500" />
          <div className="relative flex items-center p-1.5 bg-background border border-border/50 rounded-full shadow-xl backdrop-blur-xl">
            <div className="flex-1 relative flex items-center pl-4">
              <Mail className="w-5 h-5 text-muted-foreground/50 mr-3" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-base placeholder:text-muted-foreground/50 p-0"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                />
              ) : (
                <motion.span
                  className="flex items-center gap-2 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              )}
            </Button>
          </div>
        </div>
        <motion.p
          className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Join 2,000+ others waiting for access
        </motion.p>
      </motion.form>

      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-background/80 border border-primary/20 rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-foreground">You&apos;re on the list!</p>
                <p className="text-xs text-muted-foreground">We&apos;ll notify you when we launch.</p>
              </div>
              <button
                onClick={() => setShowSnackbar(false)}
                className="ml-4 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
