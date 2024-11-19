import img1 from "../../assets/busquedaser.png";
import img2 from "../../assets/usuarios.png";
import img3 from "../../assets/acta.png";
import { NavLink } from "react-router-dom";
import { TbBackground } from "react-icons/tb";
import { color } from "framer-motion";

const UserAccount = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://homestore.tigo.net.bo/generadorWeb/assets/img/fondo.jpg")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="container mx-auto py-8 mt-10">
      <img src={"https://homestore.tigo.net.bo/generadorWeb/assets/img/fondo.jpg"} alt="" className="absolute h-screen inset-0 -z-20" width={"100%"} />
      <p className="text-center text-6xl font-bold mb-6 text-blue-50">
        ¿Qué quieres hacer?
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-3 mt-24" >

        <li  >
          <NavLink to="/buscar" className="no-underline">
            <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="card-body p-1.5 ml-4">
                <div className="flex items-center p-2 ">
                  <img
                    className="w-1/3 h-auto object-contain"
                    src={img1}
                    alt="Buscar Serial"
                  />
                  <div className="ml-4 p-5">
                    
                    <h5 className="text-lg font-semibold ">
                      Búsqueda por Serial
                    </h5>
                    <p className="text-sm text-gray-600">
                      Aquí podrás encontrar por número de serial tu acta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </li>

        {/* Card 2 */}
        <li className="col-span-1 ml-4">
          <NavLink to="/registrarusu" className="no-underline">
            <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="card-body p-6">
                <div className="flex items-center">
                  <img
                    className="w-1/3 h-auto object-contain"
                    src={img2}
                    alt="Usuarios"
                  />
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold p-5">Usuarios</h5>
                    <p className="text-sm text-gray-600">
                      Crear, editar y validar usuario
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </li>

        {/* Card 3 */}
        <li className="col-span-1 ml-5 ">
          <NavLink to="/crearacta" className="no-underline">
            <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="card-body ">
                <div className="flex items-center">
                  <img
                    className="w-1/3 h-auto object-contain"
                    src={img3}
                    alt="Actas"
                  />
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">Actas</h5>
                    <p className="text-sm text-gray-600">
                      Creación de actas, anexo de entregas al trabajador de
                      equipos, herramientas y facilidades operativas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
      
      
    </div>
  );
};

export default UserAccount;
