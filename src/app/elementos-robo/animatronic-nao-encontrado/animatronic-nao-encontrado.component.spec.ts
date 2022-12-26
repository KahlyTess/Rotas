import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatronicNaoEncontradoComponent } from './animatronic-nao-encontrado.component';

describe('AnimatronicNaoEncontradoComponent', () => {
  let component: AnimatronicNaoEncontradoComponent;
  let fixture: ComponentFixture<AnimatronicNaoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatronicNaoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatronicNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
