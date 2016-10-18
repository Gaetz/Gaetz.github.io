import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Category } from '../models/category.model';
import { Post } from '../models/post.model';

@Injectable()
export class BlogService  {

  categories: FirebaseListObservable<Category[]>;
  blogPosts: FirebaseListObservable<Post[]>;

  constructor(private af: AngularFire) {
    this.categories = this.af.database.list('/categories');
    this.blogPosts = this.af.database.list('/blogPosts');
  }

  // Categories
  listCategories(): FirebaseListObservable<Category[]> {
    return this.categories;
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }

  updateCategory(categoryKey, category: Category) {
    this.categories.update(categoryKey, category);
    // Key list to avoid multiple updates
    let usedKeys: Array<string> = [];
    // Browse blog posts and change nested category if it fits the argument
    this.blogPosts.subscribe( posts => {
      posts.filter(post => post.categoryId === category.id).map( post => {
        let key = post.$key; // This $key is not found by compiler, though it works
        if (usedKeys.indexOf(key) === -1) {
          this.updatePost(key, new Post(post.title, post.resume, post.content, post.author, category.id, category.name, post.date));
          usedKeys.push(key);
        }
      });
    });
  }

  removeCategory(key) {
    this.categories.remove(key);
  }

  // Posts
  listPosts(categoryId?: number): FirebaseListObservable<Post[]> {
    if (categoryId) {
      return this.af.database.list('/blogPosts', {
        query: {
          orderByChild: 'categoryId',
          equalTo: categoryId
        }
      });
    } else {
      return this.blogPosts;
    }
  }

  getPost(key: string) {
    return this.af.database.object('/blogPosts/' + key);
  }

  addPost(post: Post) {
    this.blogPosts.push(post);
  }

  updatePost(key, post: Post) {
    this.blogPosts.update(key, post);
  }

  removePost(key) {
    this.blogPosts.remove(key);
  }
}
