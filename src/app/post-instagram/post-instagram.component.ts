import { Component, Input, OnInit } from '@angular/core';
import { TitleDivision } from '../title-division/title-division.component';

@Component({
  selector: 'app-post-instagram',
  templateUrl: './post-instagram.component.html',
  styleUrls: ['./post-instagram.component.scss']
})
export class PostInstagramComponent implements OnInit {

  @Input() title: TitleDivision = {
    title: '',
    subtitle: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
