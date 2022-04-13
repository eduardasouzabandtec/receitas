import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../button/button.component';
import { TitleDivision } from '../title-division/title-division.component';
import { PostIntagram } from './post/post.component';

@Component({
  selector: 'app-post-instagram',
  templateUrl: './post-instagram.component.html',
  styleUrls: ['./post-instagram.component.scss']
})
export class PostInstagramComponent implements OnInit {

  @Input() title: TitleDivision = {
    title: '',
    subtitle: ''
  };
  @Input() post: Array<PostIntagram> = [{
    userIcon: '',
    nameUser: '',
    isVerificed: false,
    localization: '',
    image: '',
    numberImage: '',
    lastUserLiked: '',
    numberLiked: '',
    subtitleImage: '',
    dateImage: ''
  }]
  dataButton: Button = {
    text: 'Visit Our Instagram',
    type: 'black-icon',
    icon: '../../../assets/img/white-instagram.svg'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
