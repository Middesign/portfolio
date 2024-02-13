import { Component, OnInit } from '@angular/core';
import { GenerictemplateService } from '../generictemplate.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('300ms', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor(private genericService: GenerictemplateService) {}
  hireMe = 'assets/images/Hire-me-default.svg';
  aboutDetails: any;
  experience: any;
  skills: any | undefined;

  ngOnInit(): void {
    this.getAboutDetails();
    this.getExperienceDetails();
    this.getSkillSet();
  }

  getAboutDetails() {
    this.genericService.getAboutJson().subscribe((data) => {
      if (data != undefined && data != null) {
        this.aboutDetails = data;
      }
    });
  }
  getExperienceDetails() {
    this.genericService.getExperienceJson().subscribe((data) => {
      if (data != undefined && data != null) {
        this.experience = data;
      }
    });
  }
  getSkillSet() {
    this.genericService.getSkillsJson().subscribe((data) => {
      if (data != undefined && data != null) {
        this.skills = data;
      }
    });
  }
  changeInHireme(onHover: boolean) {
    if (onHover) {
      this.hireMe = 'assets/images/Hire-me-Hover.svg';
    } else {
      this.hireMe = 'assets/images/Hire-me-default.svg';
    }
  }
  openMail() {
    window.location.href = 'mailto:midhunvijayan078@gmail.com';
  }
}
