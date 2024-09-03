import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLOGINPage } from './admin-login.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLOGINPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLOGINPageRoutingModule {}
