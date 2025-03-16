import React from "react";
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
declare const SearchResults: React.FC<SearchResultsProps>;
export default SearchResults;
