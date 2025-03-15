import AISearchBar from "./AISearchBar";
import { CustomWalletMultiButton } from "./connection";

import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';

const NavBar = () => {
  return (
    <nav className="bg-black p-4 shadow-md rounded-b-lg w-full">
      <div className="flex justify-between items-center w-full px-4">
        {/* Left side: Logo */}
        <div className="flex items-center mr-4">
          <a href="#" className="flex items-center">
            <img 
              src={AtembaLogo} 
              alt="Atemba Logo" 
              // className="h-30 w-20 mr-3"
              style={{width: "115px", height: "150px"}}
            />
             <p className="text-5xl font-bold text-blue-700 italic ml-3">
               ATEMBA <br /> STORE
             </p>
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow mx-2">
          <AISearchBar />
        </div>

        {/* Right side: Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-300 hover:text-blue-500">About</a>
          <a href="#" className="text-gray-300 hover:text-blue-500">Services</a>
          <a href="#" className="text-gray-300 hover:text-blue-500">Contact</a>
          
          {/* Connect Wallet Button */}
          <CustomWalletMultiButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;