import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dosa2Component } from './dosa2.component';

describe('Dosa2Component', () => {
  let component: Dosa2Component;
  let fixture: ComponentFixture<Dosa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dosa2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dosa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
