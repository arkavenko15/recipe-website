import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  public subscription: Subscription;
  public editMode: boolean = false;
  public editedItemIndex:number;
  public editedItem: Ingredient;
  @ViewChild('f', {static: true}) shoppingListForm: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public submitItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      console.log(this.editedItemIndex);
      console.log(newIngredient);
      this.shoppingListService.updateIngredient(this.editedItemIndex,  newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode = false;
    form.reset();
  }

  public onClear(): void{
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  public onDelete(): void{
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
