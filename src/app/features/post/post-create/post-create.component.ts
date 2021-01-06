
import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ButtonType } from "src/app/controls/button/button.component";
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

  buttonType:typeof ButtonType = ButtonType;

  // @Output()
  // onPostCreated: EventEmitter<Post> = new EventEmitter();

  submitForm(form: NgForm){
    if(form.value.postTitle !== "" && form.value.postContent !== "") {

      this.postService.addPost({
        title: form.value.postTitle,
        content: form.value.postContent
      });
      /*
        this.onPostCreated.emit({
          title: form.value.postTitle,
          content: form.value.postContent
        })
      */
        form.reset()
    }
  }

}
