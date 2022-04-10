import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.scss']
})
export class CardAdComponent implements OnInit {

  constructor() { }
  color: string= "linear-gradient(180deg, #357355 0%, #1D483B 100%)"

  ngOnInit(): void {
  }

}
