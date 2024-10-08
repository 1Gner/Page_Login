import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeftComponent } from './card-left.component';

describe('CardLeftComponent', () => {
  let component: CardLeftComponent;
  let fixture: ComponentFixture<CardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
