import { useState } from "react";
import LoginForm from "../../components/auth/login_form";
import SignUpForm from "../../components/auth/signup_form";
import { Button } from "@nextui-org/react";

const Login = () => {
  const [mode, setMode] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {mode ? <SignUpForm /> : <LoginForm />}
      <div className="text-center mt-4">
        <p className="text-gray-700">
          {!mode ? "¿No tienes una cuenta?" : "Ya tengo cuenta"}
        </p>
        <Button
          variant="light"
          onClick={() => setMode(!mode)}
          className="text-blue-600 hover:underline font-semibold"
        >
          {mode ? "Iniciar Sesión" : "Regístrate"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
