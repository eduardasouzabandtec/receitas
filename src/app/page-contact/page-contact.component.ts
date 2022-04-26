import { Component, OnInit } from '@angular/core';
import { Button } from '../button/button.component';
import { DataInput } from '../input/input.component';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {

  constructor() { }
  dadosInput: Array<DataInput> = [
    {
      name: 'name',
      placeholder: 'Enter your name...'
    },
    {
      name: 'emAIL aDDRESS',
      placeholder: 'Your email address...'
    },
    {
      name: 'Subject',
      placeholder: 'Enter subject...'
    },
    {
    name: 'Subject',
      isSelect: true,
      select: ['Enter subject...', 'dados2']
    },
    {
      name: 'MEssages',
      isTextArea: true,
      placeholder:'Enter your messages...',
      
    }
  ]
  dadosButton: Button = {
    text:'Submit',
    type: 'black'
  }
  ngOnInit(): void {
  }

}
