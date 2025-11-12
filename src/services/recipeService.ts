import { postRequest, transformToFormData } from "@/util/helperFunctions.ts";
import api from "./api.ts";
import type { Recipe, RecipeFilter } from "@/types/interfaces.ts";
import type { RecipeService } from "@/types/iRecipeService.ts";

const recipeService: RecipeService = {
  async getAllRecipes() {
    const response = await api.get("Recipe/dash-recipes");
    return response.data;
  },
  async getRecipeById(id) {
    const response = await api.get(`Recipe/get-recipe/${id}`);
    return response.data;
  },
  async getFilteredRecipes(filter: RecipeFilter) {
    const response = await postRequest("Recipe/get-filtered-recipes", filter);
    return response.data;
  },
  async createRecipe(data: Recipe) {
    const response = await postRequest("Recipe/auth/create-recipe", data);
    return response.data;
  },
  async updateRecipe(id, data) {
    const formData = transformToFormData(data);
    const response = await api.put(
      `Recipe/auth/update-recipe/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  },
  async deleteRecipe(id) {
    const response = await api.delete(`Recipe/auth/delete-recipe/${id}`);
    return response.data;
  },
};

export default recipeService;
