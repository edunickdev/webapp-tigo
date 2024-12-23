import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { useUser } from "../../context/stores";

// autenticación maneja las funcionalidades de iniciar sesión y cerrar sesión.
// useNavigate = Permite redirigir al usuario a otra página una vez que se haya autenticado correctamente. 
// Link = enlace de "¿Olvidaste tu contraseña?" que, por ahora, no tiene acción definida pero permite navegación.
// Button y input = biblioteca NextUI para la creación de botones e inputs estilizados, respectivamente.
// Checkbox =  para la casilla de "Recordarme", que permite al usuario decidir si desea que su sesión se mantenga activa.
// useUser = personalizado para acceder a las funciones de autenticación definidas en el contexto de usuario.


// El componente utiliza el hook useUser para acceder a la función login que se encarga de autenticar al
//  usuario. La función handleLogin ejecuta el login pasando el correo electrónico, la contraseña 
// y la función de redirección (navigate) a la función de autenticación.

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useUser((state) => state.login);

    // Función para manejar el login

  const handleLogin = async () => {
    await login(email, password, navigate);
  }

  return (
    <div className="bg-blue-50 shadow-lg rounded-lg mt-20 p-14 flex flex-col">
      <p className="text-center text-3xl font-bold text-blue-800 mb-2">
        Iniciar Sesión
      </p>
      <p className="text-center text-blue-700 mb-6">Bienvenid@</p>

      <form className="flex flex-col w-72 gap-y-3">
        <Input
          color="primary"
          variant="underlined"
          label="Email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onValueChange={setEmail}
          className="text-blue-700"
        />
        <Input
          color="primary"
          variant="underlined"
          type="password"
          label="Password"
          placeholder="Ingresa tu password"
          value={password}
          onValueChange={setPassword}
          className="text-blue-700"
        />
        <div className="flex justify-between gap-x-4 py-2">
          <Checkbox size="sm" className="text-sm" defaultSelected>Recordarme</Checkbox>
          <Link
            to="#"
            className="text-sm transition-all duration-300 self-end text-blue-500 hover:text-blue-700 hover:underline"
          >
            <small>Olvidaste tu contraseña?</small>
          </Link>
        </div>

        <Button
          variant="solid"
          color="primary"
          onPress={handleLogin}
          className="text-base"
        >
          Iniciar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
