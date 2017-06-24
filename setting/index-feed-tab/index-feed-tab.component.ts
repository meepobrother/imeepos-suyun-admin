import { Component, OnInit } from '@angular/core';
import {SettingService} from "services-components";
import {RunnerUtilService} from "imeepos-runner-components";
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-index-feed-tab',
  templateUrl: './index-feed-tab.component.html',
  styleUrls: ['./index-feed-tab.component.scss']
})
export class IndexFeedTabComponent implements OnInit {
  items: any[] = [];

  show: any = {
    main: true,
    edit: false
  }

  data: any = {};
  index: number = 0



  constructor(
    public util: RunnerUtilService,
    public setting: SettingService,
    public router: Router
  ) { }

  ngOnInit() {
    this.util.hideFooter()
    this.init();
  }

  init(){
    this.setting.get({code: 'setting.index.feed.tab'}).subscribe(res=>{
      if(res.code == 1){
        this.items = res.info;
      }
    });
  }

  onDefault(i:any){
    console.log(i)
    this.items.map(res=>{
      res.active = false
    })
    i.active = true
    this.onSave()
  }

  onSave(){
    this.setting.save({code: 'setting.index.feed.tab',data: this.items}).subscribe(res=>{
      this.show.edit = false;
    })
  }

  onDelete(){
    this.items.splice(this.index,1)
    this.data = {}
    this.index = 0;
    this.onSave();
  }

  getTrackBy(item){
    return item['display'] ? item['display'] : 0;
  }


  add(){
    this.data = {title: '',code: '',displayorder: ''}
    this.items.push(this.data)
    this.show.edit = true;
  }

  edit(item: any,index: number){
    this.index = index;
    this.data = item;
    this.show.edit = true;
  }

}
