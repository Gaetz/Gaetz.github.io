import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'gb-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  posts: FirebaseListObservable<Post[]>;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    // Manage category swap
    this.route.params.subscribe( data => {
      let categoryId: number = +data['id'];
      if (categoryId) {
        this.posts = this.blogService.listPosts(categoryId);
      } else {
        this.posts = this.blogService.listPosts();
      }
    });
  }

  goToDetails(key: string) {
      this.router.navigate(['/blog/post', key]);
  }

}
