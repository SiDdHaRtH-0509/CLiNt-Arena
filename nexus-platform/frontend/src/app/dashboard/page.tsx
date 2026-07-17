"use client";

import { useEffect, useState, useRef } from "react";
import { Activity, Users, Shield, Map as MapIcon, LogOut, Search, Bell, Download, CheckCircle2, AlertTriangle, Zap, Server } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isExporting, setIsExporting] = useState(false);
  const [exportDone, setExportDone] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportDone(true);
      setTimeout(() => setExportDone(false), 2000);
    }, 1500);
  };

  const tabs = [
    { id: "Overview", icon: <Activity className="w-5 h-5" />, label: "Overview" },
    { id: "Stadium Maps", icon: <MapIcon className="w-5 h-5" />, label: "Stadium Maps" },
    { id: "Crowd Dynamics", icon: <Users className="w-5 h-5" />, label: "Crowd Dynamics" },
    { id: "Security Ops", icon: <Shield className="w-5 h-5" />, label: "Security Ops" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden font-sans selection:bg-white/20">
      {/* Background Ambient Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px] mix-blend-screen opacity-50" />
      </div>

      {/* Sidebar */}
      <aside className="relative z-20 w-64 border-r border-white/10 bg-black/40 backdrop-blur-3xl flex flex-col shadow-[10px_0_50px_rgba(0,0,0,0.5)]">
        <div className="h-20 flex items-center px-6 border-b border-white/10 gap-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
          <span className="font-bold tracking-[0.2em] uppercase text-xs text-white/90">CLiNt Arena SOC</span>
        </div>
        
        <nav className="flex-1 py-8 px-4 flex flex-col gap-2 relative">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center px-4 py-3 text-sm font-medium transition-colors w-full rounded-xl z-10 ${
                activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent border-l-2 border-red-500 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="mr-3">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-6">
          <button 
            onClick={() => router.push("/")}
            className="w-full flex items-center px-4 py-3 text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5 mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10">
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-50">
          <div className="flex items-center w-[400px] bg-white/[0.03] rounded-2xl px-5 py-3 border border-white/10 focus-within:border-white/30 focus-within:bg-white/[0.05] transition-all shadow-inner">
            <Search className="w-4 h-4 text-white/40 mr-3" />
            <input type="text" placeholder="Search stadium zones, agents, logs..." className="bg-transparent text-sm focus:outline-none w-full text-white/90 placeholder:text-white/30" />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative group p-2 rounded-full hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden md:block">
                <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Admin Controller</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Level 5 Clearance</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 via-orange-500 to-yellow-500 border-2 border-white/20 shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-shadow" />
            </div>
          </div>
        </header>

        {/* Dashboard Dynamic Views */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
          <div className="max-w-7xl mx-auto p-10">
            {/* Header Area */}
            <div className="flex justify-between items-end mb-10">
              <div>
                <motion.h1 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                >
                  {activeTab}
                </motion.h1>
                <p className="text-white/40 text-sm">Monitoring 16 interconnected stadiums in real-time across North America.</p>
              </div>

              {/* Custom Premium Button */}
              <button 
                onClick={handleExport}
                disabled={isExporting || exportDone}
                className="relative overflow-hidden group px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                {isExporting ? (
                  <><Zap className="w-4 h-4 animate-bounce text-yellow-500" /> <span className="text-sm font-medium">Processing...</span></>
                ) : exportDone ? (
                  <><CheckCircle2 className="w-4 h-4 text-green-500" /> <span className="text-sm font-medium">Downloaded</span></>
                ) : (
                  <><Download className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" /> <span className="text-sm font-medium">Export Report</span></>
                )}
              </button>
            </div>

            {/* View Router */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {activeTab === "Overview" && <OverviewView />}
                {activeTab === "Stadium Maps" && <MapsView />}
                {activeTab === "Crowd Dynamics" && <CrowdView />}
                {activeTab === "Security Ops" && <SecurityView />}
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>
      </main>
    </div>
  );
}

/* ==========================================================================
   VIEW COMPONENTS (LIVE SIMULATION ENABLED)
   ========================================================================== */

function OverviewView() {
  const [fans, setFans] = useState(1204992);
  const [revenue, setRevenue] = useState(45210400);

  // Live simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFans(prev => prev + Math.floor(Math.random() * 50) - 15);
      setRevenue(prev => prev + Math.floor(Math.random() * 300));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Active Fans" value={fans.toLocaleString()} trend="+12.4%" color="green" />
        <StatCard title="Total Revenue" value={`$${(revenue / 1000000).toFixed(2)}M`} trend="+4.1%" color="green" />
        <StatCard title="Critical Alerts" value="3" trend="-2.0%" color="red" alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Live Heatmap */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Global Heatmap
          </h3>
          <div className="flex-1 rounded-2xl bg-[#050505] flex items-center justify-center border border-white/5 relative overflow-hidden min-h-[350px]">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518605368461-1ee125dc26eb?auto=format&fit=crop&q=80&w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            
            {/* Simulated Live Blips */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-70" />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '1s'}} />
            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s'}} />
            
            <div className="relative z-10 flex flex-col items-center bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/10">
              <MapIcon className="w-8 h-8 text-white/40 mb-3" />
              <span className="text-white/60 font-mono text-xs uppercase tracking-widest">Geolocation Feed Active</span>
            </div>
          </div>
        </div>

        {/* Alerts Feed */}
        <div className="lg:col-span-1 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Recent Alerts
          </h3>
          <div className="flex-1 space-y-5">
            <AlertItem time="Live" severity="high" msg="Unattended bag detected at Gate C, MetLife." />
            <AlertItem time="-2m" severity="medium" msg="Crowd density warning in Section 402, SoFi." />
            <AlertItem time="-8m" severity="low" msg="Temperature anomaly in Server Rack 9, Azteca." />
            <AlertItem time="-15m" severity="low" msg="Routine perimeter scan completed." />
          </div>
        </div>
      </div>
    </div>
  );
}

function MapsView() {
  const [sectors, setSectors] = useState([
    { name: "MetLife Stadium", load: 94, status: "Critical" },
    { name: "SoFi Stadium", load: 82, status: "High" },
    { name: "Estadio Azteca", load: 45, status: "Nominal" },
    { name: "Mercedes-Benz", load: 12, status: "Offline" },
    { name: "AT&T Stadium", load: 67, status: "Elevated" }
  ]);

  // Live Load Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSectors(prev => prev.map(s => {
        if (s.name === "Mercedes-Benz") return s; // Keep offline
        const modifier = Math.floor(Math.random() * 11) - 5; // -5 to +5
        let newLoad = s.load + modifier;
        if (newLoad > 100) newLoad = 100;
        if (newLoad < 0) newLoad = 0;
        
        let newStatus = "Nominal";
        if (newLoad > 90) newStatus = "Critical";
        else if (newLoad > 75) newStatus = "High";
        else if (newLoad > 50) newStatus = "Elevated";

        return { ...s, load: newLoad, status: newStatus };
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
        <Server className="w-12 h-12 text-blue-400 mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold mb-2 text-white">3D Spatial Renders Loading</h3>
        <p className="text-white/40 max-w-sm">Fetching real-time structural geometry from Azure Digital Twins...</p>
        
        <div className="mt-8 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}/>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }}/>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}/>
        </div>
      </div>
      
      <div className="h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 flex flex-col">
        <h3 className="text-xl font-medium mb-6">Active Stadium Sectors</h3>
        <div className="space-y-4">
          <AnimatePresence>
            {sectors.map(sector => (
              <SectorRow key={sector.name} name={sector.name} load={sector.load} status={sector.status} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function CrowdView() {
  const [bars, setBars] = useState<number[]>(Array(40).fill(50));

  // Live Biometric Wave Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 80) + 10));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-10 h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
      
      <div className="text-center z-10 mb-12">
        <Users className="w-16 h-16 text-purple-400 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl font-semibold mb-2">Biometric Flow Analytics</h2>
        <p className="text-white/40">Real-time ingress/egress velocities across all active turnstiles.</p>
      </div>

      {/* Live Animated Histogram */}
      <div className="flex items-end justify-center gap-1.5 h-64 w-full max-w-4xl z-10 px-4">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            animate={{ height: `${height}%` }}
            transition={{ type: "tween", duration: 0.8, ease: "linear" }}
            className={`w-full max-w-[20px] rounded-t-sm ${height > 75 ? 'bg-red-500' : height > 50 ? 'bg-yellow-500' : 'bg-purple-500/50'}`}
          />
        ))}
      </div>
      
      <div className="w-full max-w-4xl flex justify-between mt-4 text-[10px] text-white/30 uppercase tracking-widest font-mono z-10 px-4">
        <span>Gate A Ingress</span>
        <span>Peak Flow</span>
        <span>Gate Z Egress</span>
      </div>
    </div>
  );
}

function SecurityView() {
  const possibleThreats = [
    { type: 'Unauthorized Access', severity: 'medium', desc: 'Attempted badge scan failure at Zone B restricted area.' },
    { type: 'Facial Match', severity: 'high', desc: 'Banned individual recognized on Camera 42 at Entry D.' },
    { type: 'Thermal Spike', severity: 'low', desc: 'Abnormal temperature detected in Concession Stand 4.' },
    { type: 'Perimeter Breach', severity: 'high', desc: 'Motion sensor triggered at exterior fence line 9.' },
    { type: 'Drone Activity', severity: 'medium', desc: 'Unregistered UAV detected in airspace above Stadium.' }
  ];

  const [threats, setThreats] = useState([
    { id: 1, type: 'Unattended Baggage', severity: 'high', desc: 'MetLife Stadium, Gate C Concourse. Detected by Camera Node 84. Dispatching EOD K-9 unit.', time: new Date().toLocaleTimeString() }
  ]);

  // Live Threat Spawner
  useEffect(() => {
    const interval = setInterval(() => {
      // 30% chance to spawn a threat every 4 seconds
      if (Math.random() > 0.7) {
        const randomThreat = possibleThreats[Math.random() * possibleThreats.length | 0];
        const newThreat = { 
          id: Date.now(), 
          ...randomThreat, 
          time: new Date().toLocaleTimeString() 
        };
        
        setThreats(prev => {
          const updated = [newThreat, ...prev];
          if (updated.length > 5) updated.pop();
          return updated;
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl border border-red-500/20 bg-red-950/10 backdrop-blur-md p-8 min-h-[600px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]" />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h2 className="text-2xl font-bold text-red-500 flex items-center gap-3">
          <Shield className="w-8 h-8 animate-pulse" /> Active Threat Assessment
        </h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          Live Feed
        </div>
      </div>

      <div className="space-y-4 max-w-4xl relative z-10">
        <AnimatePresence>
          {threats.map(threat => (
            <motion.div 
              key={threat.id}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`p-6 rounded-2xl border flex items-start gap-4 ${
                threat.severity === 'high' ? 'bg-red-500/10 border-red-500/30' : 
                threat.severity === 'medium' ? 'bg-yellow-500/10 border-yellow-500/30' : 
                'bg-blue-500/10 border-blue-500/30'
              }`}
            >
              <div className={`p-3 rounded-full ${
                threat.severity === 'high' ? 'bg-red-500/20 text-red-500' : 
                threat.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 
                'bg-blue-500/20 text-blue-400'
              }`}>
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-lg font-bold text-white">{threat.type} - Level {threat.severity === 'high' ? '4' : threat.severity === 'medium' ? '3' : '2'}</h4>
                  <span className="text-[10px] text-white/40 font-mono">{threat.time}</span>
                </div>
                <p className="text-white/60 text-sm mb-4">{threat.desc}</p>
                
                {threat.severity === 'high' && (
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(220,38,38,0.3)]">Dispatch Team</button>
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-colors">Dismiss</button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ==========================================================================
   HELPER COMPONENTS
   ========================================================================== */

function StatCard({ title, value, trend, alert, color }: { title: string, value: string, trend: string, alert?: boolean, color: 'red'|'green' }) {
  return (
    <div className={`p-8 rounded-3xl border relative overflow-hidden group transition-all duration-500 ${alert ? 'border-red-500/30 bg-red-500/5 hover:border-red-500/50 hover:bg-red-500/10' : 'border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 hover:bg-white/5'}`}>
      <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${color === 'red' ? 'bg-red-500' : 'bg-green-500'}`} />
      
      <h4 className="text-white/40 text-xs font-semibold mb-3 uppercase tracking-[0.2em]">{title}</h4>
      <div className="flex items-end justify-between relative z-10">
        <span className={`text-5xl font-light tracking-tight ${alert ? 'text-red-500' : 'text-white'}`}>{value}</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-md ${alert ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{trend}</span>
      </div>
    </div>
  );
}

function AlertItem({ time, msg, severity }: { time: string, msg: string, severity: 'high' | 'medium' | 'low' }) {
  const colors = {
    high: 'border-red-500 bg-red-500/10 text-red-500',
    medium: 'border-yellow-500 bg-yellow-500/10 text-yellow-500',
    low: 'border-white/20 bg-white/5 text-white/40'
  };
  
  const textColors = {
    high: 'text-red-200',
    medium: 'text-yellow-200',
    low: 'text-white/80'
  };

  return (
    <div className="flex gap-4 items-start group cursor-default">
      <div className="w-16 flex-shrink-0 text-right mt-1">
        <span className="text-[10px] text-white/30 font-mono tracking-wider">{time}</span>
      </div>
      <div className="flex-1 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
        <div className={`text-sm mb-1 ${textColors[severity]}`}>{msg}</div>
        <div className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${colors[severity]}`}>
          {severity} Priority
        </div>
      </div>
    </div>
  );
}

function SectorRow({ name, load, status }: { name: string, load: number, status: string }) {
  const color = load > 90 ? 'bg-red-500' : load > 75 ? 'bg-yellow-500' : load > 40 ? 'bg-green-500' : 'bg-white/20';
  
  return (
    <motion.div layout className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="font-medium relative z-10 w-32">{name}</div>
      <div className="flex items-center gap-4 relative z-10 flex-1 justify-end">
        <div className="w-48 h-2 bg-black rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: `${load}%` }} 
            transition={{ type: "tween", duration: 1 }}
            className={`h-full ${color}`} 
          />
        </div>
        <span className="text-xs font-mono text-white/50 w-12 text-right">{load}%</span>
        <span className={`text-[10px] uppercase tracking-wider font-bold w-16 text-right ${status === 'Critical' ? 'text-red-500' : status === 'High' ? 'text-yellow-500' : status === 'Elevated' ? 'text-green-400' : 'text-white/40'}`}>
          {status}
        </span>
      </div>
    </motion.div>
  );
}
