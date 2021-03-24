import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FashionResolver} from './fashion/fashion.resolver';
import {TechnologyResolver} from './technology/technology.resolver';

const routes: Routes = [
  {path: 'fashion',
    loadChildren: () => import('../template/fashion/fashion.module').then(m => m.FashionModule),
    // resolve: {type: FashionResolver}
  },
  {path: 'technology',
    loadChildren: () => import('../template/technology/technology.module').then(m => m.TechnologyModule),
    // resolve: {type: TechnologyResolver}
  },
  {path: '**', redirectTo: 'Not Found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
