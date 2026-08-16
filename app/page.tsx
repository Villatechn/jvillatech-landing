'use client';

import { useTranslation } from "react-i18next";
import { Button } from "@/src/components/ui/button";
import { 
  Code2, 
  Bot, 
  Cloud, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Truck,
  MessageSquareCode,
  Send,
  Layers,
  MapPin
} from "lucide-react";

export default function Home() {
  const { t } = useTranslation(['landing', 'common']);

  return (
    <div className="relative min-h-screen cyber-grid-bg overflow-hidden">
      
      {/* ==================================================================== */}
      {/* 1. HERO SECTION */}
      {/* ==================================================================== */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Badge with Cyber Duck Logo */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full cyber-glass border border-[#00e5ff]/40 text-slate-200 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-700 shadow-lg shadow-[#00e5ff]/10">
            <div className="size-6 rounded-md bg-[#141727] p-0.5 border border-[#ffb800]/50 overflow-hidden shrink-0">
              <img src="/villatech_logo_transparent.svg" alt="Cyber Duck" className="size-full object-contain [image-rendering:pixelated]" />
            </div>
            <span>{t('landing:badge')}</span>
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-[#00e5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-[#00e5ff]"></span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('landing:heroTitle')}
            <span className="cyber-gradient-amber-cyan block sm:inline">
              {t('landing:heroTitleGradient')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2.5xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            {t('landing:heroSubtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-base font-bold bg-gradient-to-r from-[#ffb800] to-[#f59e0b] text-[#0b0d17] hover:opacity-95 transition-all glow-amber border-none group">
                {t('landing:ctaPrimary')}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <a href="#services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-13 px-8 text-base font-semibold border-[#262a40] bg-[#141727]/80 text-slate-200 hover:bg-[#1e2238] hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-all">
                {t('landing:ctaSecondary')}
              </Button>
            </a>
          </div>

          {/* Hero Interactive Cyber Terminal Card */}
          <div className="w-full max-w-4xl mt-12 rounded-2xl cyber-glass border border-[#262a40] p-4 sm:p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 text-left">
            <div className="flex items-center justify-between border-b border-[#262a40] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-amber-500/80" />
                <div className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="size-3.5 text-[#00e5ff]" />
                  villatech-core-v2.4.0.ts
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1 text-[#00e5ff]">
                  <Cpu className="size-3.5" /> 99.9% Uptime
                </span>
                <span className="hidden sm:inline text-amber-400">● PyME Ready</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#0b0d17]/80 border border-[#262a40]">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <Code2 className="size-4 text-[#ffb800]" /> {t('landing:terminalCleanArchTitle')}
                </div>
                <div className="text-white font-bold text-sm">Next.js + NestJS</div>
                <div className="text-slate-500 text-[11px] mt-1">{t('landing:terminalCleanArchSub')}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b0d17]/80 border border-[#262a40]">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <Bot className="size-4 text-[#00e5ff]" /> {t('landing:terminalAiTitle')}
                </div>
                <div className="text-[#00e5ff] font-bold text-sm">Vision & LLM Agents</div>
                <div className="text-slate-500 text-[11px] mt-1">{t('landing:terminalAiSub')}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0b0d17]/80 border border-[#262a40]">
                <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                  <Zap className="size-4 text-[#a855f7]" /> {t('landing:terminalPerfTitle')}
                </div>
                <div className="text-[#a855f7] font-bold text-sm">&lt; 100ms Response</div>
                <div className="text-slate-500 text-[11px] mt-1">{t('landing:terminalPerfSub')}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. SERVICES SECTION */}
      {/* ==================================================================== */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262a40]/60">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00e5ff] uppercase font-semibold">
            {t('landing:servicesTag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {t('landing:servicesTitle')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            {t('landing:servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="cyber-glass-card p-6 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-xl bg-[#ffb800]/10 border border-[#ffb800]/30 flex items-center justify-center text-[#ffb800] mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('landing:customDevTitle')}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t('landing:customDevDesc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex items-center text-xs font-mono text-[#ffb800]">
              <span>Next.js • NestJS • Postgres</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cyber-glass-card p-6 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-5 group-hover:scale-110 transition-transform">
                <Bot className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('landing:aiAutomationTitle')}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t('landing:aiAutomationDesc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex items-center text-xs font-mono text-[#00e5ff]">
              <span>WhatsApp Bots • OpenRouter • Vision</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cyber-glass-card p-6 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center text-[#a855f7] mb-5 group-hover:scale-110 transition-transform">
                <Cloud className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('landing:cloudArchTitle')}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t('landing:cloudArchDesc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex items-center text-xs font-mono text-[#a855f7]">
              <span>GCP • AWS • Docker • Swarm</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="cyber-glass-card p-6 rounded-2xl flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('landing:dataDashboardsTitle')}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t('landing:dataDashboardsDesc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex items-center text-xs font-mono text-emerald-400">
              <span>Real-time KPI • Analytics • Orval</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. SME VALUE PROPOSITION */}
      {/* ==================================================================== */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262a40]/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#ffb800] uppercase font-semibold">
              {t('landing:smeTag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {t('landing:smeTitle')}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('landing:smeSubtitle')}
            </p>
            <div className="pt-4">
              <a href="#contact">
                <Button size="lg" className="h-12 px-6 bg-[#ffb800] text-[#0b0d17] font-bold hover:bg-[#f59e0b]">
                  {t('landing:bannerButton')}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl cyber-glass border border-[#262a40] hover:border-[#ffb800]/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#ffb800]/10 text-[#ffb800] shrink-0">
                <Zap className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {t('landing:feature1Title')}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('landing:feature1Desc')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl cyber-glass border border-[#262a40] hover:border-[#00e5ff]/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#00e5ff]/10 text-[#00e5ff] shrink-0">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {t('landing:feature2Title')}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('landing:feature2Desc')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl cyber-glass border border-[#262a40] hover:border-[#a855f7]/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#a855f7]/10 text-[#a855f7] shrink-0">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {t('landing:feature3Title')}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t('landing:feature3Desc')}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. FEATURED PROJECTS SHOWCASE */}
      {/* ==================================================================== */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262a40]/60">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-[#a855f7] uppercase font-semibold">
            {t('landing:projectsTag')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {t('landing:projectsTitle')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            {t('landing:projectsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#ffb800]/10 text-[#ffb800] text-xs font-mono border border-[#ffb800]/30 flex items-center gap-1.5">
                  <Truck className="size-3.5" /> {t('landing:project1Category')}
                </span>
                <span className="text-xs font-mono text-slate-500">{t('landing:project1Badge')}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('landing:project1Title')}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('landing:project1Desc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">Next.js 16</span>
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">NestJS v11</span>
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">Orval Codegen</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="cyber-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-mono border border-[#00e5ff]/30 flex items-center gap-1.5">
                  <MessageSquareCode className="size-3.5" /> {t('landing:project2Category')}
                </span>
                <span className="text-xs font-mono text-slate-500">{t('landing:project2Badge')}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t('landing:project2Title')}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('landing:project2Desc')}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#262a40] flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">OpenRouter API</span>
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">Vision LLM</span>
              <span className="px-2.5 py-1 rounded bg-[#0b0d17] text-slate-300 border border-[#262a40]">BullMQ & Redis</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. BANNER CTA */}
      {/* ==================================================================== */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#141727] via-[#0b0d17] to-[#1e2238] border border-[#ffb800]/30 glow-amber text-center space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-[#ffb800]/10 text-[#ffb800] border border-[#ffb800]/30 mb-2">
            <Layers className="size-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            {t('landing:bannerTitle')}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
            {t('landing:bannerSubtitle')}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:juliannnoble321@gmail.com">
              <Button size="lg" className="h-13 px-8 text-base font-bold bg-[#ffb800] text-[#0b0d17] hover:bg-[#f59e0b] w-full sm:w-auto">
                <Send className="size-4 mr-2" />
                {t('landing:bannerButton')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. FOOTER */}
      {/* ==================================================================== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#262a40]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <Code2 className="size-4 text-[#ffb800]" />
          <span className="text-slate-300 font-bold">Villatech</span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-[#262a40]">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <MapPin className="size-3 text-[#00e5ff]" />
            {t('landing:address')}
          </span>
        </div>
        <div>
          {t('landing:footerRights')}
        </div>
      </footer>

    </div>
  );
}
