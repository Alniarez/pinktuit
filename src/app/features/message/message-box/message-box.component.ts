import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TimerService } from "../../timer/timer.service";
import { Message, MessageType } from "../message.model";
import { MessageService } from "../message.service";

@Component({
  selector: 'message-box',
  templateUrl: 'message-box.component.html',
  styleUrls: ['message-box.component.css']
})
export class MessageBox implements OnInit, OnDestroy {

  private _messageSubscripton: Subscription;
  private _messages: Message[] = [];

  MessageType: typeof MessageType = MessageType;

  get messages(): Message[] {
    return this._messages.filter(message => {
      return this.timer.now.getTime() - message.time.getTime() < (1000 * 3 * 10000);
    });
  }

  constructor(private readonly _messageService: MessageService,
              private readonly timer: TimerService) {
  }

  ngOnInit(): void {
    this._messageSubscripton = this._messageService.messagesListener.subscribe((messages => {
      this._messages = messages;
    }))
  }

  ngOnDestroy(): void {
    this._messageSubscripton.unsubscribe();
  }

  hideMessage(message: Message) {
    this._messageService.dismissMessage(message);
  }

  getNow(){
    return new Date();
  }
  
}
