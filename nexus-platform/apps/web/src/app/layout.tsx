import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLiNt Arena | Smart Stadium Platform",
  description: "The AI-native neural net powering the 2026 FIFA World Cup. Anticipate crowds, secure perimeters, and deliver ultimate fan experiences.",
  keywords: ["FIFA", "World Cup 2026", "Smart Stadium", "AI", "Security", "Crowd Dynamics", "CLiNt Arena"],
  authors: [{ name: "CLiNt Arena Systems" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clintarena.com",
    title: "CLiNt Arena | Smart Stadium Platform",
    description: "The AI-native neural net powering the 2026 FIFA World Cup.",
    siteName: "CLiNt Arena",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLiNt Arena Platform Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLiNt Arena | Smart Stadium Platform",
    description: "The AI-native neural net powering the 2026 FIFA World Cup.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
