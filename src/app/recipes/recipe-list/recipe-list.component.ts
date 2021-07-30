import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =  [
    new Recipe('A test Recipe', 'This is a simply recipe', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_1600,c_limit/0621-Sheet-Pan-Gnocchi.jpg'),
    new Recipe('Another Recipe', 'This is a another recipe', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_1600,c_limit/0621-Sheet-Pan-Gnocchi.jpg'),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
