import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAktRozwoduComponent } from './edit-akt-rozwodu.component';

describe('EditAktRozwoduComponent', () => {
  let component: EditAktRozwoduComponent;
  let fixture: ComponentFixture<EditAktRozwoduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAktRozwoduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAktRozwoduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
