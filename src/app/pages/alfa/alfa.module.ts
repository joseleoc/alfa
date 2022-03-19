import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlfaPageRoutingModule } from './alfa-routing.module';

import { AlfaPage } from './alfa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlfaPageRoutingModule
  ],
  declarations: [AlfaPage]
})
export class AlfaPageModule {}
