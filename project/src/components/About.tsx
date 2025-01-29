import React from 'react';
import { Info, Users, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About WeatherCast
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-600">
            <Info className="h-12 w-12 text-blue-500 mb-4 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Providing accurate and reliable weather forecasts to help you plan your day with confidence.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-600">
            <Users className="h-12 w-12 text-blue-500 mb-4 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Team</h3>
            <p className="text-gray-600 dark:text-gray-300">
              A dedicated team of meteorologists and developers working together to deliver the best weather service.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-600">
            <Award className="h-12 w-12 text-blue-500 mb-4 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Achievement</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Trusted by millions of users worldwide with a 95% forecast accuracy rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}