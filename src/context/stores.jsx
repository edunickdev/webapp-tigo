import { create } from "zustand";
import {
  compareAndUpdateUser,
  CreateUser,
  DeleteUser,
  GetUserById,
} from "../services/employee_services/UserServices";
import { LoginService } from "../services/auth_services/login_services";
import { notify } from "../helpers/notifications";

export const useUser = create((set) => ({
  user: {},
  login: async ( email, password ) => {
    const user = await notify({
      messageList: ["Iniciando sesión", "Inicio de sesión exitoso", "Error al iniciar sesión"],
      funct: LoginService(email, password)
    })
    set({ user });
  },
  signin: async ( data ) => {
    const user = await notify({
      messageList: ["Registrando usuario", "Usuario registrado", "Error al registrar usuario"],
      funct: SignUpService(data.name, data.lastname, data.email, data.password)
    })
    set({ user });
  },
  logout: async () => {
    await notify({
      messageList: ["Cerrando sesión", "Sesión cerrada", "Error al cerrar sesión"],
      funct: set({ user: {} })
    })
  }
}));


export const useUserStore = create((set) => ({
  user: null,
  inputs: [
    { text: "Identificación", name: "id", value: "" },
    { text: "Nombre", name: "nombre", value: "" },
    { text: "Celular", name: "celular", value: "" },
    { text: "Cargo", name: "cargo", value: "" },
    { text: "Centro de costos", name: "centrocostos", value: "" },
    { text: "Centro Logístico", name: "centrologistico", value: "" },
    { text: "Ciudad", name: "ciudad", value: "" },
    { text: "Sede", name: "sede", value: "" },
    { text: "Jefe inmediato", name: "jefe", value: "" },
    { text: "Gerencia", name: "gerencia", value: "" },
    { text: "Usuario de red", name: "usuariored", value: "" },
  ],

  fetchUser: async (id) => {
    const user = await GetUserById(id);
    console.log(user);
    set({ user });
    await set((state) => {
      const updatedInputs = state.inputs.map((input) => ({
        ...input,
        value: user[input.name] || "",
      }));
      return { inputs: updatedInputs };
    });
  },

  updateUser: async (user, newFields) => {
    await compareAndUpdateUser(user, newFields);
  },

  createUser: async (user) => {
    await CreateUser(user);
  },

  deleteUser: async(user) => {
    await DeleteUser(user);
    set({ user: null })
  }
}));
