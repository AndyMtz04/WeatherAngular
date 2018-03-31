import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Forecast } from './forcast';


@Injectable()
export class ForcastService {

  endpoint: string = "";

  constructor(private http: HttpClient) { }

  getForcast(zipCode: string): Observable<Forecast> {
    return this.http.get<Forecast>(this.endpoint.replace("#####", zipCode));
  }
}
