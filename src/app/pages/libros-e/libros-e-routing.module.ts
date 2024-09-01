import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibrosEPage } from './libros-e.page';

const routes: Routes = [
  {
    path: '',
    component: LibrosEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosEPageRoutingModule {}
