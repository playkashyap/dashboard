import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bchart } from './bchart';

describe('Bchart', () => {
  let component: Bchart;
  let fixture: ComponentFixture<Bchart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bchart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bchart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
