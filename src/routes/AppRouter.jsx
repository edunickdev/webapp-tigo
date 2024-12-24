/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "../pages/login/Login.jsx";
import UserAccount from "../pages/UserAccount/UserAccount.jsx";
import { RegisterUser } from "../pages/registrar_usuario/RegisterUser.jsx";
import { CreateActa } from "../pages/crear_acta/CreateActa.jsx";
import TestPage from "../pages/test.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../context/stores.jsx";
import { FormSearch } from "../components/forms/FormSearch.jsx";

export const AppRouter = () => {
  const user = useUser((state) => state.user);

  const ProtectRoute = ({ children }) => {
    return user === null ? <Navigate to={"/"} /> : children;
  };

// * `AppRouter` - Componente que maneja la navegación de la aplicación mediante `react-router-dom`.


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home" // * - **`/home`**: Ruta protegida que lleva a la página de cuenta de usuario. Solo es accesible si el usuario está autenticado.

          element={
            <ProtectRoute>
              <UserAccount />
            </ProtectRoute>
          }
        />
        <Route
          path="/buscar" // * - **`/buscar`**: Ruta protegida que lleva a la página de búsqueda. Solo es accesible si el usuario está autenticado.
          element={
            <ProtectRoute>
              <FormSearch />
            </ProtectRoute>
          }
        />
        <Route
          path="/registrarusu"  // * - **`/registrarusu`**: Ruta protegida que lleva al formulario de registro de usuario. Solo es accesible si el usuario está autenticado.
          element={
            <ProtectRoute>
              <RegisterUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/crearacta"   // * - **`/crearacta`**: Ruta protegida que lleva al formulario para crear un acta. Solo es accesible si el usuario está autenticado.
          element={
            <ProtectRoute>
              <CreateActa />
            </ProtectRoute>
          }
        />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
