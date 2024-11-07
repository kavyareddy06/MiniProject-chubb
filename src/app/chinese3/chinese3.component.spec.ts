import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chinese3Component } from './chinese3.component';

describe('Chinese3Component', () => {
  let component: Chinese3Component;
  let fixture: ComponentFixture<Chinese3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chinese3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Chinese3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
