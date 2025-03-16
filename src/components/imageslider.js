import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import "../components/styles/slick-custom.css"; // Custom styles for slick slider
import { apps } from './Apps';
const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 images at once
        slidesToScroll: 1,
        centerMode: true, // Center the active image
        focusOnSelect: true, // Allow focus on an image by clicking
        centerPadding: '0', // Remove extra space around center image
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (_jsx("div", { className: "w-full max-w-3xl mx-auto mt-[100px]", children: _jsx(Slider, { ...settings, children: apps.map((app, index) => (_jsxs("div", { className: "relative", children: [_jsx("img", { src: app.url, alt: `Slide ${index + 1}`, "aria-label": `Image slide ${index + 1}`, tabIndex: 0, className: "w-full h-auto rounded-lg transition-all duration-300 ease-in-out transform scale-90 focus:ring-4 focus:ring-purple-500 focus:outline-none" }), _jsxs("div", { className: "absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white", children: [_jsx("h3", { className: "text-lg font-bold", children: app.label }), _jsx("p", { className: "text-sm", children: app.description }), _jsx("a", { href: `/product/${app.id}`, className: "inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700", children: "Get App" })] })] }, index))) }) }));
};
export default ImageSlider;
