import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosaResComponent } from './dosa-res.component';

describe('DosaResComponent', () => {
  let component: DosaResComponent;
  let fixture: ComponentFixture<DosaResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosaResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DosaResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
