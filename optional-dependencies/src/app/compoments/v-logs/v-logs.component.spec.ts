import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VLogsComponent } from './v-logs.component';

describe('VLogsComponent', () => {
  let component: VLogsComponent;
  let fixture: ComponentFixture<VLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
