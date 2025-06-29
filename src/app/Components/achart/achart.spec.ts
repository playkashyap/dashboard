import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achart } from './achart';

describe('Achart', () => {
  let component: Achart;
  let fixture: ComponentFixture<Achart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
