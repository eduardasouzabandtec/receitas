import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDivisionComponent } from './title-division.component';

describe('TitleDivisionComponent', () => {
  let component: TitleDivisionComponent;
  let fixture: ComponentFixture<TitleDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
