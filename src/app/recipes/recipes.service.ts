import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Pizza',
    imageUrl: "https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg",
    ingredients: ["Cheese", "Dough", "Sauce"]
    },
    {
      id: 'r2',
      title: 'Salad',
      imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1-225x225.jpg",
      ingredients: ["Lettuce", "Croutons", "Cheese"]
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

  removeRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
