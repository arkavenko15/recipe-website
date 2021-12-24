import { RecipeService } from './../services/recipe.service';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../services/shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private changeIngredientsSubs: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService:  ShoppingListService) { }


  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.changeIngredientsSubs = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )


  }

  ngOnDestroy(): void {
    this.changeIngredientsSubs.unsubscribe();
  }

  onEditItem(index: number): void{
    this.shoppingListService.startedEditing.next(index);
  }


}
