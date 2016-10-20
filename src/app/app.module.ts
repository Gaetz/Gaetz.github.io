import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { AdminComponent } from './components/admin/admin.component';

import { OrderBy } from './shared/orderByPipe';

import { BlogService } from './services/blog.service';

import { routing } from './app.routing';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAToR2S-730tUKOYRQq75cLSYPBO5qBjfQ',
  authDomain: 'gaetz-github-io.firebaseapp.com',
  databaseURL: 'https://gaetz-github-io.firebaseio.com',
  storageBucket: 'gs://gaetz-github-io.appspot.com'
};


export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BlogCategoriesComponent,
    BlogPostsComponent,
    BlogPostDetailsComponent,
    AdminComponent,
    OrderBy,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing
  ],
  providers: [ BlogService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
