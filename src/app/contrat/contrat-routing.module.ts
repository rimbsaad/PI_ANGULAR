import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { UpdateContratComponent } from './update-contrat/update-contrat.component';

const routes: Routes = [{path:'listContrats', component:ListContratComponent},{path:'updateContrat/:param', component:UpdateContratComponent},
{path: 'addContrat', component:AddContratComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
