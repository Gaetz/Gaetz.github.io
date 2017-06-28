import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { AdminComponent } from './components/admin/admin.component';

import { OrderBy } from './shared/orderByPipe';

import { BlogService } from './services/blog.service';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BlogCategoriesComponent,
    BlogPostsComponent,
    BlogPostDetailsComponent,
    AdminComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
