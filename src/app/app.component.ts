import { Component } from '@angular/core';
import { bindNodeCallback } from 'rxjs';
import { Post } from './features/post/post.model';
import { PostService } from './features/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly postService: PostService){
  }

  get posts(){
    return this.postService.posts;
  }

}

