"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/src/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export function Header() {
  const { t, i18n } = useTranslation(['landing', 'common']);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLang = i18n.language?.startsWith('es') ? 'es' : 'en';

  const selectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full cyber-glass border-b border-[#262a40]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo with Cyber Duck Pixel */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center size-11 rounded-xl bg-gradient-to-br from-[#ffb800] via-[#00e5ff] to-[#a855f7] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#00e5ff]/10">
            <div className="flex size-full items-center justify-center rounded-[10.5px] bg-[#0b0d17] p-1.5 overflow-hidden">
              <img 
                src="/villatech_logo_transparent.svg" 
                alt="Villatech Cyber Duck Logo" 
                className="size-full object-contain [image-rendering:pixelated]" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              Villatech
              <span className="inline-block size-2 rounded-full bg-[#ffb800] animate-pulse" />
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#00e5ff] opacity-90">
              Software & AI Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="transition-colors hover:text-[#ffb800]">
            {t('landing:navServices')}
          </a>
          <a href="#solutions" className="transition-colors hover:text-[#00e5ff]">
            {t('landing:navSolutions')}
          </a>
          <a href="#projects" className="transition-colors hover:text-[#a855f7]">
            {t('landing:navProjects')}
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            {t('landing:navContact')}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-5">
          
          {/* SVG Flag Language Switcher Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b0d17] border border-[#262a40] hover:border-[#00e5ff]/50 text-xs font-mono text-slate-200 transition-all shadow-inner hover:shadow-[#00e5ff]/10"
            >
              <img 
                src={currentLang === 'es' ? "/flags/es.svg" : "/flags/us.svg"} 
                alt={currentLang === 'es' ? "Bandera España" : "US Flag"} 
                className="w-5 h-3.5 object-cover rounded-xs border border-white/20 shadow-xs" 
              />
              <span className="uppercase font-bold tracking-wider">{currentLang === 'es' ? 'ES' : 'EN'}</span>
              <ChevronDown className={`size-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl cyber-glass border border-[#262a40] p-1.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <button
                  type="button"
                  onClick={() => selectLanguage('es')}
                  className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                    currentLang === 'es'
                      ? 'bg-[#00e5ff]/15 text-[#00e5ff] font-bold border border-[#00e5ff]/30'
                      : 'text-slate-300 hover:bg-[#1e2238] hover:text-white'
                  }`}
                >
                  <img src="/flags/es.svg" alt="Bandera España" className="w-5 h-3.5 object-cover rounded-xs border border-white/20" />
                  <span>Español</span>
                </button>
                <button
                  type="button"
                  onClick={() => selectLanguage('en')}
                  className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-xs font-mono transition-colors mt-1 ${
                    currentLang === 'en'
                      ? 'bg-[#00e5ff]/15 text-[#00e5ff] font-bold border border-[#00e5ff]/30'
                      : 'text-slate-300 hover:bg-[#1e2238] hover:text-white'
                  }`}
                >
                  <img src="/flags/us.svg" alt="US Flag" className="w-5 h-3.5 object-cover rounded-xs border border-white/20" />
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          {/* CTA Consultation Button */}
          <a href="#contact">
            <Button size="sm" className="h-9 px-4 bg-gradient-to-r from-[#ffb800] to-[#f59e0b] text-[#0b0d17] font-semibold hover:opacity-95 transition-all glow-amber border-none group">
              {t('landing:ctaPrimary')}
              <ArrowRight className="size-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile SVG Flag Buttons */}
          <div className="flex items-center bg-[#0b0d17] border border-[#262a40] rounded-full p-1 text-xs font-mono">
            <button
              type="button"
              onClick={() => selectLanguage('es')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
                currentLang === 'es'
                  ? 'bg-[#00e5ff]/15 text-[#00e5ff] font-bold border border-[#00e5ff]/40'
                  : 'text-slate-400'
              }`}
            >
              <img src="/flags/es.svg" alt="ES" className="w-4 h-3 object-cover rounded-xs" />
              <span>ES</span>
            </button>
            <button
              type="button"
              onClick={() => selectLanguage('en')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all ${
                currentLang === 'en'
                  ? 'bg-[#00e5ff]/15 text-[#00e5ff] font-bold border border-[#00e5ff]/40'
                  : 'text-slate-400'
              }`}
            >
              <img src="/flags/us.svg" alt="EN" className="w-4 h-3 object-cover rounded-xs" />
              <span>EN</span>
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white hover:bg-[#1e2238]"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden cyber-glass border-b border-[#262a40] px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 pt-2 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1e2238] hover:text-[#ffb800]"
            >
              {t('landing:navServices')}
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1e2238] hover:text-[#00e5ff]"
            >
              {t('landing:navSolutions')}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1e2238] hover:text-[#a855f7]"
            >
              {t('landing:navProjects')}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#1e2238]"
            >
              {t('landing:navContact')}
            </a>
          </nav>
          
          <div className="pt-2">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#ffb800] to-[#f59e0b] text-[#0b0d17] font-bold">
                {t('landing:ctaPrimary')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
