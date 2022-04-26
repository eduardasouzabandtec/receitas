import { Component, Input, OnInit } from '@angular/core';
import { DataInput } from '../input.component';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss']
})
export class InputTextAreaComponent implements OnInit {

  @Input() dados: DataInput = {
    name: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
