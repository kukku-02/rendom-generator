import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Genarator } from './genarator';

describe('Genarator', () => {
  let component: Genarator;
  let fixture: ComponentFixture<Genarator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Genarator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Genarator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
