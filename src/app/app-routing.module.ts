import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateResolver} from '../@e-bonik/template/template.resolver';

const routes: Routes = [
  {path: '',
    loadChildren: () => import('../@e-bonik/template/template.module').then(m => m.TemplateModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
