import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  constructor() { }
  isLitle: boolean = false;
  @Input() card:any;
  


  ngOnInit(): void {
  }

}
