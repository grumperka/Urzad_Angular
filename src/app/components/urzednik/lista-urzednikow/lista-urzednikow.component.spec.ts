import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUrzednikowComponent } from './lista-urzednikow.component';

describe('ListaUrzednikowComponent', () => {
  let component: ListaUrzednikowComponent;
  let fixture: ComponentFixture<ListaUrzednikowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUrzednikowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUrzednikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
