import React, {useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import '../components/ArrowAnimation.css'; // Import the CSS file for animation
import {apps} from "./Apps";
import { useNavigate } from "react-router-dom";

interface Photo {
  id: string;
  url: string;
}


const TriangularImageLayout: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handlePhotoClick = (photo: Photo) => {
    // Navigate to the product page with the photo data
    navigate(`/product/${photo.id}`, { state: photo });
  };

  return (
    <div className="flex justify-center w-full mt-20"> {/* Added wrapper div */}
      <div className="flex flex-right justify-center items-center  border-b-8 border-l-8 border-blue-700 border rounded-lg bg-gray-850 w-[90%] h-[400px]">
        <div>
          <div className="justify-start">
            <h1 style={{fontSize: "50px"}} className="font-bold text-blue-700">The premier destination <br></br> for your mini apps</h1>
          </div>
        </div>
        
        <div>
          <FaArrowRight className="text-blue-700 ml-5 animate-arrow" size={50} />
        </div>

        <div className="grid grid-cols-7 grid-rows-5 gap-3 ml-20 w-80 h-80">
          {/* Rest of the code stays exactly the same */}
          {/* Bottom Center */}
          
            <img 
            src= {apps[4].url}
            alt="Image4" 
            className="col-start-4 row-start-1 rounded-lg w-15 h-15 cursor-pointer "
            onClick={() => handlePhotoClick({ ...apps[4], id: apps[4].id.toString() })}
            />
         
          {/* Top Left */}
          <img 
          src= {apps[2].url}
          alt="Image2" 
          className="col-start-3 row-start-2 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[2], id: apps[2].id.toString() })}
          />

          {/* Top Right */}
          <img 
          src= {apps[3].url}
          alt="Image3" 
          className="col-start-2 row-start-3 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[3], id: apps[3].id.toString() })}
          />

          {/* Top Center */}
          <img 
          src= {apps[1].url}
          alt="Image1" 
          className="col-start-1 row-start-4 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[1], id: apps[1].id.toString() })}
          />

          <img 
          src= {apps[9].url}
          alt="Image9" 
          className="col-start-2 row-start-5 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[9], id: apps[9].id.toString() })}
          />

          <img 
          src= {apps[0].url} 
          alt="Image0" 
          className="col-start-3 row-start-6 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[0], id: apps[0].id.toString() })}
          />

          <img 
          src= {apps[7].url} 
          alt="Image7" 
          className="col-start-4 row-start-7 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[7], id: apps[7].id.toString() })}
          />

          <img 
          src= {apps[6].url}
          alt="Image6" 
          className="col-start-5 row-start-6 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[6], id: apps[6].id.toString() })}
          />

          <img 
          src= {apps[5].url}
          alt="Image5" 
          className="col-start-6 row-start-5 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[5], id: apps[5].id.toString() })}
          />

          <img 
          src= {apps[8].url}
          alt="Image8" 
          className="col-start-7 row-start-4 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[8], id: apps[8].id.toString() })}
          />

          <img 
          src= {apps[10].url} 
          alt="Image4" 
          className="col-start-6 row-start-3 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[10], id: apps[10].id.toString() })}
          />

          <img 
          src= {apps[11].url}
          alt="Image4" 
          className="col-start-5 row-start-2 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[11], id: apps[11].id.toString() })}
          />

          {/* inner triangle layout */}

          <img 
          src= {apps[12].url} 
          alt="Image4" 
          className="col-start-4 row-start-3 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[12], id: apps[12].id.toString() })}
          />

          <img 
          src= {apps[13].url}
          alt="Image4" 
          className="col-start-3 row-start-4 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[13], id: apps[13].id.toString() })}
          />

          <img 
          src= {apps[9].url}
          alt="Image4" 
          className="col-start-4 row-start-5 rounded-lg w-15 h-15 cursor-pointer"
          onClick={() => handlePhotoClick({ ...apps[9], id: apps[9].id.toString() })}
          />

          <img 
          src= {apps[10].url}
          alt="Image4" 
          className="col-start-5 row-start-4 rounded-lg w-15 h-15 cursor-pointer" 
          onClick={() => handlePhotoClick({ ...apps[10], id: apps[10].id.toString() })}
          />
          
          
        </div> 
      </div>
    </div>
  );
};

export default TriangularImageLayout;