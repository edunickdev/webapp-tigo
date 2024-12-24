import axios from "axios";

// Realiza la solicitud GET al servidor


export const fetchFields = async () => {
    try {
        const response = await axios.get("http://localhost:8000/equipo/fields");
// Retorna la respuesta de la API

    return response;
    } catch (error) {

// Lanza el error para que se maneje en el lugar donde se llama la función

        throw error;
    }
}


