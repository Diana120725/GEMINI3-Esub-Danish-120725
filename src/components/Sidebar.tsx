import React from 'react';
import { ChevronLeft, ChevronRight, Flower, Info } from 'lucide-react';
import { Theme, Language } from '../types';
import { TEXTS } from '../constants';
import LuckyWheel from './LuckyWheel';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  currentTheme: Theme;
  currentLang: Language;
  setLang: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  toggleSidebar, 
  currentTheme, 
  currentLang, 
  setLang,
  setTheme
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Container */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white z-50 shadow-[20px_0_50px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out flex flex-col border-r border-stone-100
          ${isOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full opacity-0 md:opacity-100 md:w-0 md:translate-x-0'}
        `}
      >
        <div className={`p-8 flex flex-col h-full overflow-y-auto ${!isOpen && 'hidden'}`}>
          {/* Brand */}
          <div className="mb-12">
             <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-full ${currentTheme.colors.secondary} text-white`}>
                    <Flower className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-xl tracking-wide text-stone-900">FDA Express</span>
             </div>
             <div className="h-px w-12 bg-[#B58D3D]"></div>
          </div>

          {/* Language Toggle */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-[0.2em]">Language</h3>
            <div className="flex gap-1 p-1 bg-stone-100 rounded-xl">
              <button 
                onClick={() => setLang('zh')}
                className={`flex-1 py-2.5 rounded-lg text-sm transition-all duration-300 ${currentLang === 'zh' ? 'bg-white shadow-sm text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-700'}`}
              >
                中文
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`flex-1 py-2.5 rounded-lg text-sm transition-all duration-300 ${currentLang === 'en' ? 'bg-white shadow-sm text-stone-900 font-bold' : 'text-stone-500 hover:text-stone-700'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Theme Selector Section */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
                 <h3 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Palette</h3>
                 <span className="text-xs font-serif italic text-stone-500">{currentTheme.name}</span>
            </div>
            <LuckyWheel onThemeSelect={setTheme} currentLang={currentLang} />
          </div>

          {/* Info Section */}
          <div className="mt-auto pt-8 border-t border-stone-100 text-[10px] text-stone-400 leading-relaxed font-light uppercase tracking-widest">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-3 h-3" />
              <span>Version 2.0.1</span>
            </div>
            <p>DESIGNED FOR TFDA<br/>Copenhagen Style Ed.</p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-8 z-50 p-3 rounded-r-2xl bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.05)] text-stone-500 hover:bg-stone-50 transition-all duration-300 border border-l-0 border-stone-100
          ${isOpen ? 'left-80' : 'left-0'}
        `}
        title={isOpen ? TEXTS.sidebarHide[currentLang] : TEXTS.sidebarShow[currentLang]}
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </>
  );
};

export default Sidebar;