import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import {
  BookDashboardComponent,
  BookDetailsComponent,
  BookEditComponent,
  BookListComponent,
  BookRoutingModule,
  BookAddComponent,
  BookDataService
} from './index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,

    BookRoutingModule
  ],
  declarations: [BookListComponent, BookDetailsComponent, BookDashboardComponent, BookEditComponent, BookAddComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
