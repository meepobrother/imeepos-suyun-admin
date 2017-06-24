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
var AdminIndexComponent = (function () {
    function AdminIndexComponent(util) {
        this.util = util;
        this.items = [];
        this.grids = [];
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
        ];
    }
    AdminIndexComponent.prototype.ngOnInit = function () {
        console.log(this.items);
        this.util.hideFooter();
    };
    return AdminIndexComponent;
}());
AdminIndexComponent = __decorate([
    core_1.Component({
        selector: 'suyun-admin-index',
        templateUrl: './admin-index.component.html',
        styleUrls: ['./admin-index.component.scss']
    }),
    __metadata("design:paramtypes", [imeepos_runner_components_1.RunnerUtilService])
], AdminIndexComponent);
exports.AdminIndexComponent = AdminIndexComponent;
//# sourceMappingURL=admin-index.component.js.map