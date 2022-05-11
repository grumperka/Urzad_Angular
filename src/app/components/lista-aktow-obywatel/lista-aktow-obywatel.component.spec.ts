import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowObywatelComponent } from './lista-aktow-obywatel.component';

describe('ListaAktowObywatelComponent', () => {
  let component: ListaAktowObywatelComponent;
  let fixture: ComponentFixture<ListaAktowObywatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowObywatelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowObywatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
