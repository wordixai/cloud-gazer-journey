
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SearchLocationProps {
  onSearch: (location: string) => void;
  className?: string;
}

const SearchLocation = ({ onSearch, className }: SearchLocationProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div 
          className={cn(
            "relative flex items-center transition-all duration-300 ease-in-out",
            "bg-white/80 backdrop-blur-md border border-transparent",
            "rounded-full overflow-hidden shadow-sm",
            isFocused ? "border-black/10 shadow-md" : "hover:border-black/5 hover:shadow"
          )}
        >
          <Search 
            size={18} 
            className={cn(
              "absolute left-4 transition-colors duration-300",
              isFocused ? "text-black" : "text-gray-400"
            )} 
          />
          <input
            type="text"
            placeholder="Search for a location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full py-3 pl-12 pr-4 bg-transparent",
              "text-sm font-medium placeholder-gray-400",
              "focus:outline-none focus:ring-0"
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchLocation;
