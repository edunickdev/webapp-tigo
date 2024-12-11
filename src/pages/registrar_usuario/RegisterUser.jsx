import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";
import { IoCreateSharp, IoEye, IoSearchSharp } from "react-icons/io5";
import { useUser, useUserStore } from "../../context/stores";
import FormButtonComponent from "./FormButtonModal";
import { MdDelete, MdEdit } from "react-icons/md";
import DeleteButtonModal from "./DeleteButtonModal";
import { AiOutlineClear } from "react-icons/ai";


export const RegisterUser = () => {
  const usr = useUser((state) => state.user);
  const user = useUserStore((state) => state.user);
  const resetUser = useUserStore((state) => state.resetUser);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="grid grid-cols-12 items-start mt-10">
      <div className="col-span-4"></div>
      <Input
        type="text"
        variant="bordered"
        label="Ingresa el Número de documento"
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


      <div className="col-span-4"></div>
      <div className="col-span-2"></div>
      <Table
        aria-label="Example table with dynamic content"
        className="col-span-8"
        color="primary"
      >
        <TableHeader>
          <TableColumn className="text-center">Nombre del usuario</TableColumn>
          <TableColumn className="text-center">
            Identificación del usuario
          </TableColumn>
          <TableColumn className="text-center">Acciones</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-72 text-center">
              {user && user.nombre.length > 0
                ? user.nombre
                : "No se tiene nombre"}
            </TableCell>
            <TableCell className="w-72 text-center">
              {user && user.identificacion ? user.identificacion : "No se tiene documento"}
            </TableCell>
            <TableCell className="flex justify-center items-center gap-x-1">
              <FormButtonComponent
                icon={<IoCreateSharp />}
                className={"bg-yellow-500 text-white rounded-md"}
                enable={user ? true : false}
                action={"create"}
              />
              <Button
                isIconOnly
                color="danger"
                variant="solid"
                onPress={() => resetUser()}
                className="rounded-md"
                endContent={<AiOutlineClear />}
              />
              <FormButtonComponent
                icon={<IoEye />}
                className={"bg-blue-700 text-white rounded-md"}
                enable={!user}
                action={"view"}
              />
              {usr.cargo !== "Administrador" ? null : (
                <>
                  <FormButtonComponent
                    icon={<MdEdit />}
                    className={"bg-green-700 text-white rounded"}
                    enable={!user}
                    action={"edit"}
                  />
                  <DeleteButtonModal
                    icon={<MdDelete />}
                    classname={"bg-red-500 text-white rounded"}
                    enable={!user}
                  />
                </>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="col-span-2"></div>
    </div>
  );
};
