import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable( { providedIn: "root" } )
export class PostService {

  private _posts: Post[] = [];

  get posts(){
    return [...this._posts];
  }

  addPost(post: Post){
    this._posts.push(post);
  }

  deletePost(post: Post){
    // TODO: remove a post
  }

}
