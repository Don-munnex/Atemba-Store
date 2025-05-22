// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import AISearchBar from "./AISearchBar";
// import { CustomWalletMultiButton } from "./connection";
// import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';
// const NavBar = () => {
//     return (_jsx("nav", { className: "bg-black p-4 shadow-md rounded-b-lg w-full", children: _jsxs("div", { className: "flex justify-between items-center w-full px-4", children: [_jsx("div", { className: "flex items-center mr-4", children: _jsxs("a", { href: "#", className: "flex items-center", children: [_jsx("img", { src: AtembaLogo, alt: "Atemba Logo", 
//                                 // className="h-30 w-20 mr-3"
//                                 style: { width: "115px", height: "150px" } }), _jsxs("p", { className: "text-5xl font-bold text-blue-700 italic ml-3", children: ["ATEMBA ", _jsx("br", {}), " STORE"] })] }) }), _jsx("div", { className: "flex-grow mx-2", children: _jsx(AISearchBar, {}) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Home" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "About" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Services" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Contact" }), _jsx(CustomWalletMultiButton, {})] })] }) }));
// };
// export default NavBar;











import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import AISearchBar from "./AISearchBar";
import { CustomWalletMultiButton } from "./connection";
import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (_jsx("nav", { 
        className: "bg-black p-4 shadow-md rounded-b-lg w-full sticky top-0 z-50", 
        children: _jsxs("div", { 
            className: "container mx-auto", 
            children: [
                _jsxs("div", { 
                    className: "flex justify-between items-center w-full", 
                    children: [
                        // Left side: Logo
                        _jsx("div", { 
                            className: "flex items-center mr-4", 
                            children: _jsxs("a", { 
                                href: "#", 
                                className: "flex items-center", 
                                children: [
                                    _jsx("img", { 
                                        src: AtembaLogo, 
                                        alt: "Atemba Logo", 
                                        style: { width: "75px", height: "90px" },
                                        className: "lg:w-[115px] lg:h-[150px]"
                                    }), 
                                    // ATEMBA STORE text - hidden on mobile
                                    _jsxs("p", { 
                                        className: "hidden md:block text-3xl lg:text-5xl font-bold text-blue-700 italic ml-3", 
                                        children: ["ATEMBA ", _jsx("br", {}), " STORE"] 
                                    })
                                ] 
                            }) 
                        }),
                        
                        // Center: Search Bar (always visible)
                        _jsx("div", { 
                            className: "flex-grow mx-2 max-w-xs md:max-w-md lg:max-w-lg", 
                            children: _jsx(AISearchBar, {}) 
                        }),
                        
                        // Mobile menu button
                        _jsx("button", {
                            onClick: toggleMenu,
                            className: "block md:hidden text-gray-300 hover:text-blue-500 focus:outline-none",
                            children: _jsx("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: isMenuOpen ? 
                                    _jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }) :
                                    _jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                            })
                        }),
                        
                        // Desktop Navigation Links
                        _jsxs("div", { 
                            className: "hidden md:flex items-center space-x-4", 
                            children: [
                                _jsx("a", { 
                                    href: "#", 
                                    className: "text-gray-300 hover:text-blue-500", 
                                    children: "Home" 
                                }),
                                _jsx("a", { 
                                    href: "#", 
                                    className: "text-gray-300 hover:text-blue-500", 
                                    children: "About" 
                                }),
                                _jsx("a", { 
                                    href: "#", 
                                    className: "text-gray-300 hover:text-blue-500", 
                                    children: "Services" 
                                }),
                                _jsx("a", { 
                                    href: "#", 
                                    className: "text-gray-300 hover:text-blue-500", 
                                    children: "Contact" 
                                }),
                                _jsx(CustomWalletMultiButton, {})
                            ] 
                        })
                    ] 
                }),
                
                // Mobile Navigation Menu (dropdown)
                isMenuOpen && _jsx("div", {
                    className: "block md:hidden mt-4 py-3 border-t border-gray-700",
                    children: _jsxs("div", {
                        className: "flex flex-col space-y-3",
                        children: [
                            _jsx("a", { 
                                href: "#", 
                                className: "text-gray-300 hover:text-blue-500", 
                                children: "Home" 
                            }),
                            _jsx("a", { 
                                href: "#", 
                                className: "text-gray-300 hover:text-blue-500", 
                                children: "About" 
                            }),
                            _jsx("a", { 
                                href: "#", 
                                className: "text-gray-300 hover:text-blue-500", 
                                children: "Services" 
                            }),
                            _jsx("a", { 
                                href: "#", 
                                className: "text-gray-300 hover:text-blue-500", 
                                children: "Contact" 
                            }),
                            _jsx("div", {
                                className: "mt-3",
                                children: _jsx(CustomWalletMultiButton, {})
                            })
                        ]
                    })
                })
            ] 
        }) 
    }));
};

export default NavBar;