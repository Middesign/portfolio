import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsType01Component } from './details-type01.component';

describe('DetailsType01Component', () => {
  let component: DetailsType01Component;
  let fixture: ComponentFixture<DetailsType01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsType01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsType01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
