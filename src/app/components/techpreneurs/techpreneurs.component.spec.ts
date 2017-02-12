/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechpreneursComponent } from './techpreneurs.component';

describe('TechpreneursComponent', () => {
  let component: TechpreneursComponent;
  let fixture: ComponentFixture<TechpreneursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechpreneursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechpreneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
