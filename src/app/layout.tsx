import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo Cervantes - CS Student & Developer",
  description: "CS student at Tec de Monterrey who likes building web apps and creating things from scratch. Into hackathons, graphic design, and making useful stuff with code.",
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
