import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

export const EquipoNew = () => {
    const {register, handleSubmit, 
        formState: {errors}
    } = useForm();


    // TODO: el proposito de este componente es hacerlo mas optimo, esto implica pensar si seria conveniente crear en componentes mas pequeños que sean reautilizables
    // así que es hay que revisarlo.

    return (
        <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Datos Equipos, Celulares y Herramientas de Trabajo</h2>
                <h3 className="text-lg mt-2">Datos del Equipo Nuevo</h3>
            </div>

            <form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })} className="space-y-6">
                {/* Tipo de Elemento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Tipo de Elemento</label>

                        {/*  TODO: aislar este componente y manejar el estado, solo deberia aceptar dejar seleccionado 1, no todos a la vez  */}
                        <div className="mt-2 space-y-1">
                            <div className="inline-flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="form-checkbox h-5 w-5 text-blue-600" 
                                    {...register("desktop_n")}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='desktop_n'>Escritorio</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" name="laptop_n"  className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('laptop_n')} />
                                <label className="ml-2 text-gray-700" htmlFor='laptop_n'>Portátil</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600"
                                {...register('tablet_n')} />
                                <label className="ml-2 text-gray-700 " htmlFor='tablet_n'>Tablet</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Datos del Equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        {/* TODO: crear un componente reutilizable que permita reutilizar este componente dado que se repite en muchas casi el mismo codigo en muchas partes */}
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placa_n'>Placa</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="123456..." 
                        {...register('placa_n', {required: true,
                            minLength: 3,
                            maxLength: 7
                        })} 
                        />
                        {
                            errors.placa_n?.type === "required" && <span className="text-xs font-medium text-red-700">la placa es requerida</span>
                        }
                        {
                            errors.placa_n?.type === "minLength" && <span className="text-xs font-medium text-red-700">la placa debe tener al menos 3 caracteres</span>
                        }
                        {
                            errors.placa_n?.type === "maxLength" && <span className="text-xs font-medium text-red-700">la placa debe tener maximo 7 caracteres</span>
                        }
                </div>
                    <div className="col-span-2">
                        {/* TODO: de cara a que estos datos se van a almacenar en la base de datos y se tiene una tabla de marcas, mas que la palabra nombre de la marca, 
                        se requiere tener el indice, al igual que seria mas util cargar esta lista desde la base de datos y no quemarlos, es decir se necesita hacer 
                        la peticion a la base de datos para que sirva todas las marcas existentes */ }
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marca_n'>Marca</label>
                        <select 
                            {...register('marca_n')}

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
                        <label className="block text-sm font-medium text-gray-700" htmlFor='disco_n'>Disco Duro (GB)</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="8 GB..."
                        {...register('disco_n')}
                        />
                    </div>
                </div>

                {/* Resto de datos del equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serial_n'>S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="PF13GTY3 - 5CD420578T..."
                        {...register('serial_n', { 
                            required: true
                        })}
                        />
                        {
                            errors.serial_n && <span className="text-xs font-medium text-red-700">el serial es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelo_n'>Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="THINKPAD E490..." 
                        {...register('modelo_n', { 
                            required: true
                        })}
                        />
                        {
                            errors.modelo_n && <span className="text-xs font-medium text-red-700">el modelo es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='memoria_n'>Memoria RAM</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="DDR3 - SRAM..."
                        {...register('memoria_n')}
                        />
                    </div>
                </div>

                {/* Datos adicionales */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='nombre_equipo_n'>Nombre de Máquina</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="BOGA08PP54TSYA..." 
                        {...register('nombre_equipo_n', { 
                            required: true
                        })}
                        />
                        {
                            errors.nombre_equipo_n && <span className="text-xs font-medium text-red-700">nombre maquina es requerida</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='mac_n'>MAC</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="98-FB-9P-B2-L6-6C..."
                        {...register('mac_n', { 
                            required: true
                        })}
                        />
                        {
                            errors.mac_n && <span className="text-xs font-medium text-red-700">el mac es requerido</span>
                        }
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='ip_n'>Dirección IP</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="192.168.1.52..."
                        {...register('ip_n')}
                        />
                    </div>
                </div>

                {/* Monitor Section */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1 md:col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placamon_n'>Monitor Placa</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="123456..."
                        {...register('placamon_n')}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marcamon_n'>Monitor Marca</label>
                        <select 
                            {...register('marcamon_n')}
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
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serialmon_n'>Monitor S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="ESP8266 ARDUINO..." 
                            {...register('serialmon_n')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelomon_n'>Monitor Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="KALLEY GAMER 27 P..." 
                            {...register('modelomon_n')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='puntored_n'>Punto de Red</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="WIFI - VPN..." 
                            {...register('puntored_n')}
                        />
                    </div>
                </div>

                {/* Otros Dispositivos */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='otroscelular_n'>Otros Dispositivos (Celular)</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="3157689032..."
                            {...register('otroscelular_n')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placaotros_n'>Placa otros dispositivos</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="NP326NMPB..." 
                            {...register('placaotros_n')}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marcaotros_n'>Marca otros dispositivos</label>
                        <select
                            {...register('marcaotros_n')}
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
                        <label className="block text-sm font-medium text-gray-700" htmlFor='serialotros_n'>otros dispositivos S/N</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="359761920840193..."
                            {...register('serialotros_n')}
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='modelootros_n'>otros dispositivos Modelo</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="SMARTPHONE REDMI NOTE 11 PRO..."
                            {...register('modelootros_n')}
                        />
                    </div>
                    <div className="col-span-12 border p-2">
                        <label className="block text-sm font-medium text-gray-700">accesorios asignados</label>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('maletin_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='maletin_n'>= Maletín</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('guaya_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='guaya_n'>= Guaya</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('docking_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='docking_n'>= Docking</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('raton_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='raton_n'>= Mouse</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('base_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='base_n'>= Base</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('teclado_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='teclado_n'>= Teclado</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('cam_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='cam_n'>= Camara</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('diadema_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='diadema_n'>= Diadema</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('adaptador_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='adaptador_n'>= Adaptador</label>
                            </div>
                            <div className="inline-flex items-center ml-6">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" 
                                {...register('otros_n')}
                                />
                                <label className="ml-2 text-gray-700" htmlFor='otros_n'>= Otro</label>
                                <input className="ml-4" type="text" />
                            </div>
                        </div>
                    </div>
                               
                {/* Observaciones */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700" htmlFor='observacion_n'>Observaciones</label>
                        <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Observaciones..." 
                            {...register('observacion_n')}
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
