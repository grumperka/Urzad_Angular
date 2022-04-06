import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObywateliComponent } from './lista-obywateli.component';

describe('ListaObywateliComponent', () => {
  let component: ListaObywateliComponent;
  let fixture: ComponentFixture<ListaObywateliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaObywateliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObywateliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
