"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, CheckCircle2, X } from "lucide-react";

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
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex gap-2 p-2 bg-card border border-border rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-base"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="px-8 gap-2 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Joining...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Join Waitlist
                  <Sparkles className="w-4 h-4" />
                </span>
              )}
            </Button>
          </div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-4 animate-in fade-in duration-700 delay-300">
          Join early adopters getting exclusive access and special pricing 🚀
        </p>
      </form>

      {/* Snackbar Notification */}
      {showSnackbar && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex items-center gap-3 px-6 py-4 bg-card border border-green-500/20 rounded-2xl shadow-2xl backdrop-blur-xl">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div className="flex flex-col">
              <p className="font-semibold text-sm">You&apos;re on the list! 🎉</p>
              <p className="text-xs text-muted-foreground">We&apos;ll notify you when we launch</p>
            </div>
            <button
              onClick={() => setShowSnackbar(false)}
              className="ml-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
