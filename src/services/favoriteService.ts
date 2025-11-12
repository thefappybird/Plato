import { ref } from "vue";
import api from "./api";
import type { FavoriteFilter } from "@/types/interfaces";
import { postRequest } from "@/util/helperFunctions";

export const favoriteService = {
  async addFavorite(recipeId: string) {
    const response = await api.post(`Favorite/${recipeId}`);
    return response.data;
  },
  async removeFavorite(recipeId: string) {
    const response = await api.delete(`Favorite/${recipeId}`);
    return response.data;
  },
  async getFilteredFavoritesByUser(filter: FavoriteFilter) {
    const response = await postRequest("Favorite/current", filter);
    return response.data;
  },
};
