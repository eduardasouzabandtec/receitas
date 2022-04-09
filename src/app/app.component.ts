import { Component } from '@angular/core';
import { Button } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Array<any> = [
    {
      src: '../../assets/img/breakfast.png',
      title: 'Breakfast',
      type: 'grey'
    },
    {
      src: '../../assets/img/vegan.png',
      title: 'Vegan',
      type: 'green'
    },
    {
      src: '../../assets/img/meat.png',
      title: 'Meat',
      type: 'red'
    },
    {
      src: '../../assets/img/dessert.png',
      title: 'Dessert',
      type: 'yellow'
    },
    {
      src: '../../assets/img/lunch.png',
      title: 'Lunch'
    },
    {
      src: '../../assets/img/chocolate.png',
      title: 'Chocolate'
    }
  ]

  dataButton: Button = {
    text: 'View All Categories',
    type: 'blue'
  }
}
