import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktRozwoduComponent } from './add-akt-rozwodu.component';

describe('AddAktRozwoduComponent', () => {
  let component: AddAktRozwoduComponent;
  let fixture: ComponentFixture<AddAktRozwoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAktRozwoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAktRozwoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
