import { create } from "zustand";
import {
  compareAndUpdateUser,
  CreateUser,
  DeleteUser,
  GetUserById,
} from "../services/employee_services/UserServices";
import { LoginService } from "../services/auth_services/login_services";
import { notify } from "../helpers/notifications";
import { GetEquipmentBySerial, CreateEquipment } from "../services/equipment_service/equipment_services"
import { SignUpService } from "../services/auth_services/signup_services";
import { fetchFields } from "../services/equipment_service/brands_service";

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

  deleteUser: async(user) => {
    await DeleteUser(user);
    set({ user: null })
  },
  resetUser: () => {
    set({ user: null });
  }
}));


export const useEquipmentStore = create((set) => ({
  equipment: null,
  inputs: [
    { text: "Serial", name: "Serial", value: "" },
    { text: "Tipo", name: "Tipo", value: "" },
    { text: "Placa", name: "Placa", value: "" },
    { text: "Marca", name: "Marca", value: "" },
    { text: "MAC", name: "MAC", value: "" },
    { text: "Disco", name: "Disco", value: "" },
    { text: "RAM", name: "RAM", value: "" },
    { text: "IP", name: "IP", value: "" },
    { text: "Punto Red", name: "Punto Red", value: "" },
    { text: "Accesorios", name: "Accesorios", value: "" },
    { text: "Antiguedad", name: "Antiguedad", value: "" },
    { text: "version_SO", name: "version_SO", value: "" },
    { text: "otros", name: "otros", value: "" },
    { text: "usuario", name: "usuario", value: "" },
  ],

  fetchEquipment: async (serial) => {
    const equipment = await GetEquipmentBySerial(serial);
    console.log(equipment);
    set({ equipment });
    set((state) => {
      const updatedInputs = state.inputs.map((input) => ({
        ...input, 
        value: equipment[input.name] || "",
      }));

      console.log(updatedInputs);
      return { inputs: updatedInputs };
    });
  },

  updateEquipment: async (equipment, newFields) => {
    await compareAndUpdateEquipment(equipment, newFields);
  },

  createEquipment: async (equipment, accesories, userId) => {
    await CreateEquipment(equipment, accesories, userId.id);
  },

  deleteEquipment: async(equipment) => {
    await DeleteEquipment(equipment);
    set({ equipment: null });
  },
  setEquipment: (equipment) => {
    set({ equipment });
  },
  resetEquipment: () => {
    set({ equipment: null });
  }
}));


export const useBrandsStore = create((set) => ({
  brands: [],
  accesories: [],
  brand: null,
  accesory: [],
  fetchFields: async () => {
    try {
      const response = await fetchFields();
      set({ brands: response.data["brands"] });
      set({ accesories: response.data["accessories"] });
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  },
  setBrand: (brand) => {
    set({ brand });
  },
}));


export const useNewEquipmentStore = create((set) => ({
  newEquipment: {},
  setNewEquipment: (newEquipment) => {
    set({ newEquipment });
  },
  resetNewEquipment: () => {
    set({ newEquipment: {} });
  },
}));

