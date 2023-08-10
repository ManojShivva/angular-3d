import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDisplay3DComponent } from './character-display3-d.component';

describe('CharacterDisplay3DComponent', () => {
  let component: CharacterDisplay3DComponent;
  let fixture: ComponentFixture<CharacterDisplay3DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDisplay3DComponent]
    });
    fixture = TestBed.createComponent(CharacterDisplay3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
