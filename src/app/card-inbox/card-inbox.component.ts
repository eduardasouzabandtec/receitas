import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../button/button.component';
import { DataInput } from '../input/input.component';

@Component({
  selector: 'app-card-inbox',
  templateUrl: './card-inbox.component.html',
  styleUrls: ['./card-inbox.component.scss']
})
export class CardInboxComponent implements OnInit {

  constructor() { }

  @Input() inputinbox: DataInput = {};
  @Input() buttoninbox: Button = { text: "", type: "" }
  corBackground = "#E7F9FD"
  ngOnInit(): void {
  }

}
