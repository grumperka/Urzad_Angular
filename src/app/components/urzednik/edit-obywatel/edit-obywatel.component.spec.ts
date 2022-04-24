import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObywatelComponent } from './edit-obywatel.component';

describe('EditObywatelComponent', () => {
  let component: EditObywatelComponent;
  let fixture: ComponentFixture<EditObywatelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditObywatelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObywatelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
