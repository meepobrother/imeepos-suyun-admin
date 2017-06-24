"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_setting_routing_module_1 = require("./admin-setting-routing.module");
var admin_setting_component_1 = require("./admin-setting.component");
var imeepos_runner_components_1 = require("imeepos-runner-components");
var AdminSettingModule = (function () {
    function AdminSettingModule() {
    }
    return AdminSettingModule;
}());
AdminSettingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_setting_routing_module_1.AdminSettingRoutingModule,
            imeepos_runner_components_1.AdminFooterModule,
            imeepos_runner_components_1.WeuiGridsModule
        ],
        declarations: [admin_setting_component_1.AdminSettingComponent]
    })
], AdminSettingModule);
exports.AdminSettingModule = AdminSettingModule;
//# sourceMappingURL=admin-setting.module.js.map