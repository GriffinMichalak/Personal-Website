import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-local-storage-input',
  templateUrl: './local-storage-input.component.html',
  styleUrl: './local-storage-input.component.scss'
})
export class LocalStorageInputComponent implements OnInit, OnDestroy {
  @Input() show = true;
  @Input() label = '';
  @Input() control = new FormControl();
  @Input() toolTip: string = '';
  @Input() size: string  = '';
  @Input() icon = '';
  @Input() length = 10;  // length of local storage array. 10 distinct past values are stored by default
  @Input() name: string = 'previousValues';       // name for local storage array. defaults to previousValues 

  options: string[] = [];
  filteredOptions: Observable<any[]>

  _filter(value: string): string[] {
    return this.options.filter(x => {
      return x.toLowerCase().includes(value.toLowerCase());
    });
  }

  get value() {
    return this.control.value;
  }

  ngOnInit(): void {
    
    // get previously entered values from local storage
    this.options = JSON.parse(localStorage.getItem(this.name) || "[]");

    // subscribe to form control's valueChanges event, and fitler on options based on user entry
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map( val => this._filter(val) )
    );

    console.log('Local Storage Input component initalized!');

  }

  ngOnDestroy(): void {

    // 🧫 add control value to options
    // if value exists in options, move value to 1st position
    if (this.options.includes(this.value)) {
      this.options = this.options.filter( x => x != this.value);  // remove value from array
      this.options.unshift(this.value); // add value to 1st position
    } else { // if value does not exist in options, add to 1st position
      this.options.unshift(this.value);
      if (this.options.length >  10) {
        this.options.pop(); // remove last value if array length has exceeded 10
      }
    }

    // save new array to local storage
    localStorage.setItem(this.name, JSON.stringify(this.options));

    console.log('Local Storage Input component destroyed!');
      
  }

}
