import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.css']
})
export class MultiDropdownComponent implements OnInit {
  @Input()
  options: string[];

  @Input()
  multiSelect: boolean;

  @Input()
  title: string;

  @Output()
  onSelection: EventEmitter<string[]> = new EventEmitter<string[]>();

  choosenOptions: string[] = [];
  choosenOption: string;
  showDropDown: boolean = false;
  
  constructor() { }

  ngOnInit() {
    console.log("title",this.title)
  }

  ngOnChange() {

  }
  updateSelectionList(): void {
    this.multiSelect ? this.onSelection.emit(this.choosenOptions) : this.onSelection.emit([this.choosenOption]);
  }

  onSelectOption(option: string): void {
    this.multiSelect ? this.manipulateOption(this.choosenOptions, this.options, option) : this.selectOption(option);
  }

  selectOption(option){
    this.choosenOption = option; 
    this.showDropDown = false; 
    this.updateSelectionList();
  }

  removeOptions(option: string): void{
    this.manipulateOption(this.options, this.choosenOptions, option);
  }

  manipulateOption(listToAddOption: string[], listToRemoveOption: string[], option: string): void {
    listToAddOption.push(option);
    listToRemoveOption.splice(listToRemoveOption.indexOf(option), 1);
    this.updateSelectionList();
  }
}
