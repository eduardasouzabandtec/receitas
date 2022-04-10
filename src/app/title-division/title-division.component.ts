import { Component, Input, OnInit } from '@angular/core';

export interface TitleDivision {
  title: string,
  subtitle: string
}
@Component({
  selector: 'app-title-division',
  templateUrl: './title-division.component.html',
  styleUrls: ['./title-division.component.scss']
})
export class TitleDivisionComponent implements OnInit {

  constructor() { }
  @Input() datatitle: TitleDivision = {
    subtitle: '',
    title: ''
  }
  ngOnInit(): void {
  }

}
