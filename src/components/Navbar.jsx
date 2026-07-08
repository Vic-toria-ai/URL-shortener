import logo from "../assets/logo.svg";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 w-full md:px-20 px-6 md:py-6 py-4 bg-white   ">
        <div className="flex items-center justify-between w-full">
          {/* brand logo */}
          <img src={logo} alt="Logo" className="h-6" />

          {/* hamburger menu */}

          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>

          {/* Navigation bar */}
          <ul
            className={`
              ${isMenuOpen ? "flex" : "hidden"}
              flex-col
              absolute
              top-20
              left-6
              right-6
              bg-purple-900
              rounded-xl
              p-8
              text-center
              space-y-6
              text-white
              font-semibold

              md:flex
              md:flex-row
              md:static
              md:bg-transparent
              md:p-0
              md:space-y-0
              md:space-x-8
              md:text-gray-500
              md:items-center
              md:ml-10
              md:w-full
            `}
          >
            <li>
              <a href="#" className="hover:text-grey-900">
                Features
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-grey-900">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-grey-900">
                Resources
              </a>
            </li>

            {/* hr for mobile */}
            <hr className="border-gray-500 md:hidden" />

            {/* other half of the navbar*/}
            <li className="md:ml-auto">
              <a href="#" className="hover:text-grey-700">
                Login
              </a>
            </li>

            <li>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-white rounded-full px-6 py-2 w-full md:w-auto">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
