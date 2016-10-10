import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Location } from '@angular/common';

import { Post } from '../../models/post.model';

@Component({
  selector: 'gb-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.css']
})
export class BlogPostDetailsComponent implements OnInit {

  post: FirebaseObjectObservable<Post>;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => {
        let id:string = params['id'];
        this.post = this.blogService.getPost(id);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
