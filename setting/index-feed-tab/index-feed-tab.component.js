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
var services_components_1 = require("services-components");
var imeepos_runner_components_1 = require("imeepos-runner-components");
var router_1 = require("@angular/router");
var IndexFeedTabComponent = (function () {
    function IndexFeedTabComponent(util, setting, router) {
        this.util = util;
        this.setting = setting;
        this.router = router;
        this.items = [];
        this.show = {
            main: true,
            edit: false
        };
        this.data = {};
        this.index = 0;
    }
    IndexFeedTabComponent.prototype.ngOnInit = function () {
        this.util.hideFooter();
        this.init();
    };
    IndexFeedTabComponent.prototype.init = function () {
        var _this = this;
        this.setting.get({ code: 'setting.index.feed.tab' }).subscribe(function (res) {
            if (res.code == 1) {
                _this.items = res.info;
            }
        });
    };
    IndexFeedTabComponent.prototype.onDefault = function (i) {
        console.log(i);
        this.items.map(function (res) {
            res.active = false;
        });
        i.active = true;
        this.onSave();
    };
    IndexFeedTabComponent.prototype.onSave = function () {
        var _this = this;
        this.setting.save({ code: 'setting.index.feed.tab', data: this.items }).subscribe(function (res) {
            _this.show.edit = false;
        });
    };
    IndexFeedTabComponent.prototype.onDelete = function () {
        this.items.splice(this.index, 1);
        this.data = {};
        this.index = 0;
        this.onSave();
    };
    IndexFeedTabComponent.prototype.getTrackBy = function (item) {
        return item['display'] ? item['display'] : 0;
    };
    IndexFeedTabComponent.prototype.add = function () {
        this.data = { title: '', code: '', displayorder: '' };
        this.items.push(this.data);
        this.show.edit = true;
    };
    IndexFeedTabComponent.prototype.edit = function (item, index) {
        this.index = index;
        this.data = item;
        this.show.edit = true;
    };
    return IndexFeedTabComponent;
}());
IndexFeedTabComponent = __decorate([
    core_1.Component({
        selector: 'suyun-index-feed-tab',
        templateUrl: './index-feed-tab.component.html',
        styleUrls: ['./index-feed-tab.component.scss']
    }),
    __metadata("design:paramtypes", [imeepos_runner_components_1.RunnerUtilService,
        services_components_1.SettingService,
        router_1.Router])
], IndexFeedTabComponent);
exports.IndexFeedTabComponent = IndexFeedTabComponent;
//# sourceMappingURL=index-feed-tab.component.js.map