import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverClikComponent } from './hover-clik.component';

describe('HoverClikComponent', () => {
  let component: HoverClikComponent;
  let fixture: ComponentFixture<HoverClikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverClikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverClikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
