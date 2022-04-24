import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUrzednikComponent } from './edit-urzednik.component';

describe('EditUrzednikComponent', () => {
  let component: EditUrzednikComponent;
  let fixture: ComponentFixture<EditUrzednikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUrzednikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUrzednikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
