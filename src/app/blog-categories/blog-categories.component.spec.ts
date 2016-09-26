/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BlogCategoriesComponent } from './blog-categories.component';
import { BlogService } from '../services/blog.service';


describe('Component: BlogCategories', () => {
  it('should create an instance', () => {
    let blogService = new BlogService();
    let component = new BlogCategoriesComponent(blogService);
    expect(component).toBeTruthy();
  });
});
