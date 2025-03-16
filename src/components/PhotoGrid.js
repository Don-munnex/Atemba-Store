import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { apps } from "./Apps";
const PhotoGrid = ({ photos = apps }) => {
    const navigate = useNavigate();
    const handlePhotoClick = (photo) => {
        // Navigate to the product page with the photo data
        navigate(`/product/${photo.id}`, { state: photo });
    };
    return (_jsx("div", { className: "grid grid-cols-7 gap-10 p-5", children: photos.map((photo) => (_jsxs("div", { className: "relative cursor-pointer transition-transform hover:scale-105", onClick: () => handlePhotoClick(photo), children: [_jsx("img", { src: photo.url, alt: photo.alt, className: "object-cover w-50 h-25 rounded-lg shadow-md" }), photo.label && (_jsx("div", { className: "mt-2 text-center text-sm font-medium text-white", children: photo.label }))] }, photo.id))) }));
};
export default PhotoGrid;
