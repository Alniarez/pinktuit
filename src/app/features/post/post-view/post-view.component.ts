import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthenticationService } from '../../user/authentication.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent {

  constructor(private readonly postService: PostService,
              private readonly authService: AuthenticationService) {}

  @Input()
  post: Post;

  get myPost(): boolean{
    return this.post.creatorId === this.authService.myId;
  }

  removePost() {
    this.postService.deletePost(this.post);
  }
}
