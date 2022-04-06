import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUrzedowComponent } from './lista-urzedow.component';

describe('ListaUrzedowComponent', () => {
  let component: ListaUrzedowComponent;
  let fixture: ComponentFixture<ListaUrzedowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUrzedowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUrzedowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
