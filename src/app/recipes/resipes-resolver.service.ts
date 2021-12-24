import { DataStorageService } from './../services/data-storage.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from './recipe.model';
import { RecipeService } from '../services/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{
  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const recipes = this.recipesService.getRecipes();

    if(recipes.length === 0) {
      console.log(this.dataStorageService.fetchRecipes());
    } else {
      return recipes
    }


    return this.dataStorageService.fetchRecipes()
  }
}
