// import AISearchBar from "./AISearchBar";
// import { CustomWalletMultiButton } from "./connection";

// import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';

// const NavBar = () => {
//   return (
//     <nav className="bg-black p-4 shadow-md rounded-b-lg w-full">
//       <div className="flex justify-between items-center w-full px-4">
//         {/* Left side: Logo */}
//         <div className="flex items-center mr-4">
//           <a href="#" className="flex items-center">
//             <img 
//               src={AtembaLogo} 
//               alt="Atemba Logo" 
//               // className="h-30 w-20 mr-3"
//               style={{width: "115px", height: "150px"}}
//             />
//              <p className="text-5xl font-bold text-blue-700 italic ml-3">
//                ATEMBA <br /> STORE
//              </p>
//           </a>
//         </div>

//         {/* Center: Search Bar */}
//         <div className="flex-grow mx-2">
//           <AISearchBar />
//         </div>

//         {/* Right side: Navigation Links */}
//         <div className="flex items-center space-x-4">
//           <a href="#" className="text-gray-300 hover:text-blue-500">Home</a>
//           <a href="#" className="text-gray-300 hover:text-blue-500">About</a>
//           <a href="#" className="text-gray-300 hover:text-blue-500">Services</a>
//           <a href="#" className="text-gray-300 hover:text-blue-500">Contact</a>
          
//           {/* Connect Wallet Button */}
//           <CustomWalletMultiButton />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
















import AISearchBar from "./AISearchBar";
import { CustomWalletMultiButton } from "./connection";
import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';

const NavBar = () => {
  return (
    <nav className="bg-black p-2 xs:p-3 sm:p-4 shadow-md rounded-b-lg w-full">
      <div className="flex flex-col xs:flex-col sm:flex-row justify-between items-center w-full px-2 xs:px-3 sm:px-4">
        {/* Left side: Logo */}
        <div className="flex items-center mb-3 sm:mb-0 sm:mr-4">
          <a href="#" className="flex items-center">
            <img 
              src={AtembaLogo} 
              alt="Atemba Logo" 
              className="h-12 w-auto xs:h-10 xs:w-10 iphone11:h-10 iphone11:w-10 sm:h-5 sm:w-5 md:h-10 md:w-10"
            />
            <div className="ml-2 xs:ml-3">
              <p className="text-xl xs:text-2xl iphone11:text-3xl md:text-4xl font-bold text-blue-700 italic">
                ATEMBA
              </p>
              <p className="text-xl xs:text-2xl iphone11:text-3xl md:text-4xl font-bold text-blue-700 italic">
                STORE
              </p>
            </div>
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow w-full sm:w-auto mb-3 sm:mb-0 sm:mx-2">
          <AISearchBar />
        </div>

        {/* Right side: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 xs:gap-3 sm:gap-4">
          {/* Hide some links on smaller screens */}
          <a href="#" className="text-gray-300 hover:text-blue-500 text-sm xs:text-base">Home</a>
          <a href="#" className="hidden xs:inline text-gray-300 hover:text-blue-500 text-sm xs:text-base">About</a>
          <a href="#" className="hidden iphone11:inline text-gray-300 hover:text-blue-500 text-sm xs:text-base">Services</a>
          <a href="#" className="hidden sm:inline text-gray-300 hover:text-blue-500 text-sm xs:text-base">Contact</a>
          
          {/* Connect Wallet Button - Custom styling should be adjusted in the component */}
          <div className="ml-2 xs:ml-0">
            <CustomWalletMultiButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 