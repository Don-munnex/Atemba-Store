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
  return (
    <>
      <div>
        <NavBar />
        <TriangleImageLayout />
        <ImageSlider />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="mt-20">
        <PhotoGrid photos={apps} />
        <AnimatedMotionSection />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






























