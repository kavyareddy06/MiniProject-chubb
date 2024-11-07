import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyComponent } from './lucky.component';

describe('LuckyComponent', () => {
  let component: LuckyComponent;
  let fixture: ComponentFixture<LuckyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
