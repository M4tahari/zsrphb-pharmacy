import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit, OnChanges {

  @Input() offerObjectInput?: Array<any>;
  @Output() productObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenProduct: any;

  constructor() {
    
  }

  ngOnChanges(): void {
    if(this.offerObjectInput) {
      this.chosenProduct = this.offerObjectInput[0];
      this.choose();
    }
  }

  ngOnInit(): void {

  }

  choose() {
    this.productObjectEmitter.emit(this.chosenProduct);
  }
}
