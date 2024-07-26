import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() show: boolean = true;
  @Input() label = '';
  @Input() control = new UntypedFormControl();
  @Input() toolTip: string = '';
  @Input() size: string  = '';
  @Input() icon = '';
  @Input() fmt = '';

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {

    // handle format
    if (this.fmt) {
      switch (this.fmt) {
        case 'currency': {
          this.control.valueChanges.subscribe( val => {
            if (val) {
              this.control.setValue(
                /* remove all non-digit; remove leading 0's; format as currency (U.S. dollar with no cents); 
                  disable event emission to prevent infinite chain execution */
                this.currencyPipe.transform(val.replace(/\D/g, '').replace(/^0{2,}/, '0'), 'USD', 'symbol', '1.0-0'), {emitEvent: false}
              );
            }
          });
          break;
        }
      }
    }
  }

}
