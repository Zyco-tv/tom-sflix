import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnationComponent } from './pagnation.component';

describe('PagnationComponent', () => {
  let component: PagnationComponent;
  let fixture: ComponentFixture<PagnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
