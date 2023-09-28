import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastYearPapersComponent } from './past-year-papers.component';

describe('PastYearPapersComponent', () => {
  let component: PastYearPapersComponent;
  let fixture: ComponentFixture<PastYearPapersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastYearPapersComponent]
    });
    fixture = TestBed.createComponent(PastYearPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
