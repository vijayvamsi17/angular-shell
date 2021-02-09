import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAppComponentComponent } from './react-app-component.component';

describe('ReactAppComponentComponent', () => {
  let component: ReactAppComponentComponent;
  let fixture: ComponentFixture<ReactAppComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAppComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
