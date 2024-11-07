import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chinese2Component } from './chinese2.component';

describe('Chinese2Component', () => {
  let component: Chinese2Component;
  let fixture: ComponentFixture<Chinese2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chinese2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Chinese2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
