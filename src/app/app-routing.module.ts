import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookListComponent } from './book/book-list/book-list.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
