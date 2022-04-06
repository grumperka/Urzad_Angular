import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaWojewodztwComponent } from './lista-wojewodztw.component';

describe('ListaWojewodztwComponent', () => {
  let component: ListaWojewodztwComponent;
  let fixture: ComponentFixture<ListaWojewodztwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaWojewodztwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaWojewodztwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
