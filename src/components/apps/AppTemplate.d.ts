import React from "react";
import "../styles/Product-slick.css";
interface AppDetails {
    id: number;
    label: string;
    image: string;
    description: string;
    systemRequirements: string[];
    screenshots: {
        url: string;
        alt: string;
    }[];
    additionalInfo: string;
    company: string;
    link: string;
}
declare const AppTemplate: React.FC<AppDetails>;
export default AppTemplate;
