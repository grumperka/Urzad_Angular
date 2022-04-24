import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKierownikComponent } from './edit-kierownik.component';

describe('EditKierownikComponent', () => {
  let component: EditKierownikComponent;
  let fixture: ComponentFixture<EditKierownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKierownikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKierownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
