import api from "./api";

export const ratingService = {
  async addRating(recipeId: string) {
    const response = await api.post(`Rating/${recipeId}`);
    return response.data;
  },
  async removeFavorite(recipeId: string) {
    const response = await api.delete(`Rating/${recipeId}`);
    return response.data;
  },
};
