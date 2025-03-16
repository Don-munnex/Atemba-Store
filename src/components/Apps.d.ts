interface AppDetails {
    id: number;
    url: string;
    alt: string;
    label: string;
    description: string;
    company: string;
    systemRequirements: string[];
    additionalInfo: string;
    screenshots: {
        url: string;
        alt: string;
    }[];
    link: string;
}
export declare const apps: AppDetails[];
export declare const Games: AppDetails[];
export {};
