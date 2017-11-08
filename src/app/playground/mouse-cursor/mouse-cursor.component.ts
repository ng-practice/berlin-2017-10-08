import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {
  x = 0;
  y = 0;

  updateCursorPosition(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

}
