import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button.component';
import { CardRecive } from '../card-recipes/card-recipes.component';
import { DataInput } from '../input/input.component';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor() { }
  dadosInput: Array<DataInput> = [
    {
      name: 'name',
      placeholder: 'Enter your name...'
    },
    {
      name: 'emAIL aDDRESS',
      placeholder: 'Your email address...'
    },
    {
      name: 'Subject',
      placeholder: 'Enter subject...'
    },
    {
    name: 'Subject',
      isSelect: true,
      select: ['Enter subject...', 'dados2']
    },
    {
      name: 'MEssages',
      isTextArea: true,
      placeholder:'Enter your messages...',
      
    }
  ]
  dadosButton: Button = {
    text:'Submit',
    type: 'black'
  }

  dataInputInbox: DataInput = {
    placeholder: "Your email address..."
  }
  dataButtonInbox: Button ={
    text:"Subscribe",
    type: "black"
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
    }
  ]
  ngOnInit(): void {
  }

}
