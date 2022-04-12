import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TimeGroup } from '../time-group/time-group.component';

export interface CardRecive {
  isFavorite: boolean,
  urlFavorite: string,
  urlImage: string,
  text: string,
  time: string,
  group: string
}
@Component({
  selector: 'app-card-recipes',
  templateUrl: './card-recipes.component.html',
  styleUrls: ['./card-recipes.component.scss']
})
export class CardRecipesComponent implements OnChanges {

  constructor() { }
  isFavorite: boolean = false;
  timeGroup: TimeGroup = {
    time: '',
    group: ''
  }
  
  @Input() recipes: CardRecive = {
    isFavorite: false,
    urlFavorite: '',
    urlImage: '',
    text: '',
    time: '',
    group: '',
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.timeGroup = { time : this.recipes.time, group: this.recipes.group}
  }

  toggleFavorite(): void {
    this.recipes.isFavorite = !this.recipes.isFavorite;
    this.recipes.urlFavorite = this.recipes.isFavorite? '../../assets/img/heart.png' : '../../assets/img/noHeart.png'

  }

}
