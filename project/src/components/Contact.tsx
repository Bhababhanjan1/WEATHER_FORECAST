import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
              <Mail className="h-6 w-6 text-blue-500 mt-1 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">support@weathercast.com</p>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">business@weathercast.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
              <Phone className="h-6 w-6 text-blue-500 mt-1 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">+1 (555) 123-4567</p>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4 transform transition-all duration-300 hover:scale-105">
              <MapPin className="h-6 w-6 text-blue-500 mt-1 transform transition-all duration-300 hover:scale-110 hover:text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  123 Weather Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 hover:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 hover:border-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 hover:border-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 hover:scale-105 transform"
              >
                <MessageSquare className="h-4 w-4 inline-block mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}