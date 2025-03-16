import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apps, Games } from './Apps';
// interface AppItem {
//   id: number;
//   url: string;
//   alt: string;
//   label?: string;
// }
const AnimatedMotionSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    // const Photo: React.FC<AppItem> = ({url, alt, label}) => {
    //   return (
    //     <div>
    //       <img src={url} alt={alt} />
    //       <p>{label}</p>
    //     </div>
    //   );
    // };
    // Calculate dimensions for seamless scrolling
    const totalAppsItems = apps.length;
    // const totalGamesItems = Games.length;
    const itemsPerRow = 4;
    const appsRows = Math.ceil(totalAppsItems / itemsPerRow);
    // const gamesRows = Math.ceil(totalGamesItems / itemsPerRow);
    // Combined height/width of all photos to ensure continuous scrolling
    const totalAppsHeight = appsRows * 120; // Assuming each row is approximately 120px tall
    const totalGamesWidth = itemsPerRow * 120; // Assuming each column is approximately 120px wide
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setScrollPosition((prevPosition) => {
                const newPosition = prevPosition + 1;
                // Reset position when we've scrolled through complete content
                return newPosition % Math.max(totalAppsHeight, totalGamesWidth);
            });
        }, 50); // Adjust speed by changing this value
        return () => clearInterval(scrollInterval);
    }, [totalAppsHeight, totalGamesWidth]);
    // Create continuous arrays by duplicating apps and games for seamless looping
    const continuousApps = [...apps, ...apps];
    const continuousGames = [...Games, ...Games];
    return (_jsx("div", { className: "flex justify-center w-full mt-10 md:mt-20", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-center items-center border-2 md:border-4 lg:border-8 border-blue-700 rounded-lg bg-gray-850 w-[95%] md:w-[90%] h-auto md:h-[490px]", children: [_jsxs("div", { className: "w-full md:w-[50%] h-[240px] md:h-[480px] bg-blue-500 overflow-hidden relative", children: [_jsx("div", { className: "absolute top-0 left-0 z-10 bg-blue-700 text-white px-4 py-1 rounded-br-lg font-bold", children: "Apps" }), _jsx("div", { className: "absolute top-0 transition-transform duration-500 ease-linear", style: {
                                transform: `translateY(-${scrollPosition}px)`,
                                width: '100%'
                            }, children: _jsx("div", { className: "grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-2 p-2 md:p-3 lg:p-4", children: continuousApps.map((app, index) => (_jsx(Link, { to: `/product/${app.id}`, children: _jsxs("div", { className: "relative cursor-pointer p-1 bg-white bg-opacity-10 rounded", children: [_jsx("img", { src: app.url, alt: app.alt, className: "object-cover w-full h-16 xs:h-20 md:h-24 lg:h-28 rounded" }), app.label && (_jsx("div", { className: "mt-1 md:mt-2 text-center text-xs xs:text-sm md:text-sm lg:text-base font-medium text-white truncate", children: app.label }))] }) }, `vertical-${app.id}-${index}`))) }) })] }), _jsxs("div", { className: "w-full md:w-[50%] h-[240px] md:h-[480px] bg-blue-500 overflow-hidden relative", children: [_jsx("div", { className: "absolute top-0 left-0 z-10 bg-blue-700 text-white px-4 py-1 rounded-br-lg font-bold", children: "Games" }), _jsx("div", { className: "absolute left-0 transition-transform duration-500 ease-linear", style: {
                                transform: `translateX(-${scrollPosition}px)`,
                                width: 'max-content'
                            }, children: _jsx("div", { className: "grid  grid-rows-2 grid-cols-10 xs:grid-rows-3 md:grid-rows-4 gap-2 p-2 md:p-3 lg:p-4", children: continuousGames.map((game, index) => (_jsx(Link, { to: `/product/${game.id}`, children: _jsxs("div", { className: "relative cursor-pointer p-1 bg-white bg-opacity-10 rounded", children: [_jsx("img", { src: game.url, alt: game.alt, className: "object-cover w-16 xs:w-20 md:w-24 lg:w-28 h-16 xs:h-20 md:h-24 lg:h-28 rounded" }), game.label && (_jsx("div", { className: "mt-1 md:mt-2 text-center text-xs xs:text-sm md:text-sm lg:text-base font-medium text-white truncate", children: game.label }))] }) }, `horizontal-${game.id}-${index}`))) }) })] })] }) }));
};
export default AnimatedMotionSection;
