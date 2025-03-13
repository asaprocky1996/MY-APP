import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinnerComponent } from './homeinner.component';

describe('HomeinnerComponent', () => {
  let component: HomeinnerComponent;
  let fixture: ComponentFixture<HomeinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
