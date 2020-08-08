import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';


const routes: Routes = [
  {path:'', pathMatch:'full' ,redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'Home/:id',component:DetailsComponent},
  {path:'**',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
