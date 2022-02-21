import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftIerarchyComponent } from './left-ierarchy.component';

describe('LeftIerarchyComponent', () => {
  let component: LeftIerarchyComponent;
  let fixture: ComponentFixture<LeftIerarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftIerarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftIerarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
