import { BookDataService } from './core/book-data.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [BookListComponent, BookDetailsComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
