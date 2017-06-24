import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "imeepos-runner-components";

@Component({
  selector: 'suyun-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent implements OnInit {
  grids: any[] = []
  grids2: any[] = []
  grids3: any[] = [];
  constructor(
    public util: RunnerUtilService
  ) {
    this.grids = [
      {
        title: '任务分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '服务分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '商品分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '问答分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '搬家分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
      {
        title: '帖子分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/tasks']
      },
      {
        title: '商户分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/topic']
      },
      {
        title: '活动分类设置  ',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/tasks/index']
      },
      {
        title: '拼车分类设置',
        icon: 'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5605/239/3845481725/19857/9a6a0c49/5943e90dN4194da81.png',
        link: ['/admin/manage/runner']
      },
    ]
    this.grids2 = [
      {
        title: '平台设置',
        icon: '',
        link: []
      },
      {
        title: '短信设置',
        icon: '',
        link: []
      },
      {
        title: '提现设置',
        icon: '',
        link: []
      }
    ]

    this.grids3 = [
      {
        title: '首页设置',
        icon: '',
        link: ['/admin/setting/index-view']
      }
    ]
  }

  ngOnInit() {
    this.util.hideFooter()
  }

}
