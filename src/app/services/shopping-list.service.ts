import { Subject, Subscription } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {


  private ingredients: Ingredient[] = [{name: 'bread','amount':2},{name: 'apple','amount':2},{name: 'banana','amount':2}];
  public ingredientsChanged = new Subject<Ingredient[]>();
  public startedEditing:Subject<number> = new Subject<number>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient)
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  updateIngredient( index, newIngredient ): void {
    console.log(index);
    console.log(newIngredient);
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number): void{
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

}
