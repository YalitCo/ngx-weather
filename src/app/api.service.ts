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


  constructor(private http: HttpClient) { }

  getPosts(URL){
    return this.http.get(URL);
  }

}
