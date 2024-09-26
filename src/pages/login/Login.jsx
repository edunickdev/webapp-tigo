import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
                <p className="text-center text-3xl font-bold text-gray-800 mb-2">Iniciar Sesión</p>
                <p className="text-center text-gray-500 mb-6">Bienvenid@</p>

                {/* Formulario de Login */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="username"
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Recordarme y Olvidaste contraseña */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            <label className="ml-2 text-gray-700"><small>Recordarme</small></label>
                        </div>
                        <NavLink to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            <small>Olvidaste tu contraseña?</small>
                        </NavLink>
                    </div>

                    {/* Botón de Iniciar */}
                    <NavLink to="/home" className="block bg-sky-600 text-white text-center py-2 rounded shadow-md hover:bg-sky-600 transition duration-300">
                        Iniciar
                    </NavLink>

                    {/* Registro */}
                    <div className="text-center mt-4">
                        <p className="text-gray-700">¿No tienes una cuenta?</p>
                        <NavLink to='/registro' className="text-blue-600 hover:underline font-semibold">
                            Regístrate
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
