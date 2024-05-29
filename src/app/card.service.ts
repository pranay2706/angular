import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  url = "https://mocki.io/v1/1509a579-b73e-474d-af81-d55e427b4712"
  getData() {
    return this.http.get(this.url);
  }
}
