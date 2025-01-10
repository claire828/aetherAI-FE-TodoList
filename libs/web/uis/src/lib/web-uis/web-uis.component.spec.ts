import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebUisComponent } from './web-uis.component';

describe('WebUisComponent', () => {
  let component: WebUisComponent;
  let fixture: ComponentFixture<WebUisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebUisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebUisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
