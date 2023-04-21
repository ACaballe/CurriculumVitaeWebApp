import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalHomeComponent } from './royal-home.component';

describe('RoyalHomeComponent', () => {
  let component: RoyalHomeComponent;
  let fixture: ComponentFixture<RoyalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
