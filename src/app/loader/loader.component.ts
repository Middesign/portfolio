import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @ViewChild('progressBar') progressbar: ElementRef | any;
  @Input() progress: number = 0;
  @Input() year: number = 2014;

  constructor() {}

  ngOnInit(): void {}
}
