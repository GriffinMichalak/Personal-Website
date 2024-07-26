import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageInputComponent } from './local-storage-input.component';

describe('LocalStorageInputComponent', () => {
  let component: LocalStorageInputComponent;
  let fixture: ComponentFixture<LocalStorageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalStorageInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalStorageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
