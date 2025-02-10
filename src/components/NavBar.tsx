import { CustomWalletMultiButton } from "./connection";


const NavBar = () => {
  return (
    <nav className="bg-black p-4 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="text-white text-lg font-bold">
          <a href="#">
            <p className="text-5xl text-purple-500 italic">
              NFT <br /> web
            </p>
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="flex justify-center items-center flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Right side: Navigation Links */}
        <div className="space-x-8 hidden sm:flex items-center">
          <a href="#" className="text-gray-300 hover:text-purple-500">Home</a>
          <a href="#" className="text-gray-300 hover:text-purple-500">About</a>
          <a href="#" className="text-gray-300 hover:text-purple-500">Services</a>
          <a href="#" className="text-gray-300 hover:text-purple-500">Contact</a>
          
          {/* Connect Wallet Button */}
          <li>
          <CustomWalletMultiButton />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

  