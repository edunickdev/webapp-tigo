import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "../pages/login/Login.jsx";
import UserAccount from "../pages/UserAccount/UserAccount.jsx";
import { FormSearch } from "../components/forms/formSearch.jsx";
import { RegisterUser } from "../pages/registrar_usuario/RegisterUser.jsx";
import { CreateActa } from "../pages/crear_acta/CreateActa.jsx";
import TestPage from "../pages/test.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../context/stores.jsx";


function AppRouter() {
  
  const user = useUser((state) => state.user);

  const ProtectRoute = ({ children }) => {
    return user === !null ? children : <Navigate to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <ProtectRoute>
            <UserAccount />
          </ProtectRoute>
        } />
        <Route path="/buscar" element={<FormSearch />} />
        <Route path="/registrarusu" element={<RegisterUser />} />
        <Route path="/crearacta" element={<CreateActa />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default AppRouter;
