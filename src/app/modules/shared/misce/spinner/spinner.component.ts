import { Component, OnInit, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    @Input() text = '';

    color = 'accent';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    diameter = 40;

    constructor() {}

    ngOnInit(): void {}
}