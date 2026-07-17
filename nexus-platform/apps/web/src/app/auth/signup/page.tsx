"use client";

import { useState } from "react";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] mix-blend-screen opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel max-w-md w-full p-10 rounded-3xl border border-white/10 relative overflow-hidden bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">Request Access</h1>
          <p className="text-white/40 text-sm">Apply for clearance to the CLiNt Arena SOC.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 pl-1 tracking-wide uppercase text-[10px]">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm text-white placeholder:text-white/20 shadow-inner"
                placeholder="John Doe"
                maxLength={50}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 pl-1 tracking-wide uppercase text-[10px]">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm text-white placeholder:text-white/20 shadow-inner"
                placeholder="director@fifa.com"
                maxLength={50}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 pl-1 tracking-wide uppercase text-[10px]">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all text-sm text-white placeholder:text-white/20 shadow-inner"
                placeholder="••••••••"
                maxLength={32}
                minLength={8}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full relative group overflow-hidden bg-white hover:bg-white/90 text-black h-14 rounded-2xl text-md font-bold mt-8 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            {isSubmitting ? "Requesting..." : "Submit Application"} <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-sm text-white/40 mt-8">
          Already have clearance? <Link href="/auth/login" className="text-white hover:text-red-400 transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
