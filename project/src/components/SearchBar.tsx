import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md transform transition-all duration-300 hover:scale-105">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:border-blue-400"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 transition-all duration-300 hover:text-blue-500" />
      </div>
    </form>
  );
}