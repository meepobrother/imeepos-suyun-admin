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
var AdminMoneyComponent = (function () {
    function AdminMoneyComponent(util) {
        this.util = util;
    }
    AdminMoneyComponent.prototype.ngOnInit = function () {
        this.util.hideFooter();
    };
    return AdminMoneyComponent;
}());
AdminMoneyComponent = __decorate([
    core_1.Component({
        selector: 'suyun-admin-money',
        templateUrl: './admin-money.component.html',
        styleUrls: ['./admin-money.component.scss']
    }),
    __metadata("design:paramtypes", [imeepos_runner_components_1.RunnerUtilService])
], AdminMoneyComponent);
exports.AdminMoneyComponent = AdminMoneyComponent;
//# sourceMappingURL=admin-money.component.js.map