import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

import { FormsModule } from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
