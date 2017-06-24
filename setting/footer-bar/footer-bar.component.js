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
var services_components_1 = require("services-components");
var FooterBarComponent = (function () {
    function FooterBarComponent(util, setting) {
        this.util = util;
        this.setting = setting;
        this.items = [];
        this.index = 0;
        this.showEdit = false;
        this.data = {};
    }
    FooterBarComponent.prototype.ngOnInit = function () {
        this.util.hideFooter();
        this.initFooter();
    };
    FooterBarComponent.prototype.edit = function (e, index) {
        this.data = e;
        this.index = index;
        this.showEdit = true;
    };
    FooterBarComponent.prototype.add = function () {
        this.data = {
            title: '',
            icon: '',
            link: []
        };
        this.items.push(this.data);
        this.showEdit = true;
    };
    FooterBarComponent.prototype.onDefault = function (d) {
        this.items.map(function (res) {
            res.active = false;
        });
        d.active = true;
        this.onSave();
    };
    FooterBarComponent.prototype.onDelete = function (e) {
        this.items.splice(this.index, 1);
        this.onSave();
    };
    FooterBarComponent.prototype.onSave = function () {
        var _this = this;
        this.setting.save({ code: 'index.footer.setting', data: this.items }).subscribe(function (res) {
            _this.showEdit = false;
        });
    };
    FooterBarComponent.prototype.onBackground = function () {
        this.showEdit = false;
    };
    FooterBarComponent.prototype.initFooter = function () {
        var _this = this;
        this.setting.get({ code: 'index.footer.setting' }).subscribe(function (res) {
            if (res.code == 1) {
                _this.items = res.info;
            }
        });
    };
    return FooterBarComponent;
}());
FooterBarComponent = __decorate([
    core_1.Component({
        selector: 'suyun-footer-bar',
        templateUrl: './footer-bar.component.html',
        styleUrls: ['./footer-bar.component.scss']
    }),
    __metadata("design:paramtypes", [imeepos_runner_components_1.RunnerUtilService,
        services_components_1.SettingService])
], FooterBarComponent);
exports.FooterBarComponent = FooterBarComponent;
//# sourceMappingURL=footer-bar.component.js.map