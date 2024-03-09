import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerictemplateService {
  constructor(private http: HttpClient) {}
  selectedCardType: string | undefined;
  portfolioScoll = new Subject();
  portfolioScoll$ = this.portfolioScoll.asObservable();

  scrollToTop = new Subject();
  scrollToTop$ = this.scrollToTop.asObservable();
  secretePassword = '4202'; /* do not change*/

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
    } else if (url === 'mentorship') {
      baseUrl = 'assets/json/mentorship.json';
    } else if (url === 'designsystem') {
      baseUrl = 'assets/json/Designsystem.json';
    } else if (url === 'agri') {
      baseUrl = 'assets/json/Agri.json';
    } else if (url === 'construction') {
      baseUrl = 'assets/json/skills.json';
    } else if (url === 'branding') {
      baseUrl = 'assets/json/Branding.json';
    } else if (url === 'gear360') {
      baseUrl = 'assets/json/gear360.json';
    } else if (url === 'illustrations') {
      baseUrl = 'assets/json/Illustration.json';
    } else {
      baseUrl = 'assets/json/expertise.json';
    }
    return this.http.get(baseUrl);
  }
  public isAuthenticated(): boolean {
    const password = localStorage.getItem('password');
    if (password === this.secretePassword || password === '2255') {
      return true;
    } else {
      return false;
    }
  }
}
