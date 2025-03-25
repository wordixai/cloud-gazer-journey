
import React from 'react';
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
}

const LoadingState = ({ className }: LoadingStateProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-t-transparent border-primary animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-b-transparent border-secondary animate-spin animation-delay-150"></div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground font-medium animate-pulse">Loading weather data...</p>
    </div>
  );
};

export default LoadingState;
