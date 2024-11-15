import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "parthu.dev",
  description: "Full-stack developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="pt-16 pb-16">
            {children}
          </main>
          <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-foreground/60 bg-background/80 backdrop-blur-md border-t border-foreground/5">
            Crafted with care by human 👨‍💻 and machine 🤖
          </footer>
        </ThemeProvider>
        {/* Start of HubSpot Embed Code */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/48160403.js"></script>
        {/* End of HubSpot Embed Code */}
      </body>
    </html>
  );
}
