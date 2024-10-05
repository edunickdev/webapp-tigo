import img1 from '../../assets/busquedaser.png';
import img2 from '../../assets/usuarios.png';
import img3 from '../../assets/acta.png';
import { NavLink } from 'react-router-dom';

const UserAccount = () => {
    return (
        <div className="container mx-auto py-8">
            <p className="text-center text-4xl font-bold mb-6 ">¿Qué quieres hacer?</p>
            
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Card 1 */}
                <li className="col-span-1">
                    <NavLink to="/buscar" className="no-underline">
                        <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
                            <div className="card-body p-6">
                                <div className="flex items-center">
                                    <img className="w-1/3 h-auto object-contain" src={img1} alt="Buscar Serial" />
                                    <div className="ml-4">
                                        <h5 className="text-lg font-semibold">Búsqueda por Serial</h5>
                                        <p className="text-sm text-gray-600">Aquí podrás encontrar por número de serial tu acta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </li>

                {/* Card 2 */}
                <li className="col-span-1">
                    <NavLink to="/registrarusu" className="no-underline">
                        <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
                            <div className="card-body p-6">
                                <div className="flex items-center">
                                    <img className="w-1/3 h-auto object-contain" src={img2} alt="Usuarios" />
                                    <div className="ml-4">
                                        <h5 className="text-lg font-semibold">Usuarios</h5>
                                        <p className="text-sm text-gray-600">Crear, editar y validar usuario</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </li>

                {/* Card 3 */}
                <li className="col-span-1">
                    <NavLink to="/crearacta" className="no-underline">
                        <div className="card rounded-lg shadow-lg hover:shadow-xl transition-all bg-white">
                            <div className="card-body p-6">
                                <div className="flex items-center">
                                    <img className="w-1/3 h-auto object-contain" src={img3} alt="Actas" />
                                    <div className="ml-4">
                                        <h5 className="text-lg font-semibold">Actas</h5>
                                        <p className="text-sm text-gray-600">Creación de actas, anexo de entregas al trabajador de equipos, herramientas y facilidades operativas</p>
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

export default UserAccount;
