import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import "../styles/Product-slick.css";
const AppTemplate = ({ label, image, description, systemRequirements, screenshots, additionalInfo, company, link, }) => {
    const screenshotSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-300 to-gray-500 shadow-lg rounded-lg", children: [_jsx("div", { className: "text-center", children: _jsxs("div", { className: "flex flex-row justify-center items-center", children: [_jsx("img", { src: image, alt: label, className: " w-40 h-40 object-cover rounded-lg" }), _jsxs("div", { className: "ml-2 mb-4", children: [_jsx("h1", { className: "text-2xl text-blue-700 font-bold ml-2", style: { fontSize: "30px" }, children: label }), _jsx("p", { className: "text-sm text-black float-left ml-3 mt-4", style: { fontStyle: "oblique", fontFamily: "cursive" }, children: company }), _jsx("br", {}), _jsx("button", { onClick: () => window.open(link), className: "mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105", children: "Download" })] })] }) }), screenshots.length > 0 && (_jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-black border-b-2 border-blue-600 pb-2 inline-block", children: "Screenshots" }), _jsx("div", { className: "max-w-3xl mx-auto mt-4 rounded-md p-4", children: _jsx(Slider, { ...screenshotSliderSettings, children: screenshots.map((screenshot, index) => (_jsx("div", { className: "px-0.5", children: _jsx("img", { src: screenshot.url, alt: screenshot.alt || `Screenshot ${index + 1}`, className: " object-cover rounded-lg mx-auto", style: { width: '200px', height: '400px' } }) }, index))) }) })] })), _jsxs("div", { className: "mt-20", children: [_jsx("h2", { className: "text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block", children: "Description" }), _jsx("div", { className: "mt-4 text-black border border-gray-400 rounded-md p-4", children: _jsx("p", { children: description }) })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block", children: "System Requirements" }), _jsx("div", { className: "mt-4 border border-gray-400 rounded-md p-4", children: _jsx("ul", { className: "list-disc list-inside text-gray-600", children: systemRequirements.map((req, index) => (_jsx("li", { children: req }, index))) }) })] }), _jsxs("div", { className: "mt-20", children: [_jsx("h2", { className: "text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block", children: "Additional Information" }), _jsx("div", { className: "mt-4 border border-gray-400 rounded-md p-4", children: _jsx("p", { className: "text-gray-600", children: additionalInfo }) })] })] }));
};
export default AppTemplate;
