import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalCanvasComponent } from './royal-canvas.component';

describe('RoyalCanvasComponent', () => {
  let component: RoyalCanvasComponent;
  let fixture: ComponentFixture<RoyalCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyalCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
