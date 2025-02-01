import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtptyStateComponent } from './emtpty-state.component';

describe('EmtptyStateComponent', () => {
  let component: EmtptyStateComponent;
  let fixture: ComponentFixture<EmtptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmtptyStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmtptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
