import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{weather.location}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{weather.description}</p>
        </div>
        <div className="text-4xl font-bold text-gray-800 dark:text-white">
          {Math.round(weather.temperature)}°C
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
          <Cloud className="text-blue-500 hover:text-blue-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
            <p className="font-semibold text-gray-800 dark:text-white">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
          <Wind className="text-blue-500 hover:text-blue-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
            <p className="font-semibold text-gray-800 dark:text-white">{weather.windSpeed} km/h</p>
          </div>
        </div>
        <div className="flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
          <Droplets className="text-blue-500 hover:text-blue-600" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Precipitation</p>
            <p className="font-semibold text-gray-800 dark:text-white">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}