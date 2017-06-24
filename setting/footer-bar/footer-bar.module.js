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
var footer_bar_routing_module_1 = require("./footer-bar-routing.module");
var footer_bar_component_1 = require("./footer-bar.component");
var runner_components_module_1 = require("../../../runner-components/runner-components.module");
var alion_module_1 = require("../../../runner-components/alion/alion.module");
var footer_bar_edit_module_1 = require("../footer-bar-edit/footer-bar-edit.module");
var FooterBarModule = (function () {
    function FooterBarModule() {
    }
    return FooterBarModule;
}());
FooterBarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            footer_bar_routing_module_1.FooterBarRoutingModule,
            runner_components_module_1.RunnerComponentsModule,
            alion_module_1.AlionModule,
            footer_bar_edit_module_1.FooterBarEditModule
        ],
        declarations: [footer_bar_component_1.FooterBarComponent]
    })
], FooterBarModule);
exports.FooterBarModule = FooterBarModule;
//# sourceMappingURL=footer-bar.module.js.map