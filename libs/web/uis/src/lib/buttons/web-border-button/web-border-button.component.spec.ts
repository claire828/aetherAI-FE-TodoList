import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebBorderButtonComponent } from './web-border-button.component';

describe('WebBorderButtonComponent', () => {
  let component: WebBorderButtonComponent;
  let fixture: ComponentFixture<WebBorderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebBorderButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebBorderButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('buttonName', 'Test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
