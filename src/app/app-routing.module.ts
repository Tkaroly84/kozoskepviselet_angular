import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { IntroductionComponent } from './basic/introduction/introduction.component';
import { WorkersComponent } from './basic/workers/workers.component';
import { ClientLoginComponent } from './auth/client-login/client-login.component';
import { WorkersLoginComponent } from './auth/workers-login/workers-login.component';

const routes: Routes = [
//home
  {path:'',component: HomeComponent},
//components
  {path:'introduction',component: IntroductionComponent},
  {path:'workers/:name',component: WorkersComponent},
//auth
  {path:'auth/client',component: ClientLoginComponent},
  {path:'auth/workers',component: WorkersLoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
