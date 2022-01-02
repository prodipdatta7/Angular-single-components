import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopNavigationComponent } from './app-top-navigation.component';

describe('AppTopNavigationComponent', () => {
  let component: AppTopNavigationComponent;
  let fixture: ComponentFixture<AppTopNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
