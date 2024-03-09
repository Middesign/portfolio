import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    const startYear = 2014;
    let currentYear = new Date().getFullYear();
    let yearDiff = currentYear - startYear;
    let incrementNo = 100 / yearDiff;
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += incrementNo;
        this.yearProgress++;
      } else {
        clearInterval(interval);
        this.showLoader = false;
      }
    }, 5);
  }
  // 580
  title = 'portfolio';
  isBlackBg = false;
  isProcessing = false;
  showLoader = true;
  progress: number = 0;
  yearProgress: number = 2014;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = event.url;
        if (url == '/about') {
          this.isBlackBg = true;
        } else {
          this.isBlackBg = false;
        }
        if (url == '/processing') {
          this.isProcessing = true;
        } else {
          this.isProcessing = false;
        }
      }
    });
  }
}
