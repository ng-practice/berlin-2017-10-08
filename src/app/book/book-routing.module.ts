import { ConfirmCanDeactivateGuard } from './shared/confirm-can-deactivate.guard';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import {
  BookDashboardComponent,
  BookListComponent,
  BookDetailsComponent,
  BookEditComponent,
  BookAddComponent
} from './index';

const routes: Route[] = [{
  path: '',
  component: BookDashboardComponent,
  children: [{
    path: '',
    component: BookListComponent
  }, {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [ConfirmCanDeactivateGuard]
  }, {
    path: 'edit/:isbn',
    component: BookEditComponent,
  }, {
    path: 'add/:isbn',
    component: BookAddComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfirmCanDeactivateGuard]
})
export class BookRoutingModule {}
