import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPowodowRozwoduComponent } from './lista-powodow-rozwodu.component';

describe('ListaPowodowRozwoduComponent', () => {
  let component: ListaPowodowRozwoduComponent;
  let fixture: ComponentFixture<ListaPowodowRozwoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPowodowRozwoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPowodowRozwoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
