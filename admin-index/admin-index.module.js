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
var admin_index_routing_module_1 = require("./admin-index-routing.module");
var admin_index_component_1 = require("./admin-index.component");
var imeepos_runner_components_1 = require("imeepos-runner-components");
var AdminIndexModule = (function () {
    function AdminIndexModule() {
    }
    return AdminIndexModule;
}());
AdminIndexModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_index_routing_module_1.AdminIndexRoutingModule,
            imeepos_runner_components_1.WeuiGridsModule,
            imeepos_runner_components_1.AdminFooterModule
        ],
        declarations: [admin_index_component_1.AdminIndexComponent]
    })
], AdminIndexModule);
exports.AdminIndexModule = AdminIndexModule;
//# sourceMappingURL=admin-index.module.js.map