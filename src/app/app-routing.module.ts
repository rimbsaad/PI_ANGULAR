import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{path:'', redirectTo:'Home', pathMatch:'full'},
{path:'Home',component:HomeComponent},
{path: 'contrats',
loadChildren:()=>import('./contrat/contrat.module').then(x => x.ContratModule)},
{path: 'students',
loadChildren:()=>import('./student/student.module').then(x => x.StudentModule)},

{path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
