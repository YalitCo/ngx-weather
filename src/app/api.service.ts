import { Injectable , Input } from '@angular/core';

import { Observable, throwError, from } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";



// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})

/**
 * Service to call all the API
 */
export class ApiService {
  @Input() city: string='mashhad';

  url = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&units=metric&APPID=7ea8f559ec5f1f0899b61c89d728a8b9";

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

}
