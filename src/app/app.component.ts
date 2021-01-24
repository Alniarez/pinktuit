import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './features/post/post.model';
import { PostService } from './features/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  private _postUpdateSubscription: Subscription;

  constructor(private readonly postService: PostService){}

  ngOnInit(): void {
    this.postService.requestPosts();

    this._postUpdateSubscription = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
          this.posts = posts
        }
      );
  }

  ngOnDestroy(): void {
      this._postUpdateSubscription?.unsubscribe()
    }

}

