import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dosa1Component } from './dosa1.component';

describe('Dosa1Component', () => {
  let component: Dosa1Component;
  let fixture: ComponentFixture<Dosa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dosa1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dosa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
