import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as axe from 'axe-core';
import { TestButtonComponent } from './test-button.component';
import { logAxeViolations } from '../axe-violation-test';

describe('TestButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain no AXE violations', (done) => {
    const axeTestElement: HTMLElement = fixture.debugElement.nativeElement;
    axe.run(axeTestElement, (err, result) => {
      expect(result.violations.length).toBe(0);
      if (result.violations.length > 0) {
        logAxeViolations(result.violations);
      }
      done();
    });
  });
});
