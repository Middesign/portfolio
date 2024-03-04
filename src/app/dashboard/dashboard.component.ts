import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GenerictemplateService } from '../generictemplate.service';
import { style, transition, trigger, animate } from '@angular/animations';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     transition(':enter', [
  //       style({ transform: 'translateY(100%)' }),
  //       animate('300ms', style({ transform: 'translateY(0)' })),
  //     ]),
  //     transition(':leave', [
  //       style({ transform: 'translateY(0)' }),
  //       animate('300ms', style({ transform: 'translateY(100%)' })),
  //     ]),
  //   ]),
  // ],
})
export class DashboardComponent implements OnInit {
  constructor(
    private genericService: GenerictemplateService,
    private el: ElementRef,
    private router: Router,
    private scroller: ViewportScroller
  ) {
    this.checkScreenSize();
  }
  @ViewChild('swiperTemp') swiperTemp: ElementRef | any;

  expCount: number = 0;
  projectCount: number = 0;
  targetNumber1: number = 10;
  targetNumber2: number = 50;
  duration: number = 2000;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    center: true,
    navSpeed: 700,
    margin: 72,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    autoWidth: false,
    navText: [
      '<img class="cursor-pointer" src="assets/images/Caro-left.svg" alt="Me">',
      '<img class="cursor-pointer" src="assets/images/Caro-right.svg" alt="Me">',
    ],
    nav: true,
  };

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    spaceBetween: 50,
    slidesPerView: 'auto',
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      slideShadows: true,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
  };
  hideProfile = false;
  isMobileView = false;
  slidesStore: any;
  expertise: any;
  imageSource = 'assets/images/Write-msg-01.svg';
  hireMe = 'assets/images/Hire-me-default.svg';

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    if (window.innerWidth < 430 || window.innerWidth == 430) {
      this.hideProfile = false;
      this.isMobileView = true;
    } else if (window.innerWidth < 768 || window.innerWidth == 768) {
      this.hideProfile = true;
      this.isMobileView = false;
    } else if (window.innerWidth < 1024 || window.innerWidth == 1024) {
      this.hideProfile = false;
      this.isMobileView = false;
    } else {
      this.hideProfile = false;
      this.isMobileView = false;
    }
  }

  ngOnInit() {
    this.startAnimation();
    this.gerCarouselDetails();
    this.getProfessionalExpertise();
    this.genericService.portfolioScoll$.subscribe((isScroll) => {
      if (isScroll) {
        this.scroller.scrollToAnchor('portfolio');
        // document
        //   .getElementById('portfolio')
        //   ?.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: 'nearest',
        //   });
      }
    });
  }

  gerCarouselDetails() {
    this.genericService.commonGetJSON('carousel').subscribe((data) => {
      if (data != undefined && data != null) {
        this.slidesStore = data;
      }
    });
  }
  getProfessionalExpertise() {
    this.genericService.commonGetJSON('expertise').subscribe((data) => {
      if (data != undefined && data != null) {
        this.expertise = data;
      }
    });
  }
  startAnimation() {
    const startTime = performance.now();
    const updateNumber = () => {
      const currentTime = performance.now();
      const progress = Math.min(1, (currentTime - startTime) / this.duration);
      this.expCount = Math.floor(progress * this.targetNumber1);
      this.projectCount = Math.floor(progress * this.targetNumber2);
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }
  changeImage(onHover: boolean) {
    if (onHover) {
      this.imageSource = 'assets/images/Write-msg-02.svg';
    } else {
      this.imageSource = 'assets/images/Write-msg-01.svg';
    }
  }
  changeInHireme(onHover: boolean) {
    if (onHover) {
      this.hireMe = 'assets/images/Hire-me-Hover.svg';
    } else {
      this.hireMe = 'assets/images/Hire-me-default.svg';
    }
  }
  nextSlide() {
    this.swiperTemp.swiper.slideNext();
  }

  prevSlide() {
    this.swiperTemp.swiper.slidePrev();
  }
  openMail() {
    window.location.href = 'mailto:midhunvijayan078@gmail.com';
  }
  navigateToUnderConstruction() {
    this.router.navigate(['/processing']);
  }
}
