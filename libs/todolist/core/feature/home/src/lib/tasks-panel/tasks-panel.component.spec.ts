import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPanelComponent } from './tasks-panel.component';

describe('tasksComponent', () => {
  let component: TasksPanelComponent;
  let fixture: ComponentFixture<TasksPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
