import React from "react";
import { Link } from "react-router-dom";

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  company?: string;
  url?: string;
}

interface SearchResultsProps {
  searchResults: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div className="absolute z-10 w-full bg-white border rounded-b-lg shadow-lg max-h-96 overflow-y-auto">
      {searchResults.length > 0 ? (
        searchResults.map((app) => (
          <Link 
            to={`/product/${app.id}`} 
            key={app.id} 
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer 
                       transition-colors duration-200 space-x-4"
          >
            {app.url && (
              <img src={app.url} alt={app.title} className="w-10 h-10 object-cover rounded-md" />
            )}
            <div>
              <div className="font-semibold">{app.title}</div>
              {app.description && <div className="text-sm text-gray-600">{app.description}</div>}
              {app.company && <div className="text-xs text-gray-500">By {app.company}</div>}
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-center text-gray-500">No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
