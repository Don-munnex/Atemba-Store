import React from 'react';
import Slider from 'react-slick';
import "../components/styles/slick-custom.css"; // Custom styles for slick slider
import {apps} from './Apps';


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
    {apps.map((app, index) => (
      <div key={index} className="relative">
        <img
          src={app.url}
          alt={`Slide ${index + 1}`}
          aria-label={`Image slide ${index + 1}`}
          tabIndex={0}  // Ensures image is focusable
          className="w-full h-auto rounded-lg transition-all duration-300 ease-in-out transform scale-90 focus:ring-4 focus:ring-purple-500 focus:outline-none"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
          <h3 className="text-lg font-bold">{app.label}</h3>
          <p className="text-sm">{app.description}</p>
          <a
            href={`/product/${app.id}`}
            className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Get App
          </a>
        </div>
      </div>
    ))}
  </Slider>
</div>
  );
};

export default ImageSlider;





























// import React from 'react';
// import Slider from 'react-slick';
// import "../components/styles/slick-custom2.css";
// import image1 from '/src/components/Images/image1.jpg';
// import image2 from '/src/components/Images/image2.jpg';
// import image3 from '/src/components/Images/image3.jpg';
// import image4 from '/src/components/Images/image4.jpg';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images: string[] = [image1, image2, image3, image4];

// const ImageSlider: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: false,  // Disabled center mode
//     focusOnSelect: true,
//     rtl: false,  // Keep normal left-to-right direction
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     beforeChange: (current: number, next: number) => {
//       // You can add additional animation logic here if needed
//     },
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto mt-[100px]">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="slide-wrapper">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               aria-label={`Image slide ${index + 1}`}
//               tabIndex={0}
//               className="carousel-image"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageSlider;
