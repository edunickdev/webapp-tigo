import { toast } from "react-toastify";

//Función que muestra notificaciones utilizando react-toastify y gestiona el estado de una operación asíncrona.

// Se usa toast.promise para gestionar el estado de la promesa y mostrar diferentes mensajes
// en función del estado de la promesa: "pending", "success", o "error".

export const notify = async ({ messageList, funct, position, duration }) => {
    
    const result = await toast.promise(
    funct,
    {
        pending: messageList[0],
        success: messageList[1],
        error: messageList[2],
    },
    {  
        position: position || "bottom-center",
        autoClose: duration || 3000,
    })

    return result;

}