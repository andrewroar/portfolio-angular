import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YgobanlistComponent } from './ygobanlist.component';

describe('YgobanlistComponent', () => {
  let component: YgobanlistComponent;
  let fixture: ComponentFixture<YgobanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YgobanlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YgobanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
