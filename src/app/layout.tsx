import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Cervantes - Full Stack Developer",
  description: "Full stack developer passionate about building practical solutions with modern technologies. From AI-powered apps to P2P systems, I love exploring and creating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          backgroundColor: 'var(--background)'
        }}
      >
        {children}
      </body>
    </html>
  );
}
