import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Route[] = [{
  path: 'books',
  component: BookDashboardComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
