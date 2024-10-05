export const FormSearch = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form action="" method="get" className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">Busca aquí</h1>

               
                <div className="mb-4">
                    <label htmlFor="buscaserial" className="block text-gray-700 font-medium mb-2">
                        Serial del equipo
                    </label>
                    <input 
                        type="text"
                        id="buscaserial"
                        name="buscaserial"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Ingresa el serial del equipo"
                    />
                </div>

                <button type="submit" name="btnbuscar" value="ok" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300">
                    Buscar
                </button>

                <h4 className="text-center text-lg font-medium text-gray-700 mt-6 mb-4">O también por:</h4>

              
                <div className="mb-4">
                    <label htmlFor="buscacedula" className="block text-gray-700 font-medium mb-2">
                        Número de identificación
                    </label>
                    <input
                        type="text"
                        id="buscacedula"
                        name="buscacedula"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Ingresa tu número de identificación"
                    />
                </div>

                <button type="submit" name="btnbuscarnum" value="ok" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300">
                    Buscar
                </button>
            </form>
        </div>
    );
}
