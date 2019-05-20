import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'blog';
	post = [{
		title: 'Post1',
		content: 'blabla blabla blabla blabla blabla blabla blabla blabla',
		loveIts: 2,
		created_at: new Date
	},
	{
		title: 'Post2',
		content: 'blabla blabla blabla blabla blabla blabla blabla blabla',
		loveIts: 0,
		created_at: new Date
	},
	{
		title: 'Post3',
		content: 'blabla blabla blabla blabla blabla blabla blabla blabla',
		loveIts: 1,
		created_at: new Date
	}]


	constructor() {

	}

	ngOnInit() {
	}


}
