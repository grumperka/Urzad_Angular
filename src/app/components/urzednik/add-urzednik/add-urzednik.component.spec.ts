import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUrzednikComponent } from './add-urzednik.component';

describe('AddUrzednikComponent', () => {
  let component: AddUrzednikComponent;
  let fixture: ComponentFixture<AddUrzednikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUrzednikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUrzednikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
