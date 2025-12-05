import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicLifecyclePage } from './ionic-lifecycle.page';

describe('IonicLifecyclePage', () => {
  let component: IonicLifecyclePage;
  let fixture: ComponentFixture<IonicLifecyclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicLifecyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
