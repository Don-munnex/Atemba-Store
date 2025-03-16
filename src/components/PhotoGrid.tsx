import React from "react";
import { useNavigate } from "react-router-dom";
import { apps } from "./Apps";

// Define the interface to match your actual apps data structure
interface AppDetails {
  id: number;
  url: string;  // This is where your image URL is stored
  alt: string;  // This is the alt text for the image
  label: string;
  description: string;
  systemRequirements: string[];
  screenshots?: { url: string; alt: string }[];
  additionalInfo: string;
  company: string;
  link: string;
}

interface PhotoGridProps {
  photos: AppDetails[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos = apps }) => {
  const navigate = useNavigate();

  const handlePhotoClick = (photo: AppDetails) => {
    // Navigate to the product page with the photo data
    navigate(`/product/${photo.id}`, { state: photo });
  };

  return (
    <div className="grid grid-cols-7 gap-10 p-5">
      {photos.map((photo) => (
        <div 
          key={photo.id} 
          className="relative cursor-pointer transition-transform hover:scale-105"
          onClick={() => handlePhotoClick(photo)}
        >
          <img 
            src={photo.url}
            alt={photo.alt}
            className="object-cover w-50 h-25 rounded-lg shadow-md"
          />
          {photo.label && (
            <div className="mt-2 text-center text-sm font-medium text-white">
              {photo.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;




