import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BenefitsPlan {
  id: number; name: string; network: string;
  deductible: number; deductibleMet: number;
  copay: number; coinsurancePct: number;
  oopMax: number; oopMet: number;
}

export interface Provider {
  id: number; name: string; specialty: string; network: string;
  latitude: number; longitude: number;
  costScore: number; qualityScore: number; acceptingPatients: boolean;
}

export interface HelpRequest {
  id?: number; memberId?: number; subject: string;
  description: string; status?: string;
  createdAt?: string; updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private memberId = 1;
  memberIdSignal = signal(1);

  private headers() {
    return { headers: new HttpHeaders({ 'X-Member-Id': String(this.memberId) }) };
  }

  setMemberId(id: number) { this.memberId = id; this.memberIdSignal.set(id); }
  getMemberId() { return this.memberId; }

  getBenefits(): Observable<BenefitsPlan> {
    return this.http.get<BenefitsPlan>('/api/benefits', this.headers());
  }

  searchProviders(network: string, specialty?: string, lat?: number, lng?: number): Observable<Provider[]> {
    let params: any = { network };
    if (specialty) params.specialty = specialty;
    if (lat != null) params.lat = lat;
    if (lng != null) params.lng = lng;
    return this.http.get<Provider[]>('/api/providers', { ...this.headers(), params });
  }

  getHelpRequests(): Observable<HelpRequest[]> {
    return this.http.get<HelpRequest[]>('/api/help-requests', this.headers());
  }

  createHelpRequest(req: HelpRequest): Observable<HelpRequest> {
    return this.http.post<HelpRequest>('/api/help-requests', req, this.headers());
  }
}
