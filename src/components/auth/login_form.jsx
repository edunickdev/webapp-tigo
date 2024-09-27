import { Button, Input } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { LoginService } from "../../services/auth_services/login_services";
import { useState } from "react";
import { Checkbox } from "@nextui-org/checkbox";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-gray-200 p-8 shadow-md rounded-lg w-[35rem] h-4/5 mt-20">
      <p className="text-center text-3xl font-bold text-gray-800 mb-2">
        Iniciar Sesión
      </p>
      <p className="text-center text-gray-500 mb-6">Bienvenid@</p>

      {/* Formulario de Login */}
      <div className="space-y-4">
        <div>
          <Input
            label="Email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onValueChange={setEmail}
          />
        </div>
        <div>
          <Input
            type="password"
            label="Password"
            placeholder="Ingresa tu password"
            value={password}
            onValueChange={setPassword}
          />
        </div>

        {/* Recordarme y Olvidaste contraseña */}
        <div className="flex items-center justify-between">
          <Checkbox defaultSelected>Recordarme</Checkbox>
          <NavLink
            to="/forgot-password"
            className="text-blue-600 hover:underline text-lg"
          >
            <small>Olvidaste tu contraseña?</small>
          </NavLink>
        </div>

        {/* Botón de Iniciar */}
        <Button
          variant="solid"
          // to="/home"
          onClick={() => LoginService(email, password)}
          className="bg-sky-600 w-full text-white text-center py-2 rounded shadow-md hover:bg-sky-600 transition duration-300"
        >
          Iniciar
        </Button>

        {/* Registro */}
      </div>
    </div>
  );
};

export default LoginForm;
