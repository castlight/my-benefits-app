import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, Provider } from '../../services/api.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-provider-search',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  template: `
    <div class="card">
      <h2>Find a Provider</h2>
      <div class="search-bar">
        <select [(ngModel)]="network">
          <option value="BlueCross PPO">BlueCross PPO</option>
          <option value="Aetna HMO">Aetna HMO</option>
          <option value="United Premium">United Premium</option>
        </select>
        <select [(ngModel)]="specialty">
          <option value="">All Specialties</option>
          <option>Primary Care</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Dermatology</option>
          <option>Pediatrics</option>
          <option>Neurology</option>
          <option>Oncology</option>
          <option>Psychiatry</option>
        </select>
        <button (click)="search()">Search</button>
      </div>
    </div>

    @if (loading()) {
      <div class="loading">Searching providers...</div>
    }

    @if (results().length > 0) {
      <div class="card">
        <p style="margin-bottom:1rem;color:#666">{{ results().length | number }} results</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>Cost</th>
              <th>Quality</th>
            </tr>
          </thead>
          <tbody>
            @for (p of results(); track p.id) {
              <tr>
                <td>{{ p.name }}</td>
                <td>{{ p.specialty }}</td>
                <td>{{ '$$$$$$$$$$'.slice(0, p.costScore) }}</td>
                <td>{{ '★★★★★'.slice(0, p.qualityScore) }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  `
})
export class ProviderSearchComponent {
  private api = inject(ApiService);
  network = 'BlueCross PPO';
  specialty = '';
  results = signal<Provider[]>([]);
  loading = signal(false);

  search() {
    this.loading.set(true);
    this.api.searchProviders(this.network, this.specialty || undefined, 37.7749, -122.4194)
      .subscribe(r => { this.results.set(r); this.loading.set(false); });
  }
}
