import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDisplayListComponent } from './char-display-list.component';

describe('CharDisplayListComponent', () => {
  let component: CharDisplayListComponent;
  let fixture: ComponentFixture<CharDisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharDisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
