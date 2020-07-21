import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGridComponent } from './login-grid.component';

describe('LoginGridComponent', () => {
  let component: LoginGridComponent;
  let fixture: ComponentFixture<LoginGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
