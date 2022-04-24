import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKierownikComponent } from './add-kierownik.component';

describe('AddKierownikComponent', () => {
  let component: AddKierownikComponent;
  let fixture: ComponentFixture<AddKierownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKierownikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKierownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
