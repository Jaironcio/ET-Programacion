import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginselecctionPage } from './loginselecction.page';

const routes: Routes = [
  {
    path: '',
    component: LoginselecctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginselecctionPageRoutingModule {}
