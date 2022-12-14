import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginselecctionPageRoutingModule } from './loginselecction-routing.module';

import { LoginselecctionPage } from './loginselecction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginselecctionPageRoutingModule
  ],
  declarations: [LoginselecctionPage]
})
export class LoginselecctionPageModule {}
