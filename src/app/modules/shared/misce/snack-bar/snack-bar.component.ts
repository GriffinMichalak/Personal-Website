import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  constructor(
    public globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

}
