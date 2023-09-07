import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';
const routes: Routes = [
  {path:'' ,redirectTo:'brand-list', pathMatch:'full'},
  {path:'brand-list', component:BrandListComponent},
  {path:'add-brand',component:AddBrandComponent},
  {path:'edit-brand/:id',component:EditBrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
