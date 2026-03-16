import { Routes } from '@angular/router';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ProviderSearchComponent } from './pages/provider-search/provider-search.component';
import { HelpRequestsComponent } from './pages/help-requests/help-requests.component';

export const routes: Routes = [
  { path: '', redirectTo: 'benefits', pathMatch: 'full' },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'providers', component: ProviderSearchComponent },
  { path: 'help', component: HelpRequestsComponent }
];
