import React from 'react';
import { format } from 'date-fns';
import type { ForecastData } from '../types';

interface ForecastCardProps {
  forecast: ForecastData;
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center transform transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-xl">
      <p className="font-semibold text-gray-700 dark:text-gray-300">
        {format(new Date(forecast.date), 'EEE')}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
        alt={forecast.description}
        className="w-16 h-16 mx-auto transform transition-all duration-300 hover:scale-125"
      />
      <p className="text-2xl font-bold text-gray-800 dark:text-white">
        {Math.round(forecast.temperature)}°C
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{forecast.description}</p>
    </div>
  );
}