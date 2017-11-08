import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoBoxComponent, MouseCursorComponent],
  exports: [InfoBoxComponent, MouseCursorComponent]
})
export class PlaygroundModule { }
