import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { apps, Games } from './Apps';  // Importing both apps and Games
import SearchResults from './SearchResults';

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  company?: string;
  url?: string;
}

// Updated AI search function to include Games
const performAISearch = async (query: string): Promise<SearchResult[]> => {
  // Convert apps to SearchResult format
  const appResults: SearchResult[] = apps.map(app => ({
    id: app.id.toString(),
    title: app.label,
    description: app.description,
    company: app.company,
    url: app.url,
  }));
  
  // Convert Games to SearchResult format
  const gameResults: SearchResult[] = Games.map(game => ({
    id: game.id.toString(),
    title: game.label,
    description: game.description,
    company: game.company,
    url: game.url,
  }));
  
  // Combine both result sets
  const allResults = [...appResults, ...gameResults];

  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredResults = allResults.filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          (result.description && result.description.toLowerCase().includes(query.toLowerCase())) ||
          (result.company && result.company.toLowerCase().includes(query.toLowerCase()))
      );
      resolve(filteredResults);
    }, 300);
  });
};

const AISearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Clear any pending searches
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (searchQuery.length > 1) {
      setIsLoading(true);
      
      // Debounce search to prevent too many requests
      searchTimeout.current = setTimeout(async () => {
        const searchResults = await performAISearch(searchQuery);
        setResults(searchResults);
        setShowResults(true);
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
      setShowResults(false);
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clear timeout on component unmount
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  return (
    <div ref={searchContainerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Search products & games..."
          aria-label="Search"
          className="w-full px-4 py-2 pl-10 pr-10 text-gray-700 
                     bg-white border rounded-lg focus:outline-none 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        {isLoading ? (
          <Loader2 className="absolute left-3 top-3 text-blue-500 animate-spin" size={20} />
        ) : (
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        )}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isLoading && (
        <div className="absolute z-10 w-full bg-white border rounded-b-lg shadow-lg">
          <div className="p-4 text-center text-gray-500">Searching...</div>
        </div>
      )}

      {showResults && !isLoading && <SearchResults searchResults={results} />}
    </div>
  );
};

export default AISearchBar;