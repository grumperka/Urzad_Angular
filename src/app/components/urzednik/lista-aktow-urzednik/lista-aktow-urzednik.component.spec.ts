import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowUrzednikComponent } from './lista-aktow-urzednik.component';

describe('ListaAktowUrzednikComponent', () => {
  let component: ListaAktowUrzednikComponent;
  let fixture: ComponentFixture<ListaAktowUrzednikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowUrzednikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowUrzednikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
