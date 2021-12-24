import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  public recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "A Test Recipe1",
  //     "This is simply a test1",
  //     "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
  //     [
  //       new Ingredient("meat", 1),
  //       new Ingredient("bread", 1),
  //       new Ingredient("salad", 1),
  //     ]
  //   ),
  //   new Recipe(
  //     "A Test Recipe2",
  //     "This is simply a test2",
  //     "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
  //     [
  //       new Ingredient("milk", 2),
  //       new Ingredient("banana", 1),
  //       new Ingredient("seed", 1),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes)
  }

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public addRecipe(recipe: Recipe): void{
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  public updateRecipe(index: number, newRecipe: Recipe): void{
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())

  }

  public deleteRecipe(index: number):void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
