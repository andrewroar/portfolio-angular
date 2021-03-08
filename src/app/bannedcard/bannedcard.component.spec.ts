import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedcardComponent } from './bannedcard.component';

describe('BannedcardComponent', () => {
  let component: BannedcardComponent;
  let fixture: ComponentFixture<BannedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannedcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
