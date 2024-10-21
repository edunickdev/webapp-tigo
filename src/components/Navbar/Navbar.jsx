import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-5xl p-6">
          <a href="#">Aplicación de Tigo</a>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-4 text-5xl">
            <li className="text-white">
              <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">
                <HiUser className="text-white" />
              </a>
            </li>
            <li className="text-white">
              <a href="#" className="block py-2 px-4 hover:bg-blue-700 rounded">
                <IoExit className="text-white" />
              </a>
            </li>
            <Link
              to="/home"
              className="block py-2 px-4 hover:bg-blue-700 rounded"
            >
              <GoHomeFill />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
