import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable( { providedIn: "root" })
export class PostService {

  constructor(private readonly http: HttpClient){}

  private _posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  requestPosts(){
    this.http.get<{message: string, posts: { _id: string,title: string,content: string}[] }>("http://localhost:3000/api/posts")
    .subscribe(( postsResponse ) => {
      this._posts = postsResponse.posts.map(
          post => { return {id: post._id, content: post.content, title: post.title } }
        );
      this.postsUpdated.next(this._posts);
    })
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message)
        this._posts.push(post);
        this.postsUpdated.next([...this._posts]);
      });
  }

  deletePost(post: Post){
    // TODO: remove a post
  }

}
