import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Message, MessageType } from "./message.model";

@Injectable({ providedIn: 'root' })
export class MessageService {

  private _messages: Message[] = [];
  private _messagesSubject = new Subject< Message[] >();
  
  public get messagesListener(): Observable< Message[] > {
    return this._messagesSubject.asObservable();
  }

  showMessage(messageText: string) {
    let message: Message = {
      message: messageText,
      time: new Date(),
      type: MessageType.TextMessage
    };

    this._messages.push(message);

    this._messagesSubject.next(this._messages);
  }

  showError(messageText: string) {
    let message: Message =  {
      message: messageText,
      time: new Date(),
      type: MessageType.ErrorMessage
    };

    this._messages.push(message);
    this._messagesSubject.next(this._messages);
  }

  dismissMessage(message: Message) {
    const indexof = this._messages.indexOf(message);
    this._messages.splice(indexof, 1);
    
    this._messagesSubject.next(this._messages);
  }

}
