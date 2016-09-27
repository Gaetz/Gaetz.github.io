import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'gb-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {

  categories: Array<Category>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    // Subscribe to service observable and get categories when ready
    this.blogService.listCategories().subscribe( categories => this.categories = categories );
  }

}
