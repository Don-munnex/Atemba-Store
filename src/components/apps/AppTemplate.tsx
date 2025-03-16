import React from "react";
import Slider from 'react-slick';
import "../styles/Product-slick.css";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

interface AppDetails {
  id: number;
  label: string; 
  image: string;
  description: string;
  systemRequirements: string[];
  screenshots: { url: string; alt: string }[];
  additionalInfo: string;
  company: string;
  link: string;
}

const AppTemplate: React.FC<AppDetails> = ({
  label,
  image,
  description,
  systemRequirements, 
  screenshots,
  additionalInfo,
  company,
  link,
}) => {
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-300 to-gray-500 shadow-lg rounded-lg">
      {/* App Name and Image */}
      <div className="text-center">
        <div className="flex flex-row justify-center items-center">
          <img src={image} alt={label} className=" w-40 h-40 object-cover rounded-lg" />
          <div className="ml-2 mb-4">
            <h1 className="text-2xl text-blue-700 font-bold ml-2" style={{fontSize: "30px"}}>{label}</h1>
            <p className="text-sm text-black float-left ml-3 mt-4" style={{fontStyle: "oblique", fontFamily: "cursive"}}>{company}</p>
            <br></br>
            <button 
              onClick={() => window.open(link)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Download
            </button>
          </div>
        </div>
      </div>


      {/* Screenshots Carousel */}
      {screenshots.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4 text-black border-b-2 border-blue-600 pb-2 inline-block">Screenshots</h2>
          <div className="max-w-3xl mx-auto mt-4 rounded-md p-4">
            <Slider {...screenshotSliderSettings}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="px-0.5">
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt || `Screenshot ${index + 1}`}
                    className=" object-cover rounded-lg mx-auto"
                    style={{ width: '200px', height: '400px' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}




      {/* Description */}
      <div className="mt-20">
        <h2 className="text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block">Description</h2>
        <div className="mt-4 text-black border border-gray-400 rounded-md p-4">
          <p>{description}</p>
        </div>
      </div>

      {/* System Requirements */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block">System Requirements</h2>
        <div className="mt-4 border border-gray-400 rounded-md p-4">
          <ul className="list-disc list-inside text-gray-600">
            {systemRequirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    

      {/* Additional Information */}
      <div className="mt-20">
        <h2 className="text-xl font-semibold text-black border-b-2 border-blue-600 pb-2 inline-block">Additional Information</h2>
        <div className="mt-4 border border-gray-400 rounded-md p-4">
          <p className="text-gray-600">{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;
















