import axios from "axios";

export const fetchBrands = async () => {
    try {
        const response = await axios.get("http://localhost:8000/equipo/marcas");

        return response;
    } catch (error) {
        throw error;
    }
}