import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UsersI } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class FetchDataService {
    http = inject(HttpClient);
    API_URL = 'https://dummyjson.com';

    constructor() { }

    getUsers() {
        return this.http.get<UsersI>(`${this.API_URL}/users?limit=5`);
    }
}
