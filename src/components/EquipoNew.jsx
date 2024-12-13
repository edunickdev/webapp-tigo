import { useForm, Controller } from "react-hook-form";
import { useBrandsStore, useEquipmentStore, useUserStore, useModelsStore } from "../context/stores";
import { useState } from "react";

export const EquipoNew = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            tipo_elemento: ""
        },
    });

    const [typeElement, setTypeElement] = useState("");

    const brands = useBrandsStore((state) => state.brands);
    const accesories = useBrandsStore((state) => state.accesories);
    const models = useModelsStore((state) => state.models);


    const setEquipment = useEquipmentStore((state) => state.setEquipment);
    const createEquipment = useEquipmentStore((state) => state.createEquipment);
    const userId = useUserStore((state) => state.user);

    return (
        <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Datos Equipos, Celulares y Herramientas de Trabajo</h2>
                <h3 className="text-lg mt-2">Datos del Equipo Nuevo</h3>
            </div>

            <form
                onSubmit={handleSubmit((data) => {
                    setEquipment(data);
                    createEquipment(data, accesories, userId, typeElement);
                })}
                className="space-y-6"
            >
                {/* Tipo de Elemento */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Tipo de Elemento</label>
                        <div className="col-span-12 flex justify-center items-center p-5 gap-x-5">
                            <Controller
                                name="tipo_elemento"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                        <div className="col-span-12 flex justify-center items-center p-5 gap-x-5">
                                            {["desktop_n", "laptop_n", "tablet_n"].map(
                                                (element, index) => (
                                                    <div key={index} className="inline-flex items-center ml-6">
                                                        <label className="ml-2 text-gray-700" htmlFor={element}> {element === "desktop_n" ? "Escritorio" : element === "laptop_n" ? "Portatil" : "Tablet"} </label>
                                                        <input
                                                            type="checkbox"
                                                            id={element}
                                                            className="h-5 w-5 text-blue-600"
                                                            checked={value === element}
                                                            onChange={() => {
                                                                onChange(element)
                                                                setTypeElement(element)
                                                            }}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                )}
                            />
                        </div>
                    </div>
                </div>


                {/* Datos del Equipo */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        {/* TODO: crear un componente reutilizable que permita reutilizar este componente dado que se repite en muchas casi el mismo codigo en muchas partes */}
                        <label className="block text-sm font-medium text-gray-700" htmlFor='placa_n'>Placa</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="123456..."
                            {...register('placa_n', {
                                required: true,
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
                        <label className="block text-sm font-medium text-gray-700" htmlFor='marca_n'>Marca</label>
                        <select
                            {...register('marca_n')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            {
                                brands && brands.map((brand, index) => (
                                    <option key={index} value={index}>{brand}</option>
                                ))
                            }
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
                        <select
                            {...register('modelo_n')}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            {
                                models && models.map((model, index) => (
                                    <option key={index} value={index}>{model}</option>
                                ))
                            }
                        </select>
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
                            {
                                brands && brands.map((brand, index) => (
                                    <option key={index} value={index}>{brand}</option>
                                ))
                            }
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
                            {
                                brands && brands.map((brand, index) => (
                                    <option key={index} value={index}>{brand}</option>
                                ))
                            }
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
                        { accesories && accesories.map((accesory, index) => (
                            <div key={index} className="inline-flex items-center ml-6">
                                <label className="ml-2 text-gray-700" htmlFor={`${accesory.toLowerCase()}_n`}>{accesory} = </label>
                                <input type="checkbox" className="h-5 w-5 text-blue-600"
                                    {...register(`${accesory.toLowerCase()}_n`)}
                                />
                            </div>
                        ))}
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
    );
};

