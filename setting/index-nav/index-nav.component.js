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
var IndexNavComponent = (function () {
    function IndexNavComponent(setting, util) {
        this.setting = setting;
        this.util = util;
        this.items = [];
    }
    IndexNavComponent.prototype.ngOnInit = function () {
        this.init();
        this.util.hideFooter();
    };
    IndexNavComponent.prototype.init = function () {
        var _this = this;
        this.setting.get({ code: 'setting.index.navs' }).subscribe(function (res) {
            _this.items = res.info;
        });
    };
    IndexNavComponent.prototype.add = function () { };
    IndexNavComponent.prototype.edit = function (item) { };
    return IndexNavComponent;
}());
IndexNavComponent = __decorate([
    core_1.Component({
        selector: 'suyun-index-nav',
        templateUrl: './index-nav.component.html',
        styleUrls: ['./index-nav.component.scss']
    }),
    __metadata("design:paramtypes", [services_components_1.SettingService,
        imeepos_runner_components_1.RunnerUtilService])
], IndexNavComponent);
exports.IndexNavComponent = IndexNavComponent;
//# sourceMappingURL=index-nav.component.js.map