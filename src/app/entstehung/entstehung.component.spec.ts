import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntstehungComponent } from './entstehung.component';

describe('EntstehungComponent', () => {
  let component: EntstehungComponent;
  let fixture: ComponentFixture<EntstehungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntstehungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntstehungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
