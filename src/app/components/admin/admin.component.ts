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

  // Db access
  categories: FirebaseListObservable<Category[]>;
  posts: FirebaseListObservable<Post[]>;

  // Selected post when editing
  selectedPost: Post = null;
  submitLabel: String = "Ajouter";

  // Keep track of categories
  private staticCategories: Array<Category> = [];

  // Form controllers
  titleCtrl: FormControl;
  resumeCtrl: FormControl;
  contentCtrl: FormControl;
  authorCtrl: FormControl;
  categoryCtrl: FormControl;
  keyCtrl: FormControl;
  dateCtrl: FormControl;
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
    this.keyCtrl = this.fb.control('');
    this.dateCtrl = this.fb.control(0);
    this.postForm = this.fb.group({
      title: this.titleCtrl,
      resume: this.resumeCtrl,
      content: this.contentCtrl,
      author: this.authorCtrl,
      category: this.categoryCtrl,
      key: this.keyCtrl,
      date: this.dateCtrl
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
    // Reset post selection
    this.selectedPost = null;
    this.submitLabel = "Ajouter";
    // Reset form
    this.titleCtrl.setValue('');
    this.resumeCtrl.setValue('');
    this.contentCtrl.setValue('');
    this.authorCtrl.setValue('Gaëtan Blaise-Cazalet');
    this.categoryCtrl.setValue('1');
    this.keyCtrl.setValue('');
    this.dateCtrl.setValue(0);
  }

  // Submit post form, either for creating or editing
  submitPost(postValue, isValid: boolean) {
    if (isValid) {
      // Add post if not editing post
      if(this.selectedPost == null) {
        this.addPost(
          new Post(postValue.title, postValue.resume,
          postValue.content, postValue.author,
          parseInt(postValue.category, 10), this.getCategoryNameFromId(parseInt(postValue.category, 10))
        ));
      // If editing post, update post
      } else {
        this.updatePost(
          postValue.key, 
          new Post(postValue.title, postValue.resume,
            postValue.content, postValue.author,
            parseInt(postValue.category, 10), this.getCategoryNameFromId(parseInt(postValue.category, 10)),
            parseInt(postValue.date))
        )
      }
      this.resetPost();
    }
  }

  // Put data in form when a post is selected for edition
  putPostInForm(post: Post) {
    this.titleCtrl.setValue(post.title);
    this.resumeCtrl.setValue(post.resume);
    this.contentCtrl.setValue(post.content);
    this.authorCtrl.setValue(post.author);
    this.categoryCtrl.setValue(post.categoryId);
    this.keyCtrl.setValue(post.$key);
    this.dateCtrl.setValue(post.date);
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

  // Set post to be edited
  editPost(post: Post) {
    this.submitLabel = "Editer";
    this.selectedPost = post;
    this.putPostInForm(post);
  }

  // Categories services
  addCategory(name: string) {
    let maxId = this.getMaxIdCategories();
    let c = new Category(maxId, name);
    this.blogService.addCategory(c);
    this.staticCategories.push(c);
  }

  updateCategory(key: string, id: number, name: string) {
    this.blogService.updateCategory(key, new Category(id, name));
    this.UpdateStaticCategories();
  }

  removeCategory(key: string) {
    this.blogService.removeCategory(key);
    this.UpdateStaticCategories();
  }

  // Posts services
  goToDetails(key: string) {
      this.router.navigate(['/blog/post', key]);
  }

  addPost(post: Post) {
    this.blogService.addPost(post);
  }

  updatePost(key: string, post: Post) {
    this.blogService.updatePost(key, post);
  }

  removePost(key: string) {
    this.blogService.removePost(key);
  }
}
