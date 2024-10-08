import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRighComponent } from './card-righ.component';

describe('CardRighComponent', () => {
  let component: CardRighComponent;
  let fixture: ComponentFixture<CardRighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRighComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
