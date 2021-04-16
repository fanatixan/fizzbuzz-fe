import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiCommunicator {

    constructor(private http: HttpClient) { }

    async convertElement(value: number): Promise<string> {
        return await this.get<string>(`/element/${value}`);
    }

    async generateSequence(value: number): Promise<string[]> {
        return await this.get<string[]>(`/sequence/${value}`);
    }

    get<T>(endpoint: string): Promise<T> {
        const response: Promise<any> =
            this.http.get(`${endpoint}`).toPromise();
        console.log('response: ', response);
        return response;
    }
}
