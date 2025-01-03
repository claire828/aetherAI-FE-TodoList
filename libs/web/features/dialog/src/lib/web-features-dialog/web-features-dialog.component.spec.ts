import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebFeaturesDialogComponent } from './web-features-dialog.component';
import { DecorateOverlayRef } from '../utils';
import { DIALOG_DEFAULT_PROVIDER } from '../default-configs';

describe('WebFeaturesDialogComponent', () => {
  let component: WebFeaturesDialogComponent;
  let fixture: ComponentFixture<WebFeaturesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebFeaturesDialogComponent],
      providers: [
        { provide: DecorateOverlayRef, useValue: {} },
        { provide: DIALOG_DEFAULT_PROVIDER, useValue: {} }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WebFeaturesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
