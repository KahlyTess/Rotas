import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatronicComponent } from './animatronic.component';

describe('AnimatronicComponent', () => {
  let component: AnimatronicComponent;
  let fixture: ComponentFixture<AnimatronicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatronicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatronicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
