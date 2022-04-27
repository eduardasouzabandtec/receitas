import { Component, Input, OnInit } from '@angular/core';

export interface DataInput{
 name?: string,
 placeholder?: string,
 isSelect?: boolean,
 isTextArea?: boolean,
 select?: string[]}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() dados: DataInput = {
    name: '',
    placeholder: '',
    isSelect: false,
    select: ['']
  }

  ngOnInit(): void {
  }

}
