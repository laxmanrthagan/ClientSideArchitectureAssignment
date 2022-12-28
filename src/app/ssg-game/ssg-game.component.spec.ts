import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsgGameComponent } from './ssg-game.component';

describe('SsgGameComponent', () => {
  let component: SsgGameComponent;
  let fixture: ComponentFixture<SsgGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsgGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsgGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
