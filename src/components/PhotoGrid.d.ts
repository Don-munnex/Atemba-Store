import React from "react";
interface AppDetails {
    id: number;
    url: string;
    alt: string;
    label: string;
    description: string;
    systemRequirements: string[];
    screenshots?: {
        url: string;
        alt: string;
    }[];
    additionalInfo: string;
    company: string;
    link: string;
}
interface PhotoGridProps {
    photos: AppDetails[];
}
declare const PhotoGrid: React.FC<PhotoGridProps>;
export default PhotoGrid;
