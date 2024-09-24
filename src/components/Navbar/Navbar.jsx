import { Button } from "@nextui-org/react";
import "./Navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <ul className="grid grid-cols-12">
        <li className="bg-blue-600 col-span-6">Inicio</li>
        <li className="bg-red-600 col-span-3">Registro</li>
        <li className="bg-green-500 col-span-3">Iniciar sesion</li>
      </ul>
    </div>
  );
};

export default Navbar;
