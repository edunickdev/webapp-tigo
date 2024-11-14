import { useState } from "react";
import LoginForm from "../../components/auth/login_form";
import SignUpForm from "../../components/auth/signup_form";
import { Button } from "@nextui-org/react";

const Login = () => {
  const [mode, setMode] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5 h-[90vh]">
      {mode ? <SignUpForm /> : <LoginForm />}
      <div className="text-center mt-4">
        <p className="text-gray-700 py-2 text-sm">
          {!mode ? "¿No tienes una cuenta?" : "Ya tengo cuenta"}
        </p>
        <Button
          variant="light"
          color="primary"
          onClick={() => setMode(!mode)}
          className="text-lg"
        >
          {mode ? "Iniciar Sesión" : "Regístrate"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
