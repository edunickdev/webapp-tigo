import { HiUser } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-100 h-[10]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-gray-200 font-bold text-5xl p-6">
          Aplicación TIGO
        </Link>
        <div>
          <ul className="flex justify-end items-center lg:space-x-4 text-5xl bg-blue-700 rounded-xl p-2">
            <div className="font-bold text-blue-50 p-2 rounded-xl transition-all duration-300 hover:text-blue-300">
              <Link to={"/home"}>
                <HiUser className="text-4xl" />
              </Link>
            </div>
            <div className="font-bold text-blue-50 p-2 rounded-xl transition-all duration-300 hover:text-blue-300">
              <Link to={"/home"}>
                <IoExit className="text-4xl" />
              </Link>
            </div>
            <div className="font-bold text-blue-50 p-2 rounded-xl transition-all duration-300 hover:text-blue-300">
              <Link to="/home">
                <GoHomeFill className="text-4xl" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
