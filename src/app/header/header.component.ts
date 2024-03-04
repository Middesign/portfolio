import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GenerictemplateService } from '../generictemplate.service';
declare var document: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private genericService: GenerictemplateService
  ) {
    this.checkScreenSize();
  }
  @Input() isBlackBg = false;
  hireMe = 'assets/images/Hire-me-default.svg';
  isMobileView: boolean | undefined;
  linkText = 'Resume';

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 496;
  }
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     let url = event.url;
    //     if (url == '/about') {
    //       this.isBlackBg = true;
    //     } else {
    //       this.isBlackBg = false;
    //     }
    //   }
    // });
  }
  fnCollapseClick() {
    document.getElementById('myNav').style.height = '100%';
  }
  closeNav() {
    document.getElementById('myNav').style.height = '0%';
  }
  openMail() {
    window.location.href = 'mailto:midhunvijayan078@gmail.com';
  }
  navigateToUnderConstruction() {
    this.router.navigate(['/processing']);
  }
  navigateToAboutMe() {
    this.router.navigate(['/about']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  changeText() {
    this.linkText = 'Download';
  }
  navigateToPortfolio() {
    if (this.isBlackBg == true) {
      this.router.navigate(['/home']);
    }
    this.genericService.portfolioScoll.next(true);
  }
  downloadResume() {
    if (this.linkText.toLowerCase() === 'download') {
      const resumeurl = 'assets/files/Midhun Vijayan_Resume 2024.pdf';
      const link = document.createElement('a');

      link.setAttribute('target', '_blank');
      link.setAttribute('href', resumeurl);
      link.setAttribute('download', 'Midhun Vijayan_Resume.pdf');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  resetText() {
    this.linkText = 'Resume';
  }
  changeInHireme(onHover: boolean) {
    if (onHover) {
      this.hireMe = 'assets/images/Hire-me-Hover.svg';
    } else {
      this.hireMe = 'assets/images/Hire-me-default.svg';
    }
  }
}
