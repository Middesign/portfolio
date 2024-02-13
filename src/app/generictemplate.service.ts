import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerictemplateService {
  constructor(private http: HttpClient) {}

  getCarouselJson() {
    const baseUrl = 'assets/json/carousel.json';
    return this.http.get(baseUrl);
  }
  getAboutJson() {
    const baseUrl = 'assets/json/about.json';
    return this.http.get(baseUrl);
  }
  getExperienceJson() {
    const baseUrl = 'assets/json/experience.json';
    return this.http.get(baseUrl);
  }
  getSkillsJson() {
    const baseUrl = 'assets/json/skills.json';
    return this.http.get(baseUrl);
  }
}
