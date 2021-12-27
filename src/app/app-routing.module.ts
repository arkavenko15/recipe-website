import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

const appRoutes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // {path: 'recipes', loadChildren: ()=>import('./recipes/recipes.module').then(m => m.RecipesModule)},
  // {path: 'shopping-list', loadChildren: ()=>import('./shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule)}
  {path:'recipes', loadChildren: './recipes/recipes-routing.module#RecipesModule'},
  {path:'shopping-list', loadChildren: './recipes/recipes-routing.module#ShoppingListModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
