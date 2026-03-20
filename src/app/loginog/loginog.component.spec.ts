import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginogComponent } from './loginog.component';

describe('LoginogComponent', () => {
  let component: LoginogComponent;
  let fixture: ComponentFixture<LoginogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
