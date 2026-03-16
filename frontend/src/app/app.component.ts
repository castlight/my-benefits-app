import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  template: `
    <nav>
      <span class="brand">MyBenefits</span>
      <a routerLink="/benefits" routerLinkActive="active">My Plan</a>
      <a routerLink="/providers" routerLinkActive="active">Find Provider</a>
      <a routerLink="/help" routerLinkActive="active">Help</a>
      <select class="member-select" [ngModel]="api.memberIdSignal()" (ngModelChange)="api.setMemberId(+$event)">
        <option [value]="1">Alice Thompson</option>
        <option [value]="2">Bob Martinez</option>
        <option [value]="3">Carol Chen</option>
      </select>
    </nav>
    <div class="container">
      <router-outlet />
    </div>
  `
})
export class AppComponent {
  api = inject(ApiService);
}
