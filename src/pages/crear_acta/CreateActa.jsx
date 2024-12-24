import { DatosUser } from "../../components/DatosUser";
import { HeaderActa } from "../../components/HeaderActa";
import { EquipoNew } from "../../components/EquipoNew";
import { EquipoOld } from "../../components/EquipoOld";
import { Aplicaciones } from "../../components/Aplicaciones";
import { Accordion, AccordionItem, button, Button, Input, User } from "@nextui-org/react";
import { useBrandsStore, useEquipmentStore, useUserStore } from "../../context/stores";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/colsubsidio.jpg";
import { PDFDownloadLink } from "@react-pdf/renderer";
import TestPage from "../test";
import { useForm } from "react-hook-form";


export const CreateActa = () => {
    // Llamadas a funciones del store para obtener y manipular el estado

  const fetchUser = useUserStore((state) => state.fetchUser);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda de usuario
  const user = useUserStore((state) => state.user); // Información del usuario
  const [state, setState] = useState(false); // Estado para controlar si el PDF se generará o no

  const fetchMarcas = useBrandsStore((state) => state.fetchFields);

  const handleBrands = async () => {
    await fetchMarcas();
  }

    // useEffect para ejecutar la función de marcas al montar el componente

  useEffect(() => {
    handleBrands();
  }, []);

    // Manejo de formulario con react-hook-form

  const { register,
    formState: { errors }
  } = useForm();

  const equipment = useEquipmentStore((state) => state.equipment);

  return (
    <div className="py-10 grid grid-cols-12">
      <div className="col-span-1"></div>

      {/* <div className="col-span-5 flex justify-center items-center p-3"> */}
      <div className="col-span-5 flex justify-center items-center p-3">
        <h2 className="font-semibold text-lg">
          ANEXO DE ENTREGAS AL TRABAJADOR DE EQUIPOS, HERRAMIENTAS Y FACILIDADES OPERATIVAS
        </h2>
      </div>
      <div>
        <label className="flex justify-center " htmlFor="fecha">Fecha:</label>
        <input className="col-span-4 " type="date"
          {...register("fecha", {
            required: {
              value: true,
              message: "fecha es requerida"
            },
          })
          }
        />
      </div>

      <div className="col-span-3 flex justify-center items-center">
        <img src={logo} className="w-40" alt="Logo" />
      </div>
      <HeaderActa />
      <div className="col-span-1"></div>
      <div className="col-span-10">
        <Accordion variant="shadow">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Datos del Usuario"
          >
            <Input
              type="text"
              variant="bordered"
              label="Ingresa el Número de documento o Serial"
              className="col-span-4 my-10"
              value={busqueda}
              onValueChange={setBusqueda}
              endContent={
                <Button
                  isIconOnly
                  color="primary"
                  variant="solid"
                  onPress={() => fetchUser(busqueda)}
                >
                  <IoSearchSharp />
                </Button>
              }
            />
            <DatosUser />
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Datos Equipos, Celulares y Herramientas de Trabajo"
          >
            <EquipoNew />
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Datos del equipo anterior (Renovación o Devolución)"
          >
            <EquipoOld />
            <Aplicaciones />
          </AccordionItem>
        </Accordion>
        <Button isDisabled={user && equipment ? false : true} onPress={() => setState(true)} >
          Generar Acta
        </Button>
      </div>

      <div className="col-span-1"></div>
      {/* num identificacion + placa + serial + nombre maquina */}
      {state ? (
        <PDFDownloadLink
          document={<TestPage user={user} equipment={equipment} />}
          fileName={`${user?.identificacion || "sin_identificacion"}_${EquipoNew?.placa_n || "sin_placa"}_${EquipoNew?.serial_n || "sin_serial"}_${EquipoNew?.nombre_equipo_n || "sin_nombremaquina"}.pdf`}
          className="col-span-12 w-full flex justify-center"
        >
          {({ loading }) =>
            <Button
              className="bg-blue-500 text-white"
              radius="sm"
              isDisabled={loading}
            >
              Descargar PDF
            </Button>
          }
        </PDFDownloadLink>
      ) : null}
      <div className="col-span-1"></div>
    </div>

  );
};


