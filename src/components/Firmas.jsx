import React, { useState } from 'react';

export const Firmas = () => {
    const [formData, setFormData] = useState({
        firmaUsuario: '',
        firmaTecnico: '',
        firmaAtencion: '',
        firmaJefe: '',
    });

//componente renderiza una tabla con campos para que diferentes usuarios puedan ingresar sus firmas y nombres.

    const handleInputChange = (e) => {    //Función manejadora de cambios en los campos de entrada.
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="border border-gray-300 p-6 bg-white">
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-lg font-semibold">USUARIO</th>
                        <th className="text-lg font-semibold">REPRESENTANTE SOPORTE TI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-red-600 py-10">Firma:</td>
                        <td className="text-red-600 py-10">Firma:</td>
                    </tr>
                    <tr>
                        <td className="text-sm text-red-600">
                            Nombre completo: {user.nombre}
                            <input
                                type="text"
                                name="firmaUsuario"
                                value={formData.firmaUsuario}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                                className="mt-2 w-full border border-gray-400 rounded px-2 py-1"
                            />
                        </td>
                        <td className="text-sm text-red-600">
                            Nombre completo:
                            <input
                                type="text"
                                name="firmaTecnico"
                                value={formData.firmaTecnico}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                                className="mt-2 w-full border border-gray-400 rounded px-2 py-1"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th className="text-lg font-semibold">ATENCIÓN AL TRABAJADOR</th>
                        <th className="text-lg font-semibold">JEFE INMEDIATO</th>
                    </tr>
                    <tr>
                        <td className="text-red-600 py-10">Firma:</td>
                        <td className="text-red-600 py-10">Firma:</td>
                    </tr>
                    <tr>
                        <td className="text-sm text-red-600">
                            Nombre completo:
                            <input
                                type="text"
                                name="firmaAtencion"
                                value={formData.firmaAtencion}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                className="mt-2 w-full border border-gray-400 rounded px-2 py-1"
                            />
                        </td>
                        <td className="text-sm text-red-600">
                            Nombre completo:
                            <input
                                type="text"
                                name="firmaJefe"
                                value={formData.firmaJefe}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                className="mt-2 w-full border border-gray-400 rounded px-2 py-1"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
