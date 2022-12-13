import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRoboComponent } from './detalhe-robo.component';

describe('DetalheRoboComponent', () => {
  let component: DetalheRoboComponent;
  let fixture: ComponentFixture<DetalheRoboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheRoboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheRoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
