import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Theme, Language } from './types';
import { THEMES } from './constants';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES[0]); // Default to Rose
  const [currentLang, setCurrentLang] = useState<Language>('zh'); // Default to TC
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex w-full min-h-screen font-sans ${currentTheme.colors.text}`}>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        currentTheme={currentTheme}
        currentLang={currentLang}
        setLang={setCurrentLang}
        setTheme={setCurrentTheme}
      />

      <main 
        className={`flex-1 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'md:ml-80' : 'ml-0'}
        `}
      >
        <Dashboard theme={currentTheme} lang={currentLang} />
      </main>
      
    </div>
  );
};

export default App;
