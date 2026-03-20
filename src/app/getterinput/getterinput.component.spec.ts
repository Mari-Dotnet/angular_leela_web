import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterinputComponent } from './getterinput.component';

describe('GetterinputComponent', () => {
  let component: GetterinputComponent;
  let fixture: ComponentFixture<GetterinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
