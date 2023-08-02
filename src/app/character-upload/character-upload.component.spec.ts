import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterUploadComponent } from './character-upload.component';

describe('CharacterUploadComponent', () => {
  let component: CharacterUploadComponent;
  let fixture: ComponentFixture<CharacterUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterUploadComponent]
    });
    fixture = TestBed.createComponent(CharacterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
