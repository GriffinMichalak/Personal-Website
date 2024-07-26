import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-choices',
  templateUrl: './multi-choices.component.html',
  styleUrls: ['./multi-choices.component.scss']
})
export class MultiChoicesComponent implements OnInit {
  
  @Input() show = true; 
  @Input() label = '';
  @Input() choices: string[] = [];
  @Input() control = new UntypedFormControl();
  @Input() size = '';

  constructor() { }

  ngOnInit(): void {
  }

}
