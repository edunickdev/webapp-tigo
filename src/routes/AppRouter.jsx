import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Login from "../pages/login/Login.jsx";
import Registro from "../pages/Registro/Registro.jsx";
import UserAccount from "../pages/UserAccount/UserAccount.jsx";
import { FormSearch } from "../components/forms/formSearch.jsx";
import { RegisterUser } from "../pages/registrar_usuario/RegisterUser.jsx";
import { CreateActa } from "../pages/crear_acta/CreateActa.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/buscar" element={<FormSearch />} />
        <Route path="/registrarusu" element={<RegisterUser />} />
        <Route path="/crearacta" element={<CreateActa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
