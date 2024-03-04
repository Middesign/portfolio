import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerictemplateService {
  constructor(private http: HttpClient) {}

  portfolioScoll = new Subject();
  portfolioScoll$ = this.portfolioScoll.asObservable();

  commonGetJSON(url: string) {
    let baseUrl;
    if (url === 'carousel') {
      baseUrl = 'assets/json/carousel.json';
    } else if (url === 'about') {
      baseUrl = 'assets/json/about.json';
    } else if (url === 'experience') {
      baseUrl = 'assets/json/experience.json';
    } else if (url === 'skills') {
      baseUrl = 'assets/json/skills.json';
    } else {
      baseUrl = 'assets/json/expertise.json';
    }
    return this.http.get(baseUrl);
  }
}
