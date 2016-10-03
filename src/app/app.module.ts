import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

import { BlogService } from './services/blog.service';
import { FirebaseService } from './services/firebase.service';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAToR2S-730tUKOYRQq75cLSYPBO5qBjfQ',
  authDomain: 'gaetz-github-io.firebaseapp.com',
  databaseURL: 'https://gaetz-github-io.firebaseio.com',
  storageBucket: 'gs://gaetz-github-io.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent, MenuComponent, BlogCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ BlogService, FirebaseService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
