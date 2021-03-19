import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(private readonly http: HttpClient) {}

  private _posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  requestPosts() {
    this.http.get<{
      message: string;
      posts: { _id: string; content: string, creatorId: string, creatorEmail: string }[]
    }>('http://localhost:3000/api/posts')
      .subscribe((postsResponse) => {
         this._posts = postsResponse.posts.map((post) => {
          return {
            id: post._id,
            content: post.content,
            creatorId: post.creatorId,
            creatorEmail: post.creatorEmail
            };
        });
        this.postsUpdated.next([...this._posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.http.post<{
      message: string,
      postId: string,
      creatorId: string,
      creatorEmail: string
      }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);

        post.id = responseData.postId;
        post.creatorEmail = responseData.creatorEmail;
        post.creatorId =  responseData.creatorId;

        this._posts.push(post);
        this.postsUpdated.next([...this._posts]);
      });
  }

  deletePost(post: Post) {
    if (post)
      this.http
        .delete<{ message: string }>(
          `http://localhost:3000/api/posts/${post.id}`
        )
        .subscribe((deleteResponse) => {
          console.log(deleteResponse.message);
          this._posts.splice(this._posts.indexOf(post), 1);
          this.postsUpdated.next([...this._posts]);
        });
  }
}
