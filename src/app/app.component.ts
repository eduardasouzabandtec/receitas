import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from './button/button.component';
import { CardRecive } from './card-recipes/card-recipes.component';
import { TitleDivision } from './title-division/title-division.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  cards: Array<any> = [
    {
      src: '../../assets/img/breakfast.png',
      title: 'Breakfast',
      type: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)'
    },
    {
      src: '../../assets/img/vegan.png',
      title: 'Vegan',
      type: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)'
    },
    {
      src: '../../assets/img/meat.png',
      title: 'Meat',
      type: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)'
    },
    {
      src: '../../assets/img/dessert.png',
      title: 'Dessert',
      type: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)'
    },
    {
      src: '../../assets/img/lunch.png',
      title: 'Lunch',
      type: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'
    },
    {
      src: '../../assets/img/chocolate.png',
      title: 'Chocolate',
      type: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'
    }
  ]

  dataButton: Button = {
    text: 'View All Categories',
    type: 'blue'
  }

  dataRecipes: Array<CardRecive> = [
    {
      urlImage: 'url(../../assets/img/hamburger.png)',
      group: 'Snack',
      isFavorite: false,
      text: 'Big and Juicy Wagyu Beef Cheeseburger',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/salmao.png)',
      group: 'Fish',
      isFavorite: false,
      text: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/panqueca.png)',
      group: 'Breakfast',
      isFavorite: false,
      text: 'Strawberry Oatmeal Pancake with Honey Syrup',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/misto.png)',
      group: 'Healthy',
      isFavorite: false,
      text: 'Fresh and Healthy Mixed Mayonnaise Salad',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/almondegas.png)',
      group: 'Meat',
      isFavorite: false,
      text: 'Chicken Meatballs with Cream Cheese',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/panquecaefruta.png)',
      group: 'Sweet',
      isFavorite: false,
      text: 'Fruity Pancake with Orange & Blueberry',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/pepino.png)',
      group: 'Snack',
      isFavorite: false,
      text: 'The Best Easy One Pot Chicken and Rice',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },
    {
      urlImage: 'url(../../assets/img/macarrao.png)',
      group: 'Noodles',
      isFavorite: false,
      text: 'The Creamiest Creamy Chicken and Bacon Pasta',
      time: '30 Minutes',
      urlFavorite: '../../assets/img/noHeart.png'
    },

  ]

  dataTitleRecipe: TitleDivision = {
    title: 'Simple and tasty recipes',
    subtitle: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
  }
  dataTitleInsta: TitleDivision = {
    title: 'Check out @foodieland on Instagram',
    subtitle: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('a')
  }
}
