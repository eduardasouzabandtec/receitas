import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button.component';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {

  constructor() { }

  dataButton: Button = {
    text: 'Learn More',
    type:'black'
  }
  ngOnInit(): void {
  }

}
