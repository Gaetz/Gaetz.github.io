import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { BlogService } from '../../services/blog.service';
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'gb-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {

  categories: FirebaseListObservable<Category[]>;

  constructor(private blogService: BlogService) {
    this.categories = this.blogService.listCategories();
  }

  ngOnInit() {

  }

  addCategory(name: string) {
    this.blogService.addCategory(new Category(name));
  }

  removeCategory(key: string) {
    this.blogService.removeCategory(key);
  }

}
