import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/src/components/providers/i18n-provider";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { Header } from "@/src/components/common/header";
import { ReactQueryProvider } from "@/src/components/providers/react-query-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Villatech | Software a Medida & Agentes de IA para PyMEs",
  description: "Estudio de desarrollo de software especializado en aplicaciones web, soluciones en la nube e inteligencia artificial para pequeñas y medianas empresas.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/villatech_logo_transparent.svg", type: "image/svg+xml" },
    ],
    shortcut: "/villatech_logo_transparent.svg",
    apple: "/villatech_logo_transparent.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0d17] text-slate-100 min-h-screen selection:bg-[#ffb800]/30 selection:text-[#ffb800]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <I18nProvider>
              <div className="relative flex min-h-screen flex-col bg-[#0b0d17]">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
              </div>
              <Toaster richColors position="bottom-right" theme="dark" />
            </I18nProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
