import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BookDashboardComponent,
  BookDetailsComponent,
  BookEditComponent,
  BookListComponent,
  BookRoutingModule,
  BookAddComponent,
  BookDataService
} from './index';
import { HeartPipe } from '../shared/heart.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    BookRoutingModule
  ],
  declarations: [HeartPipe, BookListComponent, BookDetailsComponent, BookDashboardComponent, BookEditComponent, BookAddComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
