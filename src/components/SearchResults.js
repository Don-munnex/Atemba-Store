import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const SearchResults = ({ searchResults }) => {
    return (_jsx("div", { className: "absolute z-10 w-full bg-white border rounded-b-lg shadow-lg max-h-96 overflow-y-auto", children: searchResults.length > 0 ? (searchResults.map((app) => (_jsxs(Link, { to: `/product/${app.id}`, className: "flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer \r\n                       transition-colors duration-200 space-x-4", children: [app.url && (_jsx("img", { src: app.url, alt: app.title, className: "w-10 h-10 object-cover rounded-md" })), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: app.title }), app.description && _jsx("div", { className: "text-sm text-gray-600", children: app.description }), app.company && _jsxs("div", { className: "text-xs text-gray-500", children: ["By ", app.company] })] })] }, app.id)))) : (_jsx("div", { className: "p-4 text-center text-gray-500", children: "No results found" })) }));
};
export default SearchResults;
