import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>Recipe Box</h1>
     <h3>{{currentFocus}}</h3>
     <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} // {{currentRecipe.ingredients}} // {{currentRecipe.directions}}</li>
     </ul>
   </div>
  `
})


export class AppComponent {
  currentFocus: string = 'Pasta';


  recipes: Recipe[] = [
    new Recipe('Chicken Alfredo', 'chicken, alfredo, linguine', 'sauté in pan, 20 min'),
    new Recipe('Spaghetti', 'spaghettie, sauce, meat of choice', 'put in pot of boiling water'),
    new Recipe('Carbonara', 'pasta, bacon, cheeze', 'cook it')
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
