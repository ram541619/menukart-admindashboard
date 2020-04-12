import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxdailogComponent } from './taxdailog.component';

describe('TaxdailogComponent', () => {
  let component: TaxdailogComponent;
  let fixture: ComponentFixture<TaxdailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxdailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
