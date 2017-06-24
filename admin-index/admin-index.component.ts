import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "imeepos-runner-components";

@Component({
  selector: 'suyun-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {
  items: any[] = []
  grids: any[] = [];
  constructor(
    public util: RunnerUtilService
  ) {


    this.grids = [
      {
        title: '跑腿管理',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '任务管理',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/tasks']
      },
      {
        title: '帖子管理',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/topic']
      },
      {
        title: '前台入口',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/tasks/index']
      }
    ]
  }

  ngOnInit() {
    console.log(this.items)
    this.util.hideFooter()
  }

}
