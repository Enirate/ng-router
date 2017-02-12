/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechLeadersComponent } from './tech-leaders.component';

describe('TechLeadersComponent', () => {
  let component: TechLeadersComponent;
  let fixture: ComponentFixture<TechLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
