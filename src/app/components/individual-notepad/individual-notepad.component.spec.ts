import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNotepadComponent } from './individual-notepad.component';

describe('IndividualNotepadComponent', () => {
  let component: IndividualNotepadComponent;
  let fixture: ComponentFixture<IndividualNotepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualNotepadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
