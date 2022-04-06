import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktowRozwoduComponent } from './lista-aktow-rozwodu.component';

describe('ListaAktowRozwoduComponent', () => {
  let component: ListaAktowRozwoduComponent;
  let fixture: ComponentFixture<ListaAktowRozwoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktowRozwoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAktowRozwoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
