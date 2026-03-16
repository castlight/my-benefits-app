import { Component, inject, OnInit, effect, signal } from '@angular/core';
import { ApiService, BenefitsPlan } from '../../services/api.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [DecimalPipe],
  template: `
    @if (plan()) {
      <div class="card">
        <h2>{{ plan()!.name }}</h2>
        <p>Network: {{ plan()!.network }}</p>
        <div style="margin-top:1rem">
          <div class="stat">
            <div class="label">Deductible</div>
            <div class="value">\${{ plan()!.deductibleMet | number:'1.0-0' }} / \${{ plan()!.deductible | number:'1.0-0' }}</div>
          </div>
          <div class="stat">
            <div class="label">Out-of-Pocket Max</div>
            <div class="value">\${{ plan()!.oopMet | number:'1.0-0' }} / \${{ plan()!.oopMax | number:'1.0-0' }}</div>
          </div>
          <div class="stat">
            <div class="label">Copay</div>
            <div class="value">\${{ plan()!.copay | number:'1.0-0' }}</div>
          </div>
          <div class="stat">
            <div class="label">Coinsurance</div>
            <div class="value">{{ plan()!.coinsurancePct }}%</div>
          </div>
        </div>
      </div>
    } @else {
      <div class="loading">Loading benefits...</div>
    }
  `
})
export class BenefitsComponent {
  private api = inject(ApiService);
  plan = signal<BenefitsPlan | null>(null);

  constructor() {
    effect(() => {
      this.api.memberIdSignal();
      this.plan.set(null);
      this.api.getBenefits().subscribe(p => this.plan.set(p));
    });
  }
}
