import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecorateOverlayRef } from '../utils';
import { DIALOG_DEFAULT_PROVIDER } from '../providers';
import { WebFeaturesDialogComponent } from './web-features-dialog.component';
import { DialogBtn } from '../models';

describe('WebFeaturesDialogComponent', () => {
  let component: WebFeaturesDialogComponent;
  let fixture: ComponentFixture<WebFeaturesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebFeaturesDialogComponent],
      providers: [
        {
          provide: DecorateOverlayRef, useValue: {}
        },
        {
          provide: DIALOG_DEFAULT_PROVIDER, useValue: {
            name: 'test-dialog',
            title: 'Test Dialog Title',
            content: 'Test Dialog Content',
            btns: [{ type: DialogBtn.Enter, displayName: 'Enter' }, { type: DialogBtn.Cancel, displayName: 'Close' }],
            overlayConfig: {
              hasBackdrop: true,
              backdropClass: ['bg-gray-500/30'],
              panelClass: [],
            }
          }
        }
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
