
import React from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-6 px-4 sm:px-6", className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <svg 
              className="w-4 h-4 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <circle 
                cx="12" 
                cy="12" 
                r="4" 
                stroke="currentColor" 
                strokeWidth="2"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </div>
          <h1 className="text-xl font-display font-semibold">Serenity Weather</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Maps</a>
          <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Radar</a>
          <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Settings</a>
        </nav>
        
        <div className="md:hidden">
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
