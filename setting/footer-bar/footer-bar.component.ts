import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "imeepos-runner-components";
import {SettingService} from "services-components";

@Component({
  selector: 'suyun-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit {
  items: any[] = [];
  index: number = 0;
  constructor(
    public util: RunnerUtilService,
    public setting: SettingService
  ) { }

  ngOnInit() {
    this.util.hideFooter()
    this.initFooter();
  }

  showEdit: boolean = false
  data: any = {}
  edit(e: any,index: number){
    this.data = e;
    this.index = index
    this.showEdit = true;
  }

  add(){
    this.data = {
      title: '',
      icon: '',
      link: []
    }
    this.items.push(this.data)
    this.showEdit = true;
  }

  onDefault(d: any){
    this.items.map(res=>{
      res.active = false;
    })
    d.active = true;
    this.onSave()
  }

  onDelete(e: any){
    this.items.splice(this.index,1)
    this.onSave()
  }

  onSave(){
    this.setting.save({code: 'index.footer.setting',data: this.items}).subscribe(res=>{
      this.showEdit = false;
    })
  }

  onBackground(){
    this.showEdit = false;
  }

  initFooter(){
    this.setting.get({code: 'index.footer.setting'}).subscribe(res=>{
      if(res.code == 1){
        this.items = res.info;
      }
    });
  }

}
