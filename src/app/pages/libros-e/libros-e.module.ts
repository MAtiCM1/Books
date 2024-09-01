import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibrosEPageRoutingModule } from './libros-e-routing.module';

import { LibrosEPage } from './libros-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibrosEPageRoutingModule
  ],
  declarations: [LibrosEPage]
})
export class LibrosEPageModule {}
