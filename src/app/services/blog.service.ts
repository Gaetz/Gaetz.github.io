import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';

@Injectable()
export class BlogService  {

  categories: FirebaseListObservable<Category[]>;
  blogPosts: FirebaseListObservable<Post[]>;

  constructor(private db: AngularFireDatabase) {
    this.categories = db.list('/categories');
    this.blogPosts = db.list('/blogPosts');
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
    const usedKeys: Array<string> = [];
    // Browse blog posts and change nested category if it fits the argument
    this.blogPosts.subscribe( posts => {
      posts.filter(post => post.categoryId === category.id).map( post => {
        const key = post.$key; // This $key is not found by compiler, though it works
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
      return this.db.list('/blogPosts', {
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
    return this.db.object('/blogPosts/' + key);
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
