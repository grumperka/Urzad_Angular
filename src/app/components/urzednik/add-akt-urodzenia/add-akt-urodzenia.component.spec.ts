import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktUrodzeniaComponent } from './add-akt-urodzenia.component';

describe('AddAktUrodzeniaComponent', () => {
  let component: AddAktUrodzeniaComponent;
  let fixture: ComponentFixture<AddAktUrodzeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAktUrodzeniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAktUrodzeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
