import { RecipeService } from "./../../services/recipe.service";
import { Component, OnInit, EventEmitter, Output, OnDestroy } from "@angular/core";

import { Recipe } from "../recipe.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[];
  public recipesChangedSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

  public onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
