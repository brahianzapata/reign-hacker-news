import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() author: string = '';
  @Input() story_title: string = '';
  @Input() story_url: string = '';
  @Input() created_at: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(){

  }

  removeFavorite(){

  }

}
