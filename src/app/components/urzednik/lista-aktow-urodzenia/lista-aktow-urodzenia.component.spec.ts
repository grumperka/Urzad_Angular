import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowUrodzeniaComponent } from './lista-aktow-urodzenia.component';

describe('ListaAktowUrodzeniaComponent', () => {
  let component: ListaAktowUrodzeniaComponent;
  let fixture: ComponentFixture<ListaAktowUrodzeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowUrodzeniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowUrodzeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
