import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import "./index.css";
// import "../src/components/major"
// // import DarkModeToggle from "../src/components/major";
// import NavBar from "./components/NavBar";
// import ImageSlider from "./components/imageslider";
// import PhotoGrid from "./components/PhotoGrid";
// import TriangleImageLayout from "./components/TriangleImageLayout";
// import AnimatedMotionSection from "./components/MotionSection";
// import { apps } from "./components/Photos";
// import Footer from "./components/Footer";
// function App() {
//   return (
//     <div className="min-h-screen bg-black">
//        <div>
//        <NavBar />                       
//        <TriangleImageLayout />
//        <ImageSlider />
//        </div>
//        <br></br>                        
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//       <div className="mt-20">
//       <PhotoGrid photos={apps} />
//       <AnimatedMotionSection />
//       <Footer />
//       </div>
//     </div>
//   );
// };
// export default App;
import "../src/components/major";
// import DarkModeToggle from "../src/components/major";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/imageslider";
import PhotoGrid from "./components/PhotoGrid";
import TriangleImageLayout from "./components/TriangleImageLayout";
import AnimatedMotionSection from "./components/MotionSection";
import { apps } from "./components/Apps";
import Footer from "./components/Footer";
import ProductPage from "../src/components/ProductPage";
function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx(NavBar, {}), _jsx(TriangleImageLayout, {}), _jsx(ImageSlider, {})] }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsxs("div", { className: "mt-20", children: [_jsx(PhotoGrid, { photos: apps }), _jsx(AnimatedMotionSection, {}), _jsx(Footer, {})] })] }));
}
function App() {
    return (_jsx(Router, { children: _jsx("div", { className: "min-h-screen bg-black", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/product/:id", element: _jsx(ProductPage, {}) })] }) }) }));
}
export default App;
