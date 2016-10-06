import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FirebaseListObservable } from 'angularfire2';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Post } from '../../models/post.model';
import { Category } from '../../models/category.model';

import { OrderBy } from '../../shared/orderByPipe';

@Component({
  selector: 'gb-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  posts: FirebaseListObservable<Post[]>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.posts = this.blogService.listPosts();
  }

}
