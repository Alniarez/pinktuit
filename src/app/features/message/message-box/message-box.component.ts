import { Component } from "@angular/core";
import { Message, MessageType } from "../message.model";


@Component({
  selector: 'message-box',
  templateUrl: 'message-box.component.html',
  styleUrls: ['message-box.component.css']
})
export class MessageBox {

  MessageType: typeof MessageType = MessageType;

  messages: Message[] = [];

}
