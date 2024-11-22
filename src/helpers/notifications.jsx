import { toast } from "react-toastify";

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