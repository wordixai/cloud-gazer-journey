
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import SearchLocation from '@/components/SearchLocation';
import WeatherCard from '@/components/WeatherCard';
import ForecastDisplay from '@/components/ForecastDisplay';
import LoadingState from '@/components/LoadingState';
import { toast } from 'sonner';

// Mock data
const mockWeatherData = {
  location: 'San Francisco',
  temperature: 18,
  weatherType: 'partly-cloudy' as const,
  windSpeed: 12,
  humidity: 68,
  feelsLike: 16
};

const mockForecastData = [
  { day: 'Monday', date: 'Jun 12', high: 20, low: 14, weatherType: 'sunny' as const },
  { day: 'Tuesday', date: 'Jun 13', high: 22, low: 15, weatherType: 'partly-cloudy' as const },
  { day: 'Wednesday', date: 'Jun 14', high: 19, low: 13, weatherType: 'cloudy' as const },
  { day: 'Thursday', date: 'Jun 15', high: 18, low: 12, weatherType: 'rainy' as const },
  { day: 'Friday', date: 'Jun 16', high: 21, low: 14, weatherType: 'partly-cloudy' as const }
];

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(mockWeatherData);
  const [forecast, setForecast] = useState(mockForecastData);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSearch = (location: string) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to get weather data
      setWeather({
        ...weather,
        location: location
      });
      setLoading(false);
      toast.success(`Weather updated for ${location}`);
    }, 1000);
  };
  
  const getBackgroundStyle = () => {
    const weatherType = weather.weatherType;
    
    switch(weatherType) {
      case 'sunny':
        return 'bg-gradient-to-br from-blue-400 to-blue-50';
      case 'cloudy':
        return 'bg-gradient-to-br from-gray-400 to-gray-200';
      case 'partly-cloudy':
        return 'bg-gradient-to-br from-blue-400 via-blue-300 to-gray-200';
      case 'rainy':
        return 'bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500';
      case 'night':
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800';
      case 'night-rainy':
        return 'bg-gradient-to-br from-gray-900 via-blue-800 to-gray-800';
      default:
        return 'bg-gradient-to-br from-blue-400 to-blue-50';
    }
  };
  
  return (
    <div className={`min-h-screen ${getBackgroundStyle()} transition-all duration-1000`}>
      <div className="min-h-screen backdrop-blur-[1px]">
        <Header />
        
        <main className="container px-4 py-8 mx-auto">
          <div className="max-w-7xl mx-auto">
            <SearchLocation 
              onSearch={handleSearch} 
              className="mb-8"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {loading ? (
                <LoadingState className="col-span-1 lg:col-span-2" />
              ) : (
                <>
                  <WeatherCard
                    location={weather.location}
                    temperature={weather.temperature}
                    weatherType={weather.weatherType}
                    windSpeed={weather.windSpeed}
                    humidity={weather.humidity}
                    feelsLike={weather.feelsLike}
                  />
                  
                  <ForecastDisplay forecast={forecast} />
                </>
              )}
            </div>
          </div>
        </main>
        
        <footer className="mt-16 py-6 text-center">
          <p className="text-sm text-foreground/70">
            Serenity Weather • Designed with simplicity in mind
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
