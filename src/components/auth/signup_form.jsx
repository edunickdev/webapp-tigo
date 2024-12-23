import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useUser } from "../../context/stores";

// El componente maneja el proceso de registro de usuario.


const SignUpForm = () => {
  const [password, setPassword] = useState("");  //Estado para la contraseña
  const [email, setEmail] = useState("");         //Estado para el correo
  const [name, setName] = useState("");           //Estado para el nombre de usuario
  const [lastname, setLastName] = useState("");   //Estado para el apellido del usuario

// Estado para almacenar los datos completos del formulario

  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

// Función de registro proveniente del contexto de usuario

  const signup = useUser((state) => state.signup);

// Función para manejar el registro

  const hangleSignUp = async () => {
    setData({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    });
    await signup(data); // Llamada a la función de signup del contexto
  }

  return (
    <div className="bg-blue-50 shadow-lg rounded-lg md:mt-0 lg:mt-20 p-14 flex flex-col">
      <p className="text-center text-3xl font-bold text-blue-800 mb-2">
        Registrate
      </p>
      <form className="flex flex-col w-72 gap-y-3">
        <Input
          color="primary"
          variant="underlined"
          label="Nombre(s)"
          placeholder="Ingresa tu(s) nombre(s)"
          value={name}
          onValueChange={setName}
          className="text-blue-700"
        />
        <Input
          color="primary"
          variant="underlined"
          label="Apellido(s)"
          placeholder="Ingresa tu(s) apellido(s)"
          value={lastname}
          onValueChange={setLastName}
          className="text-blue-700"
        />
        <Input
          color="primary"
          variant="underlined"
          label="Corrreo Electronico"
          placeholder="Ingresa tu correo electronico"
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
        <Button
          onClick={hangleSignUp}    // Llama a la función de registro al hacer clic
          variant="solid"
          color="primary"
          className="mt-6"
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
