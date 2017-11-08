import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css'],
})
export class TitleBoxComponent {
  @Input() title: string;
}
