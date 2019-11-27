import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMypostPage } from './new-mypost.page';

describe('NewMypostPage', () => {
  let component: NewMypostPage;
  let fixture: ComponentFixture<NewMypostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMypostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMypostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
