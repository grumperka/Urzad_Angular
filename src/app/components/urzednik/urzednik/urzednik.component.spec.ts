import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrzednikComponent } from './urzednik.component';

describe('UrzednikComponent', () => {
  let component: UrzednikComponent;
  let fixture: ComponentFixture<UrzednikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrzednikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrzednikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
