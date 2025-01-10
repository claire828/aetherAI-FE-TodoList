import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponentComponent } from './task-component.component';
import { WebButtonComponent } from 'web/uis';
import { TaskEntity } from 'todolist-store';

describe('TaskComponent', () => {
  let component: TaskComponentComponent;
  let fixture: ComponentFixture<TaskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create and display the task name', () => {
    // Arrange: Create a mock TaskEntity
    const mockTask: TaskEntity = {
      id: '1',
      name: 'Test Task',
      complete: false,
      ts: new Date().toISOString()
    };

    // Act: Set the required input before initial change detection
    fixture.componentRef.setInput('task', mockTask);
    fixture.detectChanges(); // Trigger change detection

    // Assert: Verify the component is created
    expect(component).toBeTruthy();

    // Assert: Check if the task name is rendered correctly
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Task');
  });
});