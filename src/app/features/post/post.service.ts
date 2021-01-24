import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable( { providedIn: "root" } )
export class PostService {

  constructor(private readonly http: HttpClient){
  }

  private _posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();

  get posts(){
    return [...this._posts];
  }

  requestPosts(){
    console.log("Post service :: Request posts ")
    this.http.get<{message: string, posts: Post[]}>("http://localhost:3000/api/posts")

    .subscribe((postsResponse ) => {

      console.log("Post service :: Request posts :: " + postsResponse.message)
      console.dir(postsResponse.posts)

      this.postsUpdated.next( postsResponse.posts );
    })
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    console.log("Post service :: Add post ")
    console.dir(post)
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log("Post service :: Add post :: " + responseData.message)

        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(post: Post){
    // TODO: remove a post
  }

}
