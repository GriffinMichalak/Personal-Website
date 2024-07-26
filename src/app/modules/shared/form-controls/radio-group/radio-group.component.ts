import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  
  @Input() show: boolean = true;
  @Input() label = '';
  @Input() control = new UntypedFormControl();
  @Input() values = [{value: 'default', checked: true}];
  @Input() toolTip: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}