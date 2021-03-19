import { Component, Input } from "@angular/core";
import {Md5} from 'ts-md5/dist/md5'

@Component({
  selector: "user-image",
  template: '<img [src]="imageURL" alt="">',
  styles: ["img { max-height: 70px; width: auto; }"]
})
export class UserImage {

  private static readonly IMAGEDE_FAULT = "monsterid";
  private static readonly IMAGEDE_SIZE = 150;

  @Input("user-email")
  email: string;

  get imageURL(): string{
    const size = UserImage.IMAGEDE_SIZE;
    const defaultImage = UserImage.IMAGEDE_FAULT;
    const hashedEmail = Md5.hashStr(this.email);

    return `http://www.gravatar.com/avatar/${hashedEmail}?d=${defaultImage}&s=${size}`;
  }

}

