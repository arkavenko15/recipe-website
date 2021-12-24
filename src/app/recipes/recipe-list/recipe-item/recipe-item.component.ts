import { RecipeService } from './../../../services/recipe.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() recipeId:number;
  constructor(private recipeService: RecipeService, ) { }

  ngOnInit() {

  }

}
