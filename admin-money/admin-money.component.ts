import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "imeepos-runner-components";

@Component({
  selector: 'suyun-admin-money',
  templateUrl: './admin-money.component.html',
  styleUrls: ['./admin-money.component.scss']
})
export class AdminMoneyComponent implements OnInit {

  constructor(
    public util: RunnerUtilService
  ) { }

  ngOnInit() {
    this.util.hideFooter()
  }

}
