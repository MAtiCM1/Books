import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLOGINPageRoutingModule } from './admin-login-routing.module';

import { AdminLOGINPage } from './admin-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLOGINPageRoutingModule
  ],
  declarations: [AdminLOGINPage]
})
export class AdminLOGINPageModule {}
