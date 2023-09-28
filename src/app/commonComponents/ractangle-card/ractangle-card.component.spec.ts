import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactangleCardComponent } from './ractangle-card.component';

describe('RactangleCardComponent', () => {
  let component: RactangleCardComponent;
  let fixture: ComponentFixture<RactangleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RactangleCardComponent]
    });
    fixture = TestBed.createComponent(RactangleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
