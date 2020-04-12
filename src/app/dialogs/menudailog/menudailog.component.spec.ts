import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudailogComponent } from './menudailog.component';

describe('MenudailogComponent', () => {
  let component: MenudailogComponent;
  let fixture: ComponentFixture<MenudailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
