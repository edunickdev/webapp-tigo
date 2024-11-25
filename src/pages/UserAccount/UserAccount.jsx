import CustomCard from "../../components/shared/CustomCard";
import { infoAdmin } from "../../helpers/constants";

const UserAccount = () => {

return (
    <div className="relative mx-auto py-8 grid grid-cols-12">
      {/* Fondo y gradiente */}
      <div className="absolute inset-0 -z-10 col-span-12">
        <img
          src="https://homestore.tigo.net.bo/generadorWeb/assets/img/fondo.jpg"
          alt=""
          className="absolute h-screen w-screen object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-gray-500 opacity-50"></div>
      </div>
  
      <p className="text-center text-6xl font-bold mb-6 text-blue-50 col-span-12">
        ¿Qué quieres hacer?
      </p>
  
      {/* Primera sección */}
      <section className="grid grid-cols-12 col-span-12">
        <div className="col-span-1"></div>
        <div className="col-span-10 grid grid-cols-10 gap-x-5">
          {infoAdmin.map((item, index) => (
            <CustomCard key={index} info={item} />
          ))}
        </div>
        <div className="col-span-1"></div>
      </section>
  
      {/* Segunda sección */}
      <ul className="grid grid-cols-1 md:grid-cols-3 mt-24 col-span-12">
        <li>
          <NavLink to="/buscar" className="no-underline">
            <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="card-body p-1.5 ml-4">
                <div className="flex items-center p-2">
                  <img
                    className="w-1/3 h-auto object-contain"
                    src={img1}
                    alt="Buscar Serial"
                  />
                  <div className="ml-4 p-5">
                    <h5 className="text-lg font-semibold">Búsqueda por Serial</h5>
                    <p className="text-sm text-gray-600">
                      Aquí podrás encontrar por número de serial tu acta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </li>
  
        {/* Tarjetas adicionales */}
        <li className="ml-4">
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
  
        <li className="ml-5">
          <NavLink to="/crearacta" className="no-underline">
            <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
              <div className="card-body">
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
}