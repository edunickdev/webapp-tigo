import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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

    //Este componente captura los datos de un equipo antiguo en caso de renovación o devolución.

    const { register, handleSubmit, // Configuración del formulario con react-hook-form
        formState: { errors }
    } = useForm();

    //Maneja los cambios en los inputs y actualiza el estado local
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
                <h2 className="text-2xl font-bold">DATOS DEL EQUIPO ANTERIOR (RENOVACION O DEVOLUCION)</h2>

            </div>

            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })} className="space-y-6">
                {/* Tipo de Elemento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Tipo de Elemento</label>
                        <div className="mt-2 space-y-1">
                            <div className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                    {...register("desktop_a")}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='desktop_a'>Escritorio</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" name="laptop_a" className="form-checkbox h-5 w-5 text-blue-600"
                                    {...register('laptop_a')} />
                                <label className="ml-2 text-gray-700" htmlFor='laptop_a'>Portátil</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                    {...register('tablet_a')} />
                                <label className="ml-2 text-gray-700 " htmlFor='tablet_a'>Tablet</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Datos del Equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placa_a'>Placa</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="123456..."
                            {...register('placa_a', {
                                required: true,
                                minLength: 3,
                                maxLength: 7
                            })}
                        />
                        {
                            errors.placa_a?.type === "required" && <span className="text-xs font-medium text-red-700">la placa es requerida</span>
                        }
                        {
                            errors.placa_a?.type === "minLength" && <span className="text-xs font-medium text-red-700">la placa debe tener al menos 3 caracteres</span>
                        }
                        {
                            errors.placa_a?.type === "maxLength" && <span className="text-xs font-medium text-red-700">la placa debe tener maximo 7 caracteres</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marca_a'>Marca</label>
                        <select
                            {...register('marca_a')}

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
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='disco_a'>Disco Duro (GB)</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="8 GB..."
                            {...register('disco_a')}
                        />
                    </div>
                </div>

                {/* Resto de datos del equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serial_a'>S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="PF13GTY3 - 5CD420578T..."
                            {...register('serial_a', {
                                required: true
                            })}
                        />
                        {
                            errors.serial_a && <span className="text-xs font-medium text-red-700">el serial es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelo_a'>Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="THINKPAD E490..."
                            {...register('modelo_a', {
                                required: true
                            })}
                        />
                        {
                            errors.modelo_a && <span className="text-xs font-medium text-red-700">el modelo es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='memoria_a'>Memoria RAM</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="DDR3 - SRAM..."
                            {...register('memoria_a')}
                        />
                    </div>
                </div>

                {/* Datos adicionales */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='nombre_equipo_a'>Nombre de Máquina</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="BOGA08PP54TSYA..."
                            {...register('nombre_equipo_a', {
                                required: true
                            })}
                        />
                        {
                            errors.nombre_equipo_a && <span className="text-xs font-medium text-red-700">nombre maquina es requerida</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='mac_a'>MAC</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="98-FB-9P-B2-L6-6C..."
                            {...register('mac_a', {
                                required: true
                            })}
                        />
                        {
                            errors.mac_a && <span className="text-xs font-medium text-red-700">el mac es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='ip_a'>Dirección IP</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="192.168.1.52..."
                            {...register('ip_a')}
                        />
                    </div>
                </div>

                {/* Monitor Section */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placamon_a'>Monitor Placa</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="123456..."
                            {...register('placamon_a')}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marcamon_a'>Monitor Marca</label>
                        <select
                            {...register('marcamon_a')}
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
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serialmon_a'>Monitor S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="ESP8266 ARDUINO..."
                            {...register('serialmon_a')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelomon_a'>Monitor Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="KALLEY GAMER 27 P..."
                            {...register('modelomon_a')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='puntored_a'>Punto de Red</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="WIFI - VPN..."
                            {...register('puntored_a')}
                        />
                    </div>
                </div>

                {/* Otros Dispositivos */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='otroscelular_a'>Otros Dispositivos (Celular)</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="3157689032..."
                            {...register('otroscelular_a')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placaotros_a'>Placa otros dispositivos</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="NP326NMPB..."
                            {...register('placaotros_a')}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marcaotros_a'>Marca otros dispositivos</label>
                        <select
                            {...register('marcaotros_a')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
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
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serialotros_a'>otros dispositivos S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="359761920840193..."
                            {...register('serialotros_a')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelootros_a'>otros dispositivos Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="SMARTPHONE REDMI NOTE 11 PRO..."
                            {...register('modelootros_a')}
                        />
                    </div>
                    <div className="col-span-12 border p-2">
                        <label className="block text-sm font-medium text-gray-700">accesorios asignados</label>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('maletin_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='maletin_a'>= Maletín</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('guaya_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='guaya_a'>= Guaya</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('docking_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='docking_a'>= Docking</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('raton_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='raton_a'>= Mouse</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('base_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='base_a'>= Base</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('teclado_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='teclado_a'>= Teclado</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('cam_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='cam_a'>= Camara</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('diadema_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='diadema_a'>= Diadema</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('adaptador_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='adaptador_a'>= Adaptador</label>
                        </div>
                        <div className="inline-flex items-center ml-6">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('otros_a')}
                            />
                            <label className="ml-2 text-gray-700" htmlFor='otros_a'>= Otro</label>
                            <input className="ml-4" type="text" />
                        </div>
                    </div>
                </div>

                {/* Observaciones */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='observacion_a'>Observaciones</label>
                        <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Observaciones..."
                            {...register('observacion_a')}
                        />
                    </div>
                </div>
                <div>
                    <button type='submit'>enviar</button>
                </div>
            </form>
        </div>
    )
}
