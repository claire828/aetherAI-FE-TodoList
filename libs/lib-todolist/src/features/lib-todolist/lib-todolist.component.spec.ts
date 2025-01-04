import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibTodolistComponent } from './lib-todolist.component';

describe('LibTodolistComponent', () => {
  let component: LibTodolistComponent;
  let fixture: ComponentFixture<LibTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTodolistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
