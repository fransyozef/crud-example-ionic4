import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddPage } from './item-add.page';

describe('ItemAddPage', () => {
  let component: ItemAddPage;
  let fixture: ComponentFixture<ItemAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
