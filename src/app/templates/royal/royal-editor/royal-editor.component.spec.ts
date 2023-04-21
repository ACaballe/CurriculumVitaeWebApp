import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalEditorComponent } from './royal-editor.component';

describe('RoyalEditorComponent', () => {
  let component: RoyalEditorComponent;
  let fixture: ComponentFixture<RoyalEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyalEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
