import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUrzadComponent } from './add-urzad.component';

describe('AddUrzadComponent', () => {
  let component: AddUrzadComponent;
  let fixture: ComponentFixture<AddUrzadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUrzadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUrzadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
