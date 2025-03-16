import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useLocation, Link } from "react-router-dom";
import AppTemplate from "../components/apps/AppTemplate";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { apps, Games } from "./Apps";
const ProductPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const productData = location.state;
    // Fallback to finding product in both apps and Games arrays if state isn't available
    const findProductById = () => {
        if (!id)
            return null;
        // First check in apps array
        const appProduct = apps.find(app => app.id === parseInt(id));
        if (appProduct)
            return appProduct;
        // Then check in Games array
        const gameProduct = Games.find(game => game.id === parseInt(id));
        if (gameProduct)
            return gameProduct;
        // If not found in either array
        return null;
    };
    const product = productData || findProductById();
    if (!product) {
        return (_jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", children: [_jsx(NavBar, {}), _jsx("div", { className: "flex-grow flex items-center justify-center", children: _jsxs("div", { className: "text-center p-10", children: [_jsx("h2", { className: "text-2xl mb-4", children: "Product not found" }), _jsx(Link, { to: "/", className: "text-blue-400 hover:underline", children: "Return to home" })] }) }), _jsx(Footer, {})] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-black text-white flex flex-col", children: [_jsx(NavBar, {}), _jsxs("div", { className: "flex-grow container mx-auto py-8", children: [_jsx(Link, { to: "/", className: "text-blue-400 hover:underline mb-4 inline-block", children: _jsx("span", { className: "bg-black px-3 py-1", children: "\u2190 Back to all products" }) }), _jsx(AppTemplate, { id: product.id, label: product.label, company: product.company, image: product.url, description: product.description, systemRequirements: product.systemRequirements, screenshots: product.screenshots || [], additionalInfo: product.additionalInfo, link: product.link })] }), _jsx(Footer, {})] }));
};
export default ProductPage;
