<div align="center">
  <img src="frontend/public/logo.png" alt="CLiNt Arena Logo" width="200" />
  <h1>CLiNt Arena SOC</h1>
  <p><strong>The AI-native neural net powering global stadium operations.</strong></p>
  <p>🔴 <strong><a href="https://c-li-nt-arena-git-main-siddharth-0509s-projects.vercel.app/">LIVE DEMO AVAILABLE HERE</a></strong> 🔴</p>
</div>

<br />

Welcome to the **CLiNt Arena** source code! This platform is a next-generation Security Operations Center (SOC) designed to showcase advanced, real-time stadium analytics , biometric crowd flows, and automated AI threat detection.

Whether you're looking at live crowd densities or dispatching teams for automated perimeter breaches, CLiNt Arena simulates the pulse of a massive, multi-stadium ecosystem in real-time.

---

## ✨ Features

- 🔴 **Live Simulation Engine**: A powerful internal React engine simulates constant, stateful data ingestion. Numbers don't just sit there—they breathe.
- 🗺️ **Global Tracking**: Live spatial monitors dynamically shift load balances across multiple stadiums simultaneously.
- 🧬 **Biometric Flow**: A custom, 40-bar frequency histogram animates ingress and egress velocities at a buttery 60fps.
- 🛡️ **Automated Threat Generation**: The AI engine continuously spawns realistic security alerts (like Drone Activity, Thermal Spikes, or Unattended Bags) and seamlessly integrates them into the live SOC feed.
- 🎨 **Premium Aesthetics**: Built with a sleek, dark-mode glassmorphic UI, glowing ambient meshes, and fluid `framer-motion` layout transitions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS + Custom CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Architecture**: Monorepo split strictly into `frontend/` and `backend/` domains.

---

## 📂 Repository Structure

We've organized the repository into two distinct domains to make deployment and contribution as simple as possible.

```
CLiNt-Arena/
├── frontend/             # The Next.js 15 Web Application (UI & Live Engine)
│   ├── src/app/          # App Router pages (Dashboard, Auth, Landing)
│   ├── public/           # Static assets, videos, and images
│   └── package.json      
│
├── backend/              # NestJS Microservices Architecture (WIP)
│   ├── ai-intelligence/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── stadium-service/
│   └── websocket-cluster/
│
└── packages/             # Shared Monorepo Dependencies
    ├── database/         # Prisma ORM and Schema
    └── ui/               # Internal design system components
```

---

## 🚀 Getting Started Locally

Running the CLiNt Arena SOC locally is incredibly fast.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) and `npm` or `pnpm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiDdHaRtH-0509/CLiNt-Arena.git
   cd CLiNt-Arena
   ```

2. **Navigate to the frontend:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the Neural Net (Dev Server):**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the platform.

---

## ☁️ Deployment

CLiNt Arena is optimized for zero-config deployments on Vercel.

1. Import your GitHub repository into Vercel.
2. In the project settings, set the **Root Directory** to `frontend`.
3. Click Deploy. Vercel handles the rest automatically!

---

<div align="center">
  <p>Built for the future of Smart Stadiums.</p>
</div>
