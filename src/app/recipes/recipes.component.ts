import { Component, Input, OnInit } from '@angular/core';
import { CardRecive } from '../card-recipes/card-recipes.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() recipes: Array<CardRecive> = [];
  @Input() color: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
