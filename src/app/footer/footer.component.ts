import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  texts: Array<string> = ['Recipes','Blog', 'Contact','About us'];
  icons: Array<string>= ['../../assets/img/facebook.svg','../../assets/img/instagram.svg', '../../assets/img/twitter.svg']

  ngOnInit(): void {
  }

}
