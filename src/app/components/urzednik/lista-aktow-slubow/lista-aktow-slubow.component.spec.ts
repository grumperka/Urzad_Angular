import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowSlubowComponent } from './lista-aktow-slubow.component';

describe('ListaAktowSlubowComponent', () => {
  let component: ListaAktowSlubowComponent;
  let fixture: ComponentFixture<ListaAktowSlubowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowSlubowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowSlubowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
