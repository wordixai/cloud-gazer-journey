
import React from 'react';
import { Cloud, CloudRain, CloudSun, CloudMoonRain, Sun, Moon } from 'lucide-react';
import { cn } from "@/lib/utils";

type WeatherType = 'sunny' | 'cloudy' | 'partly-cloudy' | 'rainy' | 'night' | 'night-rainy';

interface WeatherIconProps {
  type: WeatherType;
  size?: number;
  className?: string;
}

const WeatherIcon = ({ type, size = 24, className }: WeatherIconProps) => {
  const iconProps = {
    size,
    strokeWidth: 1.5,
    className: cn('transition-all-ease', className)
  };

  const renderIcon = () => {
    switch (type) {
      case 'sunny':
        return <Sun {...iconProps} className={cn('text-weather-sunny animate-spin-slow', iconProps.className)} />;
      case 'cloudy':
        return <Cloud {...iconProps} className={cn('text-weather-cloudy animate-pulse-gentle', iconProps.className)} />;
      case 'partly-cloudy':
        return <CloudSun {...iconProps} className={cn('text-weather-cloudy animate-float', iconProps.className)} />;
      case 'rainy':
        return <CloudRain {...iconProps} className={cn('text-weather-rainy animate-pulse-gentle', iconProps.className)} />;
      case 'night':
        return <Moon {...iconProps} className={cn('text-weather-night animate-pulse-gentle', iconProps.className)} />;
      case 'night-rainy':
        return <CloudMoonRain {...iconProps} className={cn('text-weather-night animate-pulse-gentle', iconProps.className)} />;
      default:
        return <Sun {...iconProps} className={cn('text-weather-sunny animate-spin-slow', iconProps.className)} />;
    }
  };

  return (
    <div className="relative">
      {renderIcon()}
    </div>
  );
};

export default WeatherIcon;
