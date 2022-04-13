import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface PostIntagram {
  userIcon: string,
  nameUser: string,
  isVerificed: boolean,
  localization: string,
  image: string,
  numberImage: string,
  lastUserLiked: string,
  numberLiked: string,
  subtitleImage: string
  dateImage: string
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {
  @Input() datapost:PostIntagram = {
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
  }
  image = `url(${this.datapost.image})`
  constructor() {}


  background = ''
  ngOnInit(): void {
    this.image = `url(${this.datapost.image})`
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.image = `url(${this.datapost.image})`
    
  }

}

