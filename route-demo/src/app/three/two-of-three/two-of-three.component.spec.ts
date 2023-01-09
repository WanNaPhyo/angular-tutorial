import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOfThreeComponent } from './two-of-three.component';

describe('TwoOfThreeComponent', () => {
  let component: TwoOfThreeComponent;
  let fixture: ComponentFixture<TwoOfThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoOfThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoOfThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
