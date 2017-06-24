import { Component, OnInit } from '@angular/core';
import {SettingService} from "services-components";
import {RunnerUtilService} from "imeepos-runner-components";

@Component({
  selector: 'suyun-index-nav',
  templateUrl: './index-nav.component.html',
  styleUrls: ['./index-nav.component.scss']
})
export class IndexNavComponent implements OnInit {
  items: any[] = []
  constructor(
    public setting: SettingService,
    public util: RunnerUtilService
  ) { }

  ngOnInit() {
    this.init();
    this.util.hideFooter()
  }

  init(){
    this.setting.get({code: 'setting.index.navs'}).subscribe(res=>{
      this.items = res.info;
    })
  }

  add(){}

  edit(item: any){}

}
