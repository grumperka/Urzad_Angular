import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObywatelComponent } from './add-obywatel.component';

describe('AddObywatelComponent', () => {
  let component: AddObywatelComponent;
  let fixture: ComponentFixture<AddObywatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObywatelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObywatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
