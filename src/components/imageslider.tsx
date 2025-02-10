// import React from 'react';
// import Slider from 'react-slick';
// import image1 from '/src/components/Images/image1.jpg';
// import image2 from '/src/components/Images/image2.jpg';
// import image3 from '/src/components/Images/image3.jpg';
// import image4 from '/src/components/Images/image4.jpg';

// // Import slick-carousel CSS files
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//     image1,
//     image2,
//     image3,
//     image4
// ];

// const ImageSlider: React.FC = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,    // This ensures only one image shows at a time
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="w-full max-w-lg mx-auto">
//             <Slider {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index} className="slide-container">
//                         <img 
//                             src={image} 
//                             alt={`Slide ${index}`} 
//                             className="w-full h-auto rounded-lg" 
//                         />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ImageSlider;

// // git add .
// // git commit -m "i updatad the directory of the image src in Imageslider" 
// // git push origin master


import React from 'react';
import Slider from 'react-slick';
import "../components/styles/slick-custom.css"; // Custom styles for slick slider
import image1 from '/src/components/Images/image1.jpg';
import image2 from '/src/components/Images/image2.jpg';
import image3 from '/src/components/Images/image3.jpg';
import image4 from '/src/components/Images/image4.jpg';

// Import slick-carousel CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image sources array
const images: string[] = [image1, image2, image3, image4];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,    // Show 3 images at once
    slidesToScroll: 1,
    centerMode: true,    // Center the active image
    focusOnSelect: true, // Allow focus on an image by clicking
    centerPadding: '0',  // Remove extra space around center image
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Show 1 slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-[100px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              aria-label={`Image slide ${index + 1}`}
              tabIndex={0}  // Ensures image is focusable
              className="w-full h-auto rounded-lg transition-all duration-300 ease-in-out transform scale-90 focus:ring-4 focus:ring-purple-500 focus:outline-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
