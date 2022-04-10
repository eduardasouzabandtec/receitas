import { Component, Input, OnInit } from '@angular/core';

export interface TimeGroup {
  time:string,
  group:string,
  hasBorder?: boolean
}
@Component({
  selector: 'app-time-group',
  templateUrl: './time-group.component.html',
  styleUrls: ['./time-group.component.scss']
})
export class TimeGroupComponent implements OnInit {

  constructor() { }


  @Input() datatime: TimeGroup = {
    time: '',
    group: ''
  }
  ngOnInit(): void {
  }

}
