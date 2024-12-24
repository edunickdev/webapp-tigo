import axios from "axios";
import { notify } from "../../helpers/notifications";

/**
 * `LoginService` - Servicio que maneja la autenticación de usuarios mediante una solicitud POST a la API.
 * 
 * Este servicio envía una solicitud de login con el correo electrónico y la contraseña del usuario, 
 * a un endpoint de autenticación en el backend. En caso de éxito, devuelve la respuesta con los datos del usuario.
 * 
 * **Lógica**:
 * - Se realiza una solicitud `POST` a la API `http://127.0.0.1:8000/api/auth/login/` con los datos del usuario (email y password).
 * - Si la solicitud es exitosa, se retorna la respuesta de la API (`request.data`).
 * - Si ocurre un error, se puede agregar una notificación al usuario o manejar el error según sea necesario.
 * 
 * **Parámetros**:
 * - `email` (string): Correo electrónico del usuario que intenta iniciar sesión.
 * - `password` (string): Contraseña del usuario.

 * **Uso**:
 * ```javascript
 * const userData = await LoginService(email, password);
 * ```
 */
export const LoginService = async (email, password) => {
  try {
    const request = await axios.post("http://127.0.0.1:8000/api/auth/login/", {
      email: email,
      password: password,
    });

    return request.data;
  } catch (error) {
    // Aquí podrías agregar manejo de errores y notificaciones si es necesario
    notify("Error en la autenticación", "error");
    throw error; // Lanzar el error para que pueda ser capturado en el componente que usa este servicio
  }
};
