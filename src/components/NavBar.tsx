
// import AISearchBar from "./AISearchBar";
// import { CustomWalletMultiButton } from "./connection";
// import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';
// import { useState } from 'react';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-black p-2 xs:p-3 sm:p-4 shadow-md rounded-b-lg w-full sticky top-0 z-50">
//       <div className="container mx-auto">
//         <div className="flex flex-col xs:flex-row justify-between items-center w-full">
//           {/* Left side: Logo */}
//           <div className="flex items-center mb-3 xs:mb-0">
//             <a href="/" className="flex items-center">
//               <img 
//                 src={AtembaLogo} 
//                 alt="Atemba Logo" 
//                 className="h-8 w-auto xs:h-8 iphone11:h-9 md:h-10 lg:h-12"
//               />
//               <div className="ml-2 xs:ml-3">
//                 <div className="hidden xs:flex flex-col xs:flex-row">
//                   <p className="text-xl xs:text-xl iphone11:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 italic">
//                     ATEMBA
//                   </p>
//                   <p className="text-xl xs:text-xl iphone11:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 italic xs:ml-2">
//                     STORE
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="block xs:hidden absolute right-4 top-4">
//             <button 
//               onClick={toggleMenu}
//               className="text-gray-300 hover:text-blue-500 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Center: Search Bar - Hidden on mobile when menu is open */}
//           <div className={`${isMenuOpen ? 'hidden' : 'flex'} xs:flex w-full xs:w-auto md:w-1/2 lg:w-2/5 my-3 xs:my-0 px-2`}>
//             <AISearchBar />
//           </div>

//           {/* Right side: Navigation Links */}
//           <div className={`${isMenuOpen ? 'flex' : 'hidden'} xs:flex flex-col xs:flex-row items-center justify-center space-y-3 xs:space-y-0 xs:space-x-4 w-full xs:w-auto mt-3 xs:mt-0`}>
//             <a href="/" className="text-gray-300 hover:text-blue-500 text-sm iphone11:text-base">Home</a>
//             <a href="/about" className="text-gray-300 hover:text-blue-500 text-sm iphone11:text-base">About</a>
//             <a href="/services" className="text-gray-300 hover:text-blue-500 text-sm iphone11:text-base">Services</a>
//             <a href="/contact" className="hidden md:inline text-gray-300 hover:text-blue-500 text-sm iphone11:text-base">Contact</a>
            
//             {/* Connect Wallet Button */}
//             <div className="mt-3 xs:mt-0 xs:ml-2">
//               <CustomWalletMultiButton />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;













import AISearchBar from "./AISearchBar";
import { CustomWalletMultiButton } from "./connection";
import AtembaLogo from '../components/screenshots/AtembaLogo.jpg';
import { useState } from 'react';

// Type-compatible with NavBar.d.ts declaration
const NavBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-md rounded-b-lg w-full sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Left side: Logo */}
          <div className="flex items-center mr-4">
            <a href="#" className="flex items-center">
              <img 
                src={AtembaLogo} 
                alt="Atemba Logo" 
                style={{ width: "75px", height: "90px" }} 
                className="lg:w-[115px] lg:h-[150px]"
              />
              {/* Store name - hidden on mobile */}
              <p className="hidden md:block text-3xl lg:text-5xl font-bold text-blue-700 italic ml-3">
                ATEMBA <br /> STORE
              </p>
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-grow mx-2 max-w-xs md:max-w-md lg:max-w-lg">
            <AISearchBar />
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="block md:hidden text-gray-300 hover:text-blue-500 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-300 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-300 hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-300 hover:text-blue-500">Contact</a>
            <CustomWalletMultiButton />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="block md:hidden mt-4 py-3 border-t border-gray-700">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-300 hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-300 hover:text-blue-500">About</a>
              <a href="#" className="text-gray-300 hover:text-blue-500">Services</a>
              <a href="#" className="text-gray-300 hover:text-blue-500">Contact</a>
              <div className="mt-3">
                <CustomWalletMultiButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;