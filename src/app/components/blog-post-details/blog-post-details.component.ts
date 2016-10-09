import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  selector: 'gb-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.css']
})
export class BlogPostDetailsComponent implements OnInit {

  postMessage: Post;

  constructor() { }

  ngOnInit() {
  }

}
