
import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ButtonType } from "src/app/controls/button/button.component";
import { PostViewComponent } from "../post-view/post-view.component";
import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

  constructor(private readonly postService: PostService) {
  }

  ButtonType:typeof ButtonType = ButtonType;

  submitForm(form: NgForm){
    console.log("Submit create post form")
    const post: Post = {
      id: null,
      content: form.value.postContent,
      creatorEmail: undefined,
      creatorId: undefined
    }
    if(post.content) {
      this.postService.addPost(post);
        form.reset()
    }
  }

}
