import React, { useState } from 'react';
import { Cloud, MapPin } from 'lucide-react';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { SearchBar } from './components/SearchBar';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import type { WeatherData, ForecastData } from './types';

// Simulated weather data (replace with actual API calls)
const mockWeather: WeatherData = {
  location: "London",
  temperature: 18,
  description: "Partly cloudy",
  humidity: 65,
  windSpeed: 12,
  icon: "02d"
};

const mockForecast: ForecastData[] = [
  { date: "2024-03-20", temperature: 18, description: "Sunny", icon: "01d" },
  { date: "2024-03-21", temperature: 16, description: "Cloudy", icon: "02d" },
  { date: "2024-03-22", temperature: 15, description: "Rain", icon: "10d" },
  { date: "2024-03-23", temperature: 17, description: "Partly cloudy", icon: "02d" },
  { date: "2024-03-24", temperature: 19, description: "Sunny", icon: "01d" }
];

function App() {
  const [weather] = useState<WeatherData>(mockWeather);
  const [forecast] = useState<ForecastData[]>(mockForecast);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement actual API call here
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900">
        <Navbar />
        
        <div className="container mx-auto px-4 py-20">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cloud className="h-10 w-10 text-white" />
              <h1 className="text-4xl font-bold text-white">WeatherCast</h1>
            </div>
            <SearchBar onSearch={handleSearch} />
          </header>

          <main className="space-y-8">
            {/* Current Weather */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-white" />
                <h2 className="text-xl font-semibold text-white">Current Weather</h2>
              </div>
              <WeatherCard weather={weather} />
            </section>

            {/* 5-Day Forecast */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {forecast.map((day) => (
                  <ForecastCard key={day.date} forecast={day} />
                ))}
              </div>
            </section>

            {/* Weather Map */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Weather Map</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Weather Map"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </section>

            {/* Additional Weather Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Air Quality</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Air Quality Index</span>
                    <span className="font-semibold text-gray-800 dark:text-white">Good (45)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">UV Index</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">UV Level</span>
                    <span className="font-semibold text-gray-800 dark:text-white">Moderate (4)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <About />
        <Contact />

        <footer className="bg-white dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-300">
          <p className="text-sm">
            Data provided by WeatherCast © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;