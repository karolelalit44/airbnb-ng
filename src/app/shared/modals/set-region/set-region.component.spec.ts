import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRegionComponent } from './set-region.component';

describe('SetRegionComponent', () => {
  let component: SetRegionComponent;
  let fixture: ComponentFixture<SetRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
