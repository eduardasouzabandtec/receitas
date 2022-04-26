import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from './button/button.component';
import { CardRecive } from './card-recipes/card-recipes.component';
import { PostIntagram } from './post-instagram/post/post.component';
import { TitleDivision } from './title-division/title-division.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('a')
  }
}
