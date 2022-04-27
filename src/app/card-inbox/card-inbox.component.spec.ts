import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInboxComponent } from './card-inbox.component';

describe('CardInboxComponent', () => {
  let component: CardInboxComponent;
  let fixture: ComponentFixture<CardInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
