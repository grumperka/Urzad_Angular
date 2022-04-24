import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktSlubuComponent } from './add-akt-slubu.component';

describe('AddAktSlubuComponent', () => {
  let component: AddAktSlubuComponent;
  let fixture: ComponentFixture<AddAktSlubuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAktSlubuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAktSlubuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
