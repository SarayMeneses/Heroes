import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { RelojeriaComponent } from './relojeria/relojeria.component';




const routes: Routes = [
  { path: 'Flex', component: FlexComponent },
  { path: 'relojeria', component: RelojeriaComponent },

  { path: '', redirectTo: 'Flex', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
