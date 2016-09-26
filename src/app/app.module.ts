import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, BlogCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ BlogService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
