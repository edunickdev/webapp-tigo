import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import SignUpService from "../../services/auth_services/signup_services";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="bg-gray-200 rounded-lg shadow-md h-4/5 text-secondary w-[35rem] px-[50px] py-[20px] mt-20">
      <p className="text-center text-3xl mb-3 text-gray-800 font-bold">
        Registrate
      </p>
      <form className="flex flex-col gap-y-4">
        <Input
          label="Nombre(s)"
          placeholder="Ingresa tu(s) nombre(s)"
          value={name}
          onValueChange={setName}
        />
        <Input
          label="Apellido(s)"
          placeholder="Ingresa tu(s) apellido(s)"
          value={lastName}
          onValueChange={setLastName}
        />
        <Input
          label="Corrreo Electronico"
          placeholder="Ingresa tu correo electronico"
          value={email}
          onValueChange={setEmail}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Ingresa tu password"
          value={password}
          onValueChange={setPassword}
        />
        <Button
          onClick={() => SignUpService(name, lastName, email, password)}
          className="bg-sky-600 w-full text-white text-center py-2 rounded shadow-md hover:bg-sky-600 transition duration-300"
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
