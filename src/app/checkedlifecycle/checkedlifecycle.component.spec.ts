import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedlifecycleComponent } from './checkedlifecycle.component';

describe('CheckedlifecycleComponent', () => {
  let component: CheckedlifecycleComponent;
  let fixture: ComponentFixture<CheckedlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedlifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckedlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
