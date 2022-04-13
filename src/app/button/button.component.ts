import { Component, Input, OnInit } from '@angular/core';

export interface Button {
  text: string,
  type:string,
  icon?:string
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() button: Button = {
    text: '',
    type: ''
  }
  ngOnInit(): void {
  }

}
