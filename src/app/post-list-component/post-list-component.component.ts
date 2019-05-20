import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
@Input () post= {
  title: "",
  content: "",
  loveIts: Number,
  created_at: Date
} 

  constructor() { }

  ngOnInit() {

  }

}
