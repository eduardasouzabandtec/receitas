import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  icons:Array<string> = ['../../assets/img/facebook.svg','../../assets/img/instagram.svg', '../../assets/img/twitter.svg']
  texts:Array<string>= ['Home','Recipes','Blog', 'Contact','About us']
  ngOnInit(): void {
  }

}
