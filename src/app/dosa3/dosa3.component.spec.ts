import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dosa3Component } from './dosa3.component';

describe('Dosa3Component', () => {
  let component: Dosa3Component;
  let fixture: ComponentFixture<Dosa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dosa3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Dosa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
