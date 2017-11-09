import { BookDataService } from './core/book-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [BookListComponent, BookDetailsComponent, BookDashboardComponent],
  exports: [BookListComponent],
  providers: [BookDataService]
})
export class BookModule { }
