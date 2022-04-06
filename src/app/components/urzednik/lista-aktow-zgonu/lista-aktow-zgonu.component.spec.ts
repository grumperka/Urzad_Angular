import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowZgonuComponent } from './lista-aktow-zgonu.component';

describe('ListaAktowZgonuComponent', () => {
  let component: ListaAktowZgonuComponent;
  let fixture: ComponentFixture<ListaAktowZgonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowZgonuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowZgonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
