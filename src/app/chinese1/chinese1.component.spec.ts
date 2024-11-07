import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chinese1Component } from './chinese1.component';

describe('Chinese1Component', () => {
  let component: Chinese1Component;
  let fixture: ComponentFixture<Chinese1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chinese1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Chinese1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
