import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountdailogComponent } from './discountdailog.component';

describe('DiscountdailogComponent', () => {
  let component: DiscountdailogComponent;
  let fixture: ComponentFixture<DiscountdailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountdailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountdailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
