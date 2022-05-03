import { Component,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../button/button.component';
import { CardRecive } from '../card-recipes/card-recipes.component';
import { DataInput } from '../input/input.component';
import { PostIntagram } from '../post-instagram/post/post.component';
import { TitleDivision } from '../title-division/title-division.component';
@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
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
  dataPost: Array<PostIntagram> = [
    {
      userIcon: "../../../assets/img/userInsta.svg",
      nameUser: "Foodieland.",
      isVerificed: true,
      localization: "Tokyo, Japan",
      image: "../../../assets/img/post1.png",
      numberImage: "1/3",
      lastUserLiked:"craig_love",
      numberLiked:"44,686",
      subtitleImage:"The vegetables dishes need to have certain vitamin for those people",
      dateImage:"September 19"
    },
    {
      userIcon: "../../../assets/img/userInsta.svg",
      nameUser: "Foodieland.",
      isVerificed: true,
      localization: "Tokyo, Japan",
      image: "../../../assets/img/post2.png",
      numberImage: "1/3",
      lastUserLiked:"craig_love",
      numberLiked:"44,686",
      subtitleImage:"Sweet food can bring someon into happiness as long as they don’t eat to much",
      dateImage:"September 19"
    },
    {
      userIcon: "../../../assets/img/userInsta.svg",
      nameUser: "Foodieland.",
      isVerificed: true,
      localization: "Tokyo, Japan",
      image: "../../../assets/img/post3.png",
      numberImage: "1/3",
      lastUserLiked:"craig_love",
      numberLiked:"44,686",
      subtitleImage:"What are you doing before start cooking? prepare the  tools or ingredients?",
      dateImage:"September 19"
    },
    {
      userIcon: "../../../assets/img/userInsta.svg",
      nameUser: "Foodieland.",
      isVerificed: true,
      localization: "Tokyo, Japan",
      image: "../../../assets/img/post4.png",
      numberImage: "1/3",
      lastUserLiked:"craig_love",
      numberLiked:"44,686",
      subtitleImage:"Steak never be wrong, it’s suitable for you who want romantic dinner",
      dateImage:"September 19"
    },
  ]

  dataInputInbox: DataInput = {
    placeholder: "Your email address..."
  }
  dataButtonInbox: Button = {
    text:"Subscribe",
    type: "black"
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('a')
  }
}
