import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebButtonComponent } from './web-button.component';

describe('WebButtonComponent', () => {
  let component: WebButtonComponent;
  let fixture: ComponentFixture<WebButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
