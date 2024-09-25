import React, { useState } from 'react';

export const EquipoNew = () => {
    const [formData, setFormData] = useState({
        desktop_n: false,
        laptop_n: false,
        tablet_n: false,
        placa_n: '',
        marca_n: '',
        disco_n: '',
        serial_n: '',
        modelo_n: '',
        memoria_n: '',
        nombre_equipo_n: '',
        mac_n: '',
        ip_n: '',
        placamon_n: '',
        marcamon_n: '',
        puntored_n: '',
        serialmon_n: '',
        modelomon_n: '',
        otroscelular_n: '',
        placaotros_n: '',
        marcaotros_n: '',
        serialotros_n: '',
        modelootros_n: '',
        maletin_n: false,
        base_n: false,
        teclado_n: false,
        cam_n: false,
        diadema_n: false,
        adaptador_n: false,
        guaya_n: false,
        docking_n: false,
        raton_n: false,
        otros_n: '',
        observacion_n: '',
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Datos Equipos, Celulares y Herramientas de Trabajo</h2>
                <h3 className="text-lg mt-2">Datos del Equipo Nuevo</h3>
            </div>

            <form className="space-y-6">
                {/* Tipo de Elemento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Tipo de Elemento</label>
                        <div className="mt-2 space-y-1">
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="desktop_n" checked={formData.desktop_n} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600"/>
                                <span className="ml-2 text-gray-700">Escritorio</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="checkbox" name="laptop_n" checked={formData.laptop_n} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600"/>
                                <span className="ml-2 text-gray-700">Portátil</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="checkbox" name="tablet_n" checked={formData.tablet_n} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600"/>
                                <span className="ml-2 text-gray-700">Tablet</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Datos del Equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Placa</label>
                        <input type="text" name="placa_n" value={formData.placa_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Marca</label>
                        <select name="marca_n" value={formData.marca_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Disco Duro (GB)</label>
                        <input type="text" name="disco_n" value={formData.disco_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Resto de datos del equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">S/N</label>
                        <input type="text" name="serial_n" value={formData.serial_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Modelo</label>
                        <input type="text" name="modelo_n" value={formData.modelo_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Memoria RAM</label>
                        <input type="text" name="memoria_n" value={formData.memoria_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Datos adicionales */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Nombre de Máquina</label>
                        <input type="text" name="nombre_equipo_n" value={formData.nombre_equipo_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">MAC</label>
                        <input type="text" name="mac_n" value={formData.mac_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Dirección IP</label>
                        <input type="text" name="ip_n" value={formData.ip_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Monitor Section */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Monitor Placa</label>
                        <input type="text" name="placamon_n" value={formData.placamon_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Marca</label>
                        <select name="marcamon_n" value={formData.marcamon_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Punto de Red</label>
                        <input type="text" name="puntored_n" value={formData.puntored_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">S/N</label>
                        <input type="text" name="serialmon_n" value={formData.serialmon_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Modelo</label>
                        <input type="text" name="modelomon_n" value={formData.modelomon_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                </div>

                {/* Otros Dispositivos */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Otros Dispositivos (Celular)</label>
                        <input type="text" name="otroscelular_n" value={formData.otroscelular_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Placa</label>
                        <input type="text" name="placaotros_n" value={formData.placaotros_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md"/>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Marca</label>
                        <select name="marcaotros_n" value={formData.marcaotros_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">Observaciones</label>
                        <textarea name="observacion_n" value={formData.observacion_n} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Observaciones..."/>
                    </div>
                </div>
            </form>
        </div>
    )
}
