export enum MessageType {
  ErrorMessage,
  TextMessage
}

export interface Message {
  message: string,
  time: Date,
  type: MessageType
}

