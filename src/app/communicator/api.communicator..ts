import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiCommunicator {

    constructor(private http: HttpClient) { }

    async convertElement(value: number): Promise<string> {
        return await this.http
          .get(`/api/element/${value}`, { responseType: 'text' })
          .toPromise();
    }

    async generateSequence(value: number): Promise<string[]> {
        return await this.http
          .get<string[]>(`/api/sequence/${value}`)
          .toPromise();
    }
}
