import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDropdownComponent } from './multi-dropdown.component';

describe('MultiDropdownComponent', () => {
  let component: MultiDropdownComponent;
  let fixture: ComponentFixture<MultiDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelectOption',() => {
    it('should execute selectOption if multiple option is false', () => {
      component.multiSelect = false;
      spyOn(component, 'selectOption');
      component.onSelectOption('test option');
      
      expect(component.selectOption).toHaveBeenCalled();
    });
  });
});
