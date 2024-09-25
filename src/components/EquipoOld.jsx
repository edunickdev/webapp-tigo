import React, { useState } from 'react';

export const EquipoOld = () => {
    const [formData, setFormData] = useState({
        desktop_a: false,
        laptop_a: false,
        tablet_a: false,
        placa_a: '',
        marca_a: '',
        disco_a: '',
        serial_a: '',
        modelo_a: '',
        memoria_a: '',
        nombre_equipo_a: '',
        mac_a: '',
        ip_a: '',
        placamon_a: '',
        marcamon_a: '',
        puntored_a: '',
        serialmon_a: '',
        modelomon_a: '',
        otroscelular_a: '',
        placaotros_a: '',
        marcaotros_a: '',
        serialotros_a: '',
        modelootros_a: '',
        maletin_a: false,
        base_a: false,
        teclado_a: false,
        cam_a: false,
        diadema_a: false,
        adaptador_a: false,
        guaya_a: false,
        docking_a: false,
        raton_a: false,
        otros_a: '',
        observacion_a: '',
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">DATOS DEL EQUIPO ANTERIOR (RENOVACIÓN O DEVOLUCIÓN)</h2>
            </div>

            <form className="space-y-6">
                {/* Tipo de Elemento */}
                <div className="border border-gray-300 p-4 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700">Tipo de Elemento:</label>
                            <div className="mt-2 space-y-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="desktop_a"
                                        checked={formData.desktop_a}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700">Escritorio</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="laptop_a"
                                        checked={formData.laptop_a}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700">Portátil</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="tablet_a"
                                        checked={formData.tablet_a}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700">Tablet</span>
                                </label>
                            </div>
                        </div>

                        {/* Datos del Equipo */}
                        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Placa</label>
                                <input
                                    type="text"
                                    name="placa_a"
                                    value={formData.placa_a}
                                    onChange={handleChange}
                                    maxLength="14"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Marca</label>
                                <select
                                    name="marca_a"
                                    value={formData.marca_a}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value=""></option>
                                    <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                                    <option value="LENOVO">LENOVO</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="ACER">ACER</option>
                                    <option value="DELL">DELL</option>
                                    <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                                    <option value="APPLE">APPLE</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Disco Duro (GB)</label>
                                <input
                                    type="text"
                                    name="disco_a"
                                    value={formData.disco_a}
                                    onChange={handleChange}
                                    maxLength="60"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Otros datos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">S/N</label>
                        <input
                            type="text"
                            name="serial_a"
                            value={formData.serial_a}
                            onChange={handleChange}
                            maxLength="60"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Modelo</label>
                        <input
                            type="text"
                            name="modelo_a"
                            value={formData.modelo_a}
                            onChange={handleChange}
                            maxLength="60"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Memoria RAM</label>
                        <input
                            type="text"
                            name="memoria_a"
                            value={formData.memoria_a}
                            onChange={handleChange}
                            maxLength="60"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Nombre de Máquina, MAC, IP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre de Máquina</label>
                        <input
                            type="text"
                            name="nombre_equipo_a"
                            value={formData.nombre_equipo_a}
                            onChange={handleChange}
                            maxLength="60"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">MAC</label>
                        <input
                            type="text"
                            name="mac_a"
                            value={formData.mac_a}
                            onChange={handleChange}
                            maxLength="60"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección IP</label>
                        <input
                            type="text"
                            name="ip_a"
                            value={formData.ip_a}
                            onChange={handleChange}
                            maxLength="20"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                {/* Monitor */}
                <div className="border border-gray-300 p-4 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Monitor Placa</label>
                            <input
                                type="text"
                                name="placamon_a"
                                value={formData.placamon_a}
                                onChange={handleChange}
                                maxLength="14"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Marca</label>
                            <select
                                name="marcamon_a"
                                value={formData.marcamon_a}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value=""></option>
                                <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                                <option value="LENOVO">LENOVO</option>
                                <option value="ASUS">ASUS</option>
                                <option value="ACER">ACER</option>
                                <option value="DELL">DELL</option>
                                <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                                <option value="APPLE">APPLE</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Punto de Red</label>
                            <input
                                type="text"
                                name="puntored_a"
                                value={formData.puntored_a}
                                onChange={handleChange}
                                maxLength="60"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Otros dispositivos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Otros Dispositivos (Celular)</label>
                        <input
                            type="text"
                            name="otroscelular_a"
                            value={formData.otroscelular_a}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Placa</label>
                        <input
                            type="text"
                            name="placaotros_a"
                            value={formData.placaotros_a}
                            onChange={handleChange}
                            maxLength="14"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Marca</label>
                        <select
                            name="marcaotros_a"
                            value={formData.marcaotros_a}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value=""></option>
                            <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                            <option value="LENOVO">LENOVO</option>
                            <option value="ASUS">ASUS</option>
                            <option value="ACER">ACER</option>
                            <option value="DELL">DELL</option>
                            <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                            <option value="APPLE">APPLE</option>
                        </select>
                    </div>
                </div>

                {/* Observaciones */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Observaciones</label>
                    <textarea
                        name="observacion_a"
                        value={formData.observacion_a}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Observaciones..."
                    ></textarea>
                </div>
            </form>
        </div>
    );
};
