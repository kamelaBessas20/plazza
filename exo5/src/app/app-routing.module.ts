import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent }  from './pages/cat/cat.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {path:"cat", component:CatComponent},
  {path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
