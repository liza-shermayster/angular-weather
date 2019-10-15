import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() options = [];
  @Output() cityItem = new EventEmitter();
  @Output() searchChange = new EventEmitter();

  myInputControl = new FormControl('');

  ngOnInit() {
    console.log(this.options);
    this.myInputControl.valueChanges.subscribe(value => {
      this.searchChange.emit(value);
    });
  }

  onSelection() {
    this.cityItem.emit(this.myInputControl.value);
    this.myInputControl.setValue(this.myInputControl.value.LocalizedName);
  }


}
