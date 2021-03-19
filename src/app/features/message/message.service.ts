import { Message, MessageType } from "./message.model";

export class MessageService {

  private _messages: Message[] = [];

  showMessage(messageText: string) {
    let message: Message = {
      message: messageText,
      time: new Date(),
      type: MessageType.TextMessage
    };
    this._messages.push(message);
  }

  showError(messageText: string) {
    let message: Message =  {
      message: messageText,
      time: new Date(),
      type: MessageType.ErrorMessage
    };
    this._messages.push(message);
  }


}
