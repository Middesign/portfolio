import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerictemplateService } from '../generictemplate.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-details-type01',
  templateUrl: './details-type01.component.html',
  styleUrls: ['./details-type01.component.scss'],
})
export class DetailsType01Component implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private genericService: GenerictemplateService
  ) {
    let allImgs = document.querySelectorAll('img');
    allImgs.forEach(
      (value) =>
        (value.oncontextmenu = (e) => {
          e.preventDefault();
        })
    );
  }
  type: string | undefined;
  details: any;
  showLoader = true;
  dashboardComponent = DashboardComponent;

  ngOnInit(): void {
    this.type = localStorage.getItem('queryParams') ?? 'mentorship';
    this.gerCardDetails(this.type);
  }

  gerCardDetails(type: any) {
    this.genericService.commonGetJSON(type).subscribe((data) => {
      if (data != undefined && data != null) {
        this.details = data;
        setTimeout(() => {
          this.showLoader = false;
        }, 3200);
      }
    });
  }
  navigateToHome() {
    this.router.navigate(['/home']);
    this.genericService.portfolioScoll.next(true);
  }
}
