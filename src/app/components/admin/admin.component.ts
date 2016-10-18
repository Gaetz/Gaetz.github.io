import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../../models/category.model';
import { Post } from '../../models/post.model';

@Component({
  selector: 'gb-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categories: FirebaseListObservable<Category[]>;
  posts: FirebaseListObservable<Post[]>;

  private staticCategories: Array<Category> = [];

  titleCtrl: FormControl;
  resumeCtrl: FormControl;
  contentCtrl: FormControl;
  authorCtrl: FormControl;
  categoryCtrl: FormControl;
  postForm: FormGroup;

  constructor(
    private blogService: BlogService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    // Get data
    this.categories = this.blogService.listCategories();
    this.posts = this.blogService.listPosts();
    // Create post form
    this.titleCtrl = this.fb.control('', Validators.required);
    this.resumeCtrl = this.fb.control('', Validators.required);
    this.contentCtrl = this.fb.control('', Validators.required);
    this.authorCtrl = this.fb.control('Gaëtan Blaise-Cazalet', Validators.required);
    this.categoryCtrl = this.fb.control('1', Validators.required);
    this.postForm = this.fb.group({
      title: this.titleCtrl,
      resume: this.resumeCtrl,
      content: this.contentCtrl,
      author: this.authorCtrl,
      category: this.categoryCtrl
    });
    // Save categories
    this.UpdateStaticCategories();
  }

  // Create a static list of categories to avoid some database requests
  UpdateStaticCategories() {
    this.staticCategories = [];
    let usedKeys: Array<number> = [];
    this.categories.subscribe( categories => {
      categories.map( category => {
        if (usedKeys.indexOf(category.id) === -1) {
          this.staticCategories.push(category);
          usedKeys.push(category.id);
        }
      });
    });
  }

  // Forms
  resetPost() {
    this.titleCtrl.setValue('');
    this.resumeCtrl.setValue('');
    this.contentCtrl.setValue('');
    this.authorCtrl.setValue('Gaëtan Blaise-Cazalet');
    this.categoryCtrl.setValue('1');
  }

  submitPost(postValue, isValid: boolean) {
    if (isValid) {
      this.addPost(
        new Post(postValue.title, postValue.resume,
        postValue.content, postValue.author,
        parseInt(postValue.category, 10), this.getCategoryNameFromId(parseInt(postValue.category, 10))
      ));
      this.resetPost();
    }
  }

  // Retrieve a category name from the category list
  getCategoryNameFromId(categoryId: number)  {
    return this.staticCategories.find(category => category.id === categoryId).name;
  }

  // Get max id from Categories
  getMaxIdCategories(): number {
    let max = 0;
    this.staticCategories.forEach( category => {
      if (category.id > max) {
        max = category.id;
      }
    });
    return max;
  }

  // Categories
  addCategory(name: string) {
    let maxId = this.getMaxIdCategories();
    let c = new Category(maxId, name);
    this.blogService.addCategory(c);
    this.staticCategories.push(c);
  }

  editCategory(key: string, id: number, name: string) {
    this.blogService.updateCategory(key, new Category(id, name));
    this.UpdateStaticCategories();
  }

  removeCategory(key: string) {
    this.blogService.removeCategory(key);
    this.UpdateStaticCategories();
  }

  // Posts
  goToDetails(key: string) {
      this.router.navigate(['/blog/post', key]);
  }

  addPost(post: Post) {
    this.blogService.addPost(post);
  }

  removePost(key: string) {
    this.blogService.removePost(key);
  }
}
