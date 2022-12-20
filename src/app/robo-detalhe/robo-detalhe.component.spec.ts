import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboDetalheComponent } from './robo-detalhe.component';

describe('RoboDetalheComponent', () => {
  let component: RoboDetalheComponent;
  let fixture: ComponentFixture<RoboDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
