"use client";

import { useEffect, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ArrowRight, PlayCircle, Trophy, Users, Shield, Zap, Target, Activity, Lock, Globe, Signal, Cpu, Map } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const tl = gsap.timeline();
    tl.fromTo(heroTextRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 });

    return () => lenis.destroy();
  }, []);

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden bg-[#050505] text-white">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden border-b border-white/5 bg-black">
        
        {/* Background Video & Cinematic Readability System */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            style={{ willChange: 'transform' }}
          >
            <source src="/stadium-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Premium Multi-Layer Overlay for Perfect Readability */}
          <div 
            className="absolute inset-0 z-10" 
            style={{
              background: `
                linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.5) 100%),
                radial-gradient(circle at center, rgba(0,0,0,0.0), rgba(0,0,0,0.3))
              `
            }}
          />
        </div>
        
        {/* Main Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            y, 
            opacity,
            transform: 'translate3d(0,0,0)',
            willChange: 'transform, opacity, filter'
          }}
          className="relative z-20 flex flex-col items-center text-center w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl mx-auto mt-12 p-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-black/80 mb-8 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Trophy className="w-3.5 h-3.5 text-[#F6E27A] group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mt-[1px]">Official FIFA 2026 Platform</span>
            
            {/* Live Indicator Section */}
            <div className="flex items-center gap-2 pl-3 border-l border-white/20 ml-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{ animationDuration: '4s' }}></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-green-400 uppercase mt-[1px]">System Live</span>
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <div className="mb-6 flex justify-center">
            <img src="/logo.png" alt="CLiNt Arena Logo" className="w-32 md:w-48 h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            ref={heroTextRef} 
            className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-[900] tracking-[-0.06em] leading-[0.95] mb-8 max-w-full md:max-w-[80%] lg:max-w-[65%] mx-auto text-white"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 10px 40px rgba(0,0,0,0.6)'
            }}
          >
            <span className="block mb-1">The Stadium,</span>
            <span className="text-[#F6E27A] block pb-2">
              Intelligently<br />Connected.
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/90 font-medium tracking-[-0.01em] max-w-[90%] md:max-w-[55%] lg:max-w-[45%] mx-auto mb-12 leading-[1.6]"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            CLiNt Arena is the AI-native neural net powering the 2026 FIFA World Cup. Anticipate crowds, secure perimeters, and deliver ultimate fan experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <Link 
              href="/auth/login" 
              className="group relative px-8 py-3.5 bg-white text-black rounded-full font-bold text-[15px] hover:scale-105 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Initialize Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="group px-8 py-3.5 rounded-full font-semibold text-[15px] text-white border border-white/30 bg-black/60 hover:bg-black/80 backdrop-blur-md transition-all duration-500 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] w-full sm:w-auto justify-center"
            >
              View Capabilities
              <PlayCircle className="w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Abstract Data Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 border-dashed rounded-full pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
      </section>

      {/* 2. Premium Features Grid */}
      <section className="relative py-40 px-6 max-w-7xl mx-auto z-20">
        
        {/* Safe Background Image inside the Section */}
        <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: 'url(/soccer.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">The CLiNt Arena Engine</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">Powered by a proprietary neural network, CLiNt Arena processes 2.4B data points per second to anticipate issues before they escalate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<Target className="w-6 h-6 text-red-400" />}
            title="Spatial Crowd Analytics"
            description="Predict congestion before it happens using thermal computer vision and predictive density modeling across all stadium zones."
            bgImage="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&q=80&w=800"
          />
          <FeatureCard 
            icon={<Signal className="w-6 h-6 text-[#D4AF37]" />}
            title="AR Smart Navigation"
            description="Turn-by-turn augmented reality routing to seats, food courts, and emergency exits, minimizing fan transit time by 40%."
            bgImage="https://images.unsplash.com/photo-1574629810360-7efbb491a615?auto=format&fit=crop&q=80&w=800"
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-green-400" />}
            title="Autonomous Security Ops"
            description="Instant facial anomaly detection, unattended baggage tracking, and automated incident triaging dispatched to ground staff."
            bgImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
          />
          <FeatureCard 
            icon={<Cpu className="w-6 h-6 text-blue-400" />}
            title="Generative AI Co-pilot"
            description="Natural language queries for live stadium operations. Ask 'Where is the medical team closest to Section 402?' for instant results."
            bgImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>

      {/* 3. Ultimate Dashboard Reveal */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] z-0" />
        
        <div className="text-center mb-20 z-10 relative">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/30">
            Command Center
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">Global scale intelligence. Access real-time telemetrics from all 16 World Cup stadiums instantly.</p>
        </div>

        {/* SOC Dashboard Mockup */}
        <div className="w-full max-w-7xl relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-[#D4AF37]/30 to-blue-500/30 blur-3xl opacity-30" />
          
          <div className="relative aspect-[16/10] lg:aspect-[21/9] bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col">
             
             {/* Header */}
             <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0f0f0f]">
               <div className="flex items-center gap-2">
                 <Globe className="w-4 h-4 text-white/40" />
                 <span className="text-xs font-mono text-white/40 tracking-wider">CLiNt Arena // GLOBAL SECURITY SOC</span>
               </div>
               <div className="flex items-center gap-4">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-mono text-white/50">LIVE</span>
               </div>
             </div>
             
             {/* Grid Content */}
             <div className="flex-1 p-6 grid grid-cols-12 gap-6 bg-[#050505]">
                
                {/* Left Panel: Metrics */}
                <div className="col-span-12 md:col-span-3 space-y-4">
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-4">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-[10px] text-green-400 font-mono">+12.4%</span>
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Global Attendance</div>
                    <div className="text-4xl font-light font-mono text-white tracking-tight">1,204,992</div>
                  </div>
                  
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-4">
                      <Lock className="w-5 h-5 text-red-500" />
                      <span className="text-[10px] text-red-500 font-mono">HIGH</span>
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Threat Level</div>
                    <div className="text-4xl font-light font-mono text-red-500 tracking-tight">DEFCON 4</div>
                  </div>

                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-4">
                      <Activity className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-[10px] text-[#D4AF37] font-mono">99.9%</span>
                    </div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Network Health</div>
                    <div className="text-4xl font-light font-mono text-white tracking-tight">OPTIMAL</div>
                  </div>
                </div>

                {/* Center Panel: Map/Radar */}
                <div className="col-span-12 md:col-span-6 rounded-xl border border-white/5 bg-[#080808] relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_60%)]" />
                  
                  {/* Fake Radar Sweep */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 border border-green-500/20 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 border border-green-500/10 rounded-full scale-75" />
                    <div className="absolute inset-0 border border-green-500/10 rounded-full scale-50" />
                    <div className="absolute inset-0 border border-green-500/10 rounded-full scale-25" />
                    <div className="absolute inset-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent to-green-500/50 origin-left animate-[spin_4s_linear_infinite]" />
                    <Map className="w-8 h-8 text-green-500/50 absolute" />
                  </div>

                  {/* Overlay Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Link href="/auth/login">
                      <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 font-semibold rounded-full shadow-[0_4px_20px_rgba(220,38,38,0.4)] transition-all">Decrypt Feed</button>
                    </Link>
                  </div>
                </div>

                {/* Right Panel: Logs */}
                <div className="col-span-12 md:col-span-3 rounded-xl border border-white/5 bg-[#080808] p-4 flex flex-col relative overflow-hidden">
                   <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <Cpu className="w-4 h-4" /> System Logs
                   </div>
                   <div className="flex-1 space-y-3 font-mono text-[10px] overflow-hidden opacity-70">
                      <div className="text-white"><span className="text-blue-400">[SYS]</span> Handshake established with MetLife DB.</div>
                      <div className="text-white"><span className="text-green-400">[AI]</span> Crowd density normalized at Gate C.</div>
                      <div className="text-red-400"><span className="text-red-500">[WARN]</span> Unattended bag detected: Zone 4.</div>
                      <div className="text-white"><span className="text-[#D4AF37]">[NET]</span> Scaling compute nodes to handle traffic.</div>
                      <div className="text-white"><span className="text-blue-400">[SYS]</span> Drone feed 04 authenticated.</div>
                      <div className="text-white"><span className="text-blue-400">[SYS]</span> Updating perimeter locks.</div>
                      <div className="text-white"><span className="text-green-400">[AI]</span> Facial recognition match: VIP Entrance.</div>
                      <div className="text-red-400"><span className="text-red-500">[WARN]</span> Temperature spike in Server Rack 9.</div>
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                </div>

             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description, bgImage }: { icon: React.ReactNode, title: string, description: string, bgImage: string }) {
  return (
    <div className="group relative h-80 rounded-3xl overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-500">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700">
        <img src={bgImage} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      <div className="relative z-20 h-full p-8 flex flex-col justify-end">
        <div className="mb-4 bg-white/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center border border-white/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{title}</h3>
        <p className="text-white/60 leading-relaxed text-sm font-light max-w-sm">{description}</p>
      </div>
    </div>
  );
}
