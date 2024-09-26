import React, { useState } from 'react';
import logo from "../assets/colsubsidio.jpg";

export const HeaderActa = () => {
    const [formData, setFormData] = useState({
        asignacion: false,
        renovacion: false,
        retiro: false,
        prestamo: false,
        ciudad: '',
        ticket: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center">
                <img src={logo} className="w-40" alt="Logo" />
            </div>

            <div className="mt-6">
                <div className="text-2xl font-bold text-center mb-6 p-8">
                    <b>
                        ANEXO DE ENTREGAS AL TRABAJADOR DE EQUIPOS, HERRAMIENTAS Y FACILIDADES OPERATIVAS
                    </b>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="block text-sm font-medium text-gray-700">
                        <label className="mr-4">Asignación</label>
                        <input
                            type="checkbox"
                            name="asignacion"
                            checked={formData.asignacion}
                            onChange={handleInputChange}
                            className="mr-4"
                        />
                        <label className="mr-4">Renovación</label>
                        <input
                            type="checkbox"
                            name="renovacion"
                            checked={formData.renovacion}
                            onChange={handleInputChange}
                            className="mr-4"
                        /><br></br>
                        <label className="mr-4">Retiro</label>
                        <input
                            type="checkbox"
                            name="retiro"
                            checked={formData.retiro}
                            onChange={handleInputChange}
                            className="mr-4"
                        />
                        <label className="mr-4">Prestamo</label>
                        <input
                            type="checkbox"
                            name="prestamo"
                            checked={formData.prestamo}
                            onChange={handleInputChange}
                            className="mr-4"
                        />
                    </div>

                    <div className="block text-sm font-medium text-gray-700">
                        <label className="block mb-2">Ciudad:</label>
                        <input
                            type="text"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 w-full"
                            maxLength="10"
                            autoComplete="off"
                        />
                    </div>

                    <div className="block text-sm font-medium text-gray-700">
                        <label className="block mb-2">Oc o Ticket:</label>
                        <input
                            type="text"
                            name="ticket"
                            value={formData.ticket}
                            onChange={handleInputChange}
                            className="border border-gray-300 p-2 w-full"
                            maxLength="10"
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
