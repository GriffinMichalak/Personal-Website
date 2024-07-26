import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoicesComponent } from './multi-choices.component';

describe('MultiChoicesComponent', () => {
  let component: MultiChoicesComponent;
  let fixture: ComponentFixture<MultiChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
