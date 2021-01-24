import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent {
  constructor(private readonly postService: PostService) {}

  @Input()
  post: Post;

  removePost() {
    this.postService.deletePost(this.post);
  }
}
