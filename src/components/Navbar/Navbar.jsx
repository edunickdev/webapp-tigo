import { HiUser } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { useUser } from "../../context/stores";
import { Button } from "@nextui-org/react";

const Navbar = () => {

  const logout = useUser((state) => state.logout);
  const user = useUser((state) => state.user);
  const navigate = useNavigate(); //utilizado para redirigir al usuario a otra página programáticamente.

//barra de navegación en la parte superior de la página. Incluye un enlace a la página de inicio, y si el usuario está 
// autenticado, se le muestran botones para cerrar sesión y navegar a la página de inicio.


  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-100 h-[10]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-gray-200 font-bold text-5xl p-6">
          Aplicación TIGO
        </Link>
        <div>
          {user ? <section className="flex justify-end items-center lg:space-x-4 text-5xl bg-blue-700 rounded-xl px-4 py-2">
              
              <Button variant="flat" className="bg-blue-700" isIconOnly onPress={() => {
                  logout()            //para acceder al estado global de los datos del usuario y las acciones asociadas
                  navigate("/")
                }} >
                <IoExit className="text-4xl text-blue-200" />
              </Button>

{/* Al hacer clic en el botón con el icono de inicio (GoHomeFill), el usuario es redirigido a la página de inicio (/home).    */}
              <Button variant="flat" isIconOnly className="bg-blue-700" onPress={() => navigate("/home")}>
                <GoHomeFill className="text-4xl text-blue-200" />  
              </Button>
          </section> : null
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
