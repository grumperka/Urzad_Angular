import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowUrzadComponent } from './lista-aktow-urzad.component';

describe('ListaAktowUrzadComponent', () => {
  let component: ListaAktowUrzadComponent;
  let fixture: ComponentFixture<ListaAktowUrzadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowUrzadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowUrzadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
