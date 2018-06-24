import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }
  API_URL = 'https://pixabay.com/api/?key=9367141-484652044330e988cd7da4719';

  search(searchTerm) {
    const url = `${this.API_URL}&q=${searchTerm}`;
    return this.http.get(url);
  }
}
