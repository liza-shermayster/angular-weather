import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() options = [];
  @Output() cityItem = new EventEmitter();

  filterOptions: Observable<string[]>;
  // options: string[] = myOptionsData.map((item) => item.LocalizedName);
  myInputControl = new FormControl('');

  ngOnInit() {
    console.log(this.options);
    this.filterOptions = this.myInputControl.valueChanges.pipe(
      startWith(''),
      map(this._filter.bind(this))
    );


  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((item) => item.toLowerCase().includes(filterValue)
    );
  }

  onSelection() {
    this.cityItem.emit(this.myInputControl.value);
  }


}
