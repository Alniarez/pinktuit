import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post/post.model";
import { PostService } from "../post/post.service";

@Component({
  selector: "feed",
  templateUrl: "./feed.component.html"
})
export class FeedComponent implements OnInit, OnDestroy {

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
