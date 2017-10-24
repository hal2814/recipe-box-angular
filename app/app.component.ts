import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <img src="img/pasta.jpg" alt="pasta" height="300px" width="auto">
     <h1>Recipe Box</h1>
     <h3>{{currentFocus}}</h3>
     <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}  <button class="btn"  (click)="editRecipe(currentRecipe)">Edit</button></li>
     </ul>
   <div>
    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.ingredients}}</h3>
      <h3>{{selectedRecipe.directions}}</h3>
      <hr>
      <h3>Edit Recipe</h3>
      <label>Enter Recipe Ingredients:</label>
      <input [(ngModel)]="selectedRecipe.ingredients">
      <label>Enter Recipe Directions:</label>
      <input [(ngModel)]="selectedRecipe.directions">
      <button class="btn" (click)="finishedEditing()">Done</button>
    </div>
  </div>
</div>
  `
})

export class AppComponent {
  currentFocus: string = 'Pasta';

  recipes: Recipe[] = [
    new Recipe('Chicken Alfredo', 'chicken, alfredo, linguine', 'sauté in pan, 20 min'),
    new Recipe('Spaghetti', 'spaghettie, sauce, meat of choice', 'put in pot of boiling water'),
    new Recipe('Carbonara', 'pasta, bacon, cheeze', 'cook it')];
    selectedRecipe = null;

    editRecipe(clickedRecipe) {
       this.selectedRecipe = clickedRecipe;
     }

     finishedEditing() {
     this.selectedRecipe = null;
   }

  }

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
