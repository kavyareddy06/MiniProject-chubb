import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idli2Component } from './idli2.component';

describe('Idli2Component', () => {
  let component: Idli2Component;
  let fixture: ComponentFixture<Idli2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Idli2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Idli2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
