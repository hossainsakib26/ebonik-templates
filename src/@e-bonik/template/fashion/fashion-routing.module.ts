import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FashionHomeResolver} from './fashion-home/fashion-home.resolver';
import {HomeComponent} from './fashion-home/home/home.component';

const routes: Routes = [
  // {path: '', component: HomeComponent}
  {
    path: '', loadChildren: () => import('../fashion/fashion-home/fashion-home.module').then(m => m.FashionHomeModule),
    resolve: {path: FashionHomeResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionRoutingModule {
}
