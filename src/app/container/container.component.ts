import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  @Input() backgroundcolor:string = 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'

  ngOnInit(): void {
  }

}
