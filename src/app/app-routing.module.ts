import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpordTemplateComponent } from './opord-template/opord-template.component';

const routes: Routes = [
  { path: 'opord', component: OpordTemplateComponent },
  { path: '',
  redirectTo: '/opord',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
