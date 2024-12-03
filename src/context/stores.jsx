import { create } from "zustand";
import {
  compareAndUpdateUser,
  CreateUser,
  DeleteUser,
  GetUserById,
} from "../services/employee_services/UserServices";
import { LoginService } from "../services/auth_services/login_services";
import { notify } from "../helpers/notifications";
import { GetEquipmentBySerial } from "../services/equipment_service/equipment_services"
import { SignUpService } from "../services/auth_services/signup_services";
import { fetchBrands } from "../services/equipment_service/brands_service";
import axios from "axios";

export const useEquipmentStore = create((set) => ({
  equipment: null,
  saveEquipment: async (equipmentData) => {
      try {
          const newEquipment = await SaveEquipment(equipmentData);
          set({ equipment: newEquipment });
          console.log("Equipo guardado correctamente:", newEquipment);
      } catch (error) {
          console.error("Error al guardar el equipo:", error);
      }
  
export const useUser = create((set) => ({
  user: null,
  token: "",
  login: async ( email, password, navigate ) => {
    if (email === "" || password === "") {
      return;
    }

    const result = await notify({
      messageList: ["Iniciando sesión", "Inicio de sesión exitoso", "Error al iniciar sesión"],
      funct: LoginService(email, password)
    });

    console.log(result.user);
    console.log(result.token);

    if (!result) {
      return;
    }

    set({ user: result.user });
    set({ token: result.token });

    navigate("/home");
  },
  signup: async ( data ) => {
    
    if (data.name === "" || data.lastname === "" || data.email === "" || data.password === "") {
      return;
    }
    const user = await notify({
      messageList: ["Registrando usuario", "Usuario registrado", "Error al registrar usuario"],
      funct: SignUpService(data.name, data.lastname, data.email, data.password)
    })
    set({ user });
  },
  logout: () => {
    set({ user: null });
    set({ token: "" });
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

  createEquipment: async (equipment) => {
    await CreateEquipment(equipment);
  },

  deleteEquipment: async(equipment) => {
    await DeleteEquipment(equipment);
    set({ equipment: null })
  }
}));


export const useBrandsStore = create((set) => ({
  brands: [],
  brand: null,
  fetchMarcas: async () => {
    try {
      const response = await fetchBrands();
      set({ brands: response.data["response"] });
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

