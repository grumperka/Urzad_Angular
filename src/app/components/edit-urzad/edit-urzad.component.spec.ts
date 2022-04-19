import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUrzadComponent } from './edit-urzad.component';

describe('EditUrzadComponent', () => {
  let component: EditUrzadComponent;
  let fixture: ComponentFixture<EditUrzadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUrzadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUrzadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
