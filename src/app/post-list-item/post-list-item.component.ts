import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { PostListComponentComponent } from '../post-list-component/post-list-component.component';
import { NgForOf } from '@angular/common';
import { post } from 'selenium-webdriver/http';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }
  addLoveIts() {
    this.loveIts++;
  }

  addDontLoveIts() {
    this.loveIts--;
  }
}

