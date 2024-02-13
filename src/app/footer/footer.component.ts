import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
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
export class FooterComponent implements OnInit {
  constructor() {}
  @Input() showFreelance = true;
  hideProfile = false;
  imageSource = 'assets/images/Write-msg-01.svg';

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (window.innerWidth < 430 || window.innerWidth == 430) {
      this.hideProfile = false;
    } else if (window.innerWidth < 780 || window.innerWidth == 780) {
      this.hideProfile = true;
    } else if (window.innerWidth < 1024 || window.innerWidth == 1024) {
      this.hideProfile = false;
    } else {
      this.hideProfile = false;
    }
  }

  ngOnInit(): void {}

  changeImage(onHover: boolean) {
    if (onHover) {
      this.imageSource = 'assets/images/Write-msg-02.svg';
    } else {
      this.imageSource = 'assets/images/Write-msg-01.svg';
    }
  }
  openMail() {
    window.location.href = 'mailto:midhunvijayan078@gmail.com';
  }
  scrollToTop() {
    $(document).ready(function () {
      $('.SmoothmyTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 10000);
        return false;
      });
    });
  }
}
