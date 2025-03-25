
import React from 'react';
import { cn } from "@/lib/utils";
import WeatherIcon from './WeatherIcon';

interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  weatherType: 'sunny' | 'cloudy' | 'partly-cloudy' | 'rainy' | 'night' | 'night-rainy';
}

interface ForecastDisplayProps {
  forecast: ForecastDay[];
  className?: string;
}

const ForecastDisplay = ({ forecast, className }: ForecastDisplayProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden",
        "w-full max-w-md mx-auto p-6",
        "animate-fade-in",
        className
      )}
    >
      <h2 className="text-lg font-medium text-muted-foreground mb-4">5-Day Forecast</h2>
      
      <div className="space-y-4">
        {forecast.map((day, index) => (
          <div 
            key={day.date} 
            className={cn(
              "flex items-center justify-between py-2",
              index !== forecast.length - 1 && "border-b border-gray-100",
              "animate-slide-up"
            )}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div className="flex items-center space-x-4">
              <WeatherIcon type={day.weatherType} size={24} />
              <div>
                <p className="font-medium">{day.day}</p>
                <p className="text-xs text-muted-foreground">{day.date}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-medium">{Math.round(day.high)}°</span>
              <span className="text-muted-foreground">{Math.round(day.low)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
