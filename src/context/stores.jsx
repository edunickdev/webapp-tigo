import { create } from "zustand";
import {
  compareAndUpdateUser,
  CreateUser,
  GetUserById,
} from "../services/employee_services/UserServices";

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
    set({ user });
    set((state) => {
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

  setInputs: (inputs) => {
    set({ inputs });
  },
}));
