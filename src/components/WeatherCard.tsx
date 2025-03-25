
import React from 'react';
import { Wind, Thermometer } from 'lucide-react';
import { cn } from "@/lib/utils";
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  location: string;
  temperature: number;
  weatherType: 'sunny' | 'cloudy' | 'partly-cloudy' | 'rainy' | 'night' | 'night-rainy';
  windSpeed: number;
  humidity: number;
  feelsLike: number;
  className?: string;
}

const WeatherCard = ({
  location,
  temperature,
  weatherType,
  windSpeed,
  humidity,
  feelsLike,
  className
}: WeatherCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden transition-all duration-500 ease-in-out",
        "flex flex-col w-full max-w-md mx-auto p-6",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>Current Weather</h2>
            <h1 className="text-3xl font-display font-semibold animate-slide-up" style={{ animationDelay: '200ms' }}>{location}</h1>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <WeatherIcon type={weatherType} size={48} />
          </div>
        </div>
        
        <div className="pt-2">
          <div className="flex items-end">
            <span className="text-7xl font-display font-semibold tracking-tighter animate-slide-up" style={{ animationDelay: '400ms' }}>
              {Math.round(temperature)}
            </span>
            <span className="text-2xl font-display font-medium ml-1 mb-2 animate-slide-up" style={{ animationDelay: '450ms' }}>°C</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="flex flex-col space-y-1 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center text-muted-foreground">
              <Thermometer size={14} className="mr-1" />
              <span className="text-xs">Feels Like</span>
            </div>
            <span className="font-medium">{Math.round(feelsLike)}°C</span>
          </div>
          
          <div className="flex flex-col space-y-1 animate-slide-up" style={{ animationDelay: '550ms' }}>
            <div className="flex items-center text-muted-foreground">
              <Wind size={14} className="mr-1" />
              <span className="text-xs">Wind</span>
            </div>
            <span className="font-medium">{windSpeed} km/h</span>
          </div>
          
          <div className="flex flex-col space-y-1 animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center text-muted-foreground">
              <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 20a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" fill="currentColor" />
              </svg>
              <span className="text-xs">Humidity</span>
            </div>
            <span className="font-medium">{humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
