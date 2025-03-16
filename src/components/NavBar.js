import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AISearchBar from "./AISearchBar";
import { CustomWalletMultiButton } from "./connection";
import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';
const NavBar = () => {
    return (_jsx("nav", { className: "bg-black p-4 shadow-md rounded-b-lg w-full", children: _jsxs("div", { className: "flex justify-between items-center w-full px-4", children: [_jsx("div", { className: "flex items-center mr-4", children: _jsxs("a", { href: "#", className: "flex items-center", children: [_jsx("img", { src: AtembaLogo, alt: "Atemba Logo", 
                                // className="h-30 w-20 mr-3"
                                style: { width: "115px", height: "150px" } }), _jsxs("p", { className: "text-5xl font-bold text-blue-700 italic ml-3", children: ["ATEMBA ", _jsx("br", {}), " STORE"] })] }) }), _jsx("div", { className: "flex-grow mx-2", children: _jsx(AISearchBar, {}) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Home" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "About" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Services" }), _jsx("a", { href: "#", className: "text-gray-300 hover:text-blue-500", children: "Contact" }), _jsx(CustomWalletMultiButton, {})] })] }) }));
};
export default NavBar;
