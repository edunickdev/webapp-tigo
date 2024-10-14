import { create } from "zustand";
import {
  CreateUser,
  GetUserById,
  UpdateUser,
} from "../services/employee_services/UserServices";

export const useUserStore = create((set) => ({
  user: null,
  fetchUser: async (id) => {
    const user = await GetUserById(id);
    set({ user });
  },
  updateUser: async (user) => {
    await UpdateUser(user);
  },
  createUser: async (user) => {
    await CreateUser(user);
  },
}));
