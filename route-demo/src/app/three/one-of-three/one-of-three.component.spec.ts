import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfThreeComponent } from './one-of-three.component';

describe('OneOfThreeComponent', () => {
  let component: OneOfThreeComponent;
  let fixture: ComponentFixture<OneOfThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOfThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOfThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
