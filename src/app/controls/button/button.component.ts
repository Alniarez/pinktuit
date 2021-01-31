import { Component, Input, EventEmitter, Output } from "@angular/core";

export enum ButtonType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
  Menu = "menu"
}

@Component({
    selector: "button-component",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.css"]
})
export class ButtonComponent {

  @Input()
  buttonType = ButtonType.Button;

  @Input("noStyle") noStyle: boolean = false;

  @Input("disabled")
  isDisabled: boolean = false;

  @Output("onClick")
  onClickEmitter: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    console.log("Button clicked")
    this.onClickEmitter.emit(event);
  }

}
