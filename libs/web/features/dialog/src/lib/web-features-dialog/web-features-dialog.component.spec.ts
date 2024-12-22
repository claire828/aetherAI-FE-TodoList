import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebFeaturesDialogComponent } from './web-features-dialog.component';

describe('WebFeaturesDialogComponent', () => {
  let component: WebFeaturesDialogComponent;
  let fixture: ComponentFixture<WebFeaturesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebFeaturesDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebFeaturesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
