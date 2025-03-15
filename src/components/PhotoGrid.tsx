


import React from "react";
import { useNavigate } from "react-router-dom";

// Define the structure of a photo item (make sure this matches your apps structure)
interface Photo {
  id: number;
  url: string;
  alt: string;
  label?: string;
  description: string;
  company: string;
  systemRequirements: string[];
  screenshots?: string[];
  additionalInfo: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const navigate = useNavigate();

  const handlePhotoClick = (photo: Photo) => {
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



