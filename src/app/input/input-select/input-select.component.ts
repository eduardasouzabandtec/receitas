import { Component, Input, OnInit } from '@angular/core';
import { DataInput } from '../input.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
 @Input() dadosselect: DataInput= {
   name:'',
   placeholder:''
 }
  constructor() { }

  ngOnInit(): void {
    console.log(this.dadosselect)
  }

}
