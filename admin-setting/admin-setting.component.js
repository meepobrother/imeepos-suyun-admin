"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var imeepos_runner_components_1 = require("imeepos-runner-components");
var AdminSettingComponent = (function () {
    function AdminSettingComponent(util) {
        this.util = util;
        this.grids = [];
        this.grids2 = [];
        this.grids3 = [];
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
        ];
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
        ];
        this.grids3 = [
            {
                title: '首页设置',
                icon: '',
                link: ['/admin/setting/index-view']
            }
        ];
    }
    AdminSettingComponent.prototype.ngOnInit = function () {
        this.util.hideFooter();
    };
    return AdminSettingComponent;
}());
AdminSettingComponent = __decorate([
    core_1.Component({
        selector: 'suyun-admin-setting',
        templateUrl: './admin-setting.component.html',
        styleUrls: ['./admin-setting.component.scss']
    }),
    __metadata("design:paramtypes", [imeepos_runner_components_1.RunnerUtilService])
], AdminSettingComponent);
exports.AdminSettingComponent = AdminSettingComponent;
//# sourceMappingURL=admin-setting.component.js.map