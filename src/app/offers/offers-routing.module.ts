import { AllOffersComponent } from './all-offers/all-offers.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add', component: AddOfferComponent},
  { path: 'all', component: AllOffersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }