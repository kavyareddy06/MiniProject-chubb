import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idli1Component } from './idli1.component';

describe('Idli1Component', () => {
  let component: Idli1Component;
  let fixture: ComponentFixture<Idli1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idli1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Idli1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
