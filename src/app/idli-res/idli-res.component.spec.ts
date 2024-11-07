import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdliResComponent } from './idli-res.component';

describe('IdliResComponent', () => {
  let component: IdliResComponent;
  let fixture: ComponentFixture<IdliResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdliResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdliResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
