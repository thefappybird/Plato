import { postRequest } from "@/util/helperFunctions.ts";
import api from "./api.ts";
import type { LoginUser, RegisterUser, User } from "@/types/interfaces";
import type { UserService } from "@/types/iUserService.ts";

export const userService: UserService = {
  async getProfile(): Promise<User> {
    const response = await api.get("User/auth");
    return response.data;
  },
  async register(data: RegisterUser) {
    return await postRequest("User/register", data);
  },
  async login(credentials: LoginUser) {
    const response = await postRequest("User/login", credentials);
    return response.data;
  },
};
