import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktZgonuComponent } from './add-akt-zgonu.component';

describe('AddAktZgonuComponent', () => {
  let component: AddAktZgonuComponent;
  let fixture: ComponentFixture<AddAktZgonuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAktZgonuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAktZgonuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
