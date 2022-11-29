import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';


@NgModule({
  declarations: [
    AddContratComponent,
    UpdateContratComponent,
    ListContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
