import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css'],
})
export class TitleBoxComponent {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();

  sendPing() {
    this.ping.emit('Component title-box was clicked!');
  }
}
