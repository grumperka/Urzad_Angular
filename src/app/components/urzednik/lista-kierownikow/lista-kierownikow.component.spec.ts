import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKierownikowComponent } from './lista-kierownikow.component';

describe('ListaKierownikowComponent', () => {
  let component: ListaKierownikowComponent;
  let fixture: ComponentFixture<ListaKierownikowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKierownikowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaKierownikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
