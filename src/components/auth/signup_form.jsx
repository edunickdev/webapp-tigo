import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useUser } from "../../context/stores";

const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const signup = useUser((state) => state.signup);

  const hangleSignUp = async () => {
    setData({
      name: name,
      lastname: lastname,
      email: email,
      password: password,
    });
    await signup(data);
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
          onClick={hangleSignUp}
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
