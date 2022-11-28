import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotesComponentComponent } from './all-notes-component.component';

describe('AllNotesComponentComponent', () => {
  let component: AllNotesComponentComponent;
  let fixture: ComponentFixture<AllNotesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNotesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNotesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
