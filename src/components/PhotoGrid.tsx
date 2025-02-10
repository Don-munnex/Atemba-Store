// src/PhotoGrid.tsx

import React from "react";

// Define the structure of a photo item
interface Photo {
  id: number;
  url: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-20 p-10">
      {photos.map((photo) => (
        <div key={photo.id} className="relative">
          <img
            src={photo.url}
            alt={photo.alt}
            className="object-cover w-full h-full rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
