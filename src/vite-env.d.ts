/ <reference types="vite/client" />










import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

interface AppDetails {
  id: number;
  url: string;
  alt: string;
  label: string;
  description: string;
  company: string;
  systemRequirements: string[];
  additionalInfo: string;
}



export const apps: AppDetails[] = [
  { 
    id: 1, 
    url: "https://img-cdn.magiceden.dev/rs:fill:800:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fi9YO%252F4yHXUdJsWcTqhqvf0dYQndVAgYwrQ2Vxb5roI5%252F7lFfCq4ULJTg91bKirwa7KfDT%252BQKxzhmqOBEEC2%252FMgrd3DscDZu7uHdtCql554YxVA7laShocNfu4LVtVo3C.png", 
    alt: "Photo 1", 
    label: "Instagram", 
    description: "Social media app to connect with friends and family", 
    company: "Meta", 
    systemRequirements: ['IOS 16 or later'],
    additionalInfo: 'was created by a team of dedicated developers' 
  },
  // ... other apps
];



// Component for displaying search results
const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results-container">
      {searchResults.map((app) => (
        <Link 
          to={`/app/${app.id}`} 
          key={app.id} 
          className="app-card"
        >
          <div className="app-content">
            <img src={app.url} alt={app.alt} className="app-image" />
            <div className="app-info">
              <h3 className="app-label">{app.label}</h3>
              <p className="app-description">{app.description}</p>
              <p className="app-company">By {app.company}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};



// Component for individual app page
const AppDetails = () => {
  const { id } = useParams();
  const app = apps.find((app) => app.id === parseInt(id, 10));

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <div className="app-details-container">
      <Link to="/" className="back-button">Back to Search</Link>
      
      <div className="app-header">
        <img src={app.url} alt={app.alt} className="app-detail-image" />
        <div className="app-header-info">
          <h1 className="app-title">{app.label}</h1>
          <p className="app-company">By {app.company}</p>
          <button className="download-button">Download App</button>
        </div>
      </div>
      
      <div className="app-info-section">
        <h2>Description</h2>
        <p>{app.description}</p>
        
        <h2>System Requirements</h2>
        <ul>
          {app.systemRequirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        
        <h2>Additional Information</h2>
        <p>This app {app.additionalInfo}</p>
      </div>
    </div>
  );
};

// Main app component with search functionality
const AppSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(apps);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === "") {
      setSearchResults(apps);
    } else {
      const filteredApps = apps.filter((app) => 
        app.label.toLowerCase().includes(term) || 
        app.description.toLowerCase().includes(term) ||
        app.company.toLowerCase().includes(term)
      );
      setSearchResults(filteredApps);
    }
  };

  return (
    <div className="app-search-container">
      <h1>AI App Search</h1>
      <input
        type="text"
        placeholder="Search for apps..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

// Main App component with routing
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<AppSearch />} />
          <Route path="/app/:id" element={<AppDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

// Add missing imports
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default App;
