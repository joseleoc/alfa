import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlfaPage } from './alfa.page';

const routes: Routes = [
  {
    path: '',
    component: AlfaPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then ( m => m.HomePageModule)
      },
      {
        path: 'catalogo',
        loadChildren: () => import('../catalogo/catalogo.module').then ( m => m.CatalogoPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then ( m => m.AboutPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then ( m => m.ContactoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlfaPageRoutingModule {}
