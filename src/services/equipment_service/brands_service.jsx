import axios from "axios";

export const fetchFields = async () => {
    try {
        const response = await axios.get("http://localhost:8000/equipo/fields");

        return response;
    } catch (error) {
        throw error;
    }
}