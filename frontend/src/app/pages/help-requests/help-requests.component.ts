import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, HelpRequest } from '../../services/api.service';

@Component({
  selector: 'app-help-requests',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card">
      <h2>Submit a Help Request</h2>
      <div class="form-group">
        <label>Subject</label>
        <input [(ngModel)]="subject" placeholder="e.g. Explain my EOB">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea [(ngModel)]="description" rows="3" placeholder="Tell us how we can help..."></textarea>
      </div>
      <button (click)="submit()">Submit</button>
    </div>

    <div class="card">
      <h2>Your Requests</h2>
      @if (requests().length === 0) {
        <p class="loading">No help requests yet.</p>
      }
      <table>
        <tbody>
          @for (r of requests(); track r.id) {
            <tr>
              <td>{{ r.subject }}</td>
              <td><span class="badge" [class]="r.status">{{ r.status }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class HelpRequestsComponent implements OnInit {
  private api = inject(ApiService);
  requests = signal<HelpRequest[]>([]);
  subject = '';
  description = '';

  ngOnInit() { this.load(); }

  load() {
    this.api.getHelpRequests().subscribe(r => this.requests.set(r));
  }

  submit() {
    if (!this.subject) return;
    this.api.createHelpRequest({ subject: this.subject, description: this.description })
      .subscribe(() => { this.subject = ''; this.description = ''; this.load(); });
  }
}
