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
var footer_bar_edit_component_1 = require("./footer-bar-edit.component");
var modules_select_module_1 = require("../../../runner-components/modules-select/modules-select.module");
var forms_1 = require("@angular/forms");
var alion_module_1 = require("../../../runner-components/alion/alion.module");
var icon_select_module_1 = require("../../../runner-components/icon-select/icon-select.module");
var link_select_module_1 = require("../../../runner-components/link-select/link-select.module");
var FooterBarEditModule = (function () {
    function FooterBarEditModule() {
    }
    return FooterBarEditModule;
}());
FooterBarEditModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            modules_select_module_1.ModulesSelectModule,
            forms_1.FormsModule,
            alion_module_1.AlionModule,
            icon_select_module_1.IconSelectModule,
            link_select_module_1.LinkSelectModule
        ],
        declarations: [footer_bar_edit_component_1.FooterBarEditComponent],
        exports: [footer_bar_edit_component_1.FooterBarEditComponent]
    })
], FooterBarEditModule);
exports.FooterBarEditModule = FooterBarEditModule;
//# sourceMappingURL=footer-bar-edit.module.js.map