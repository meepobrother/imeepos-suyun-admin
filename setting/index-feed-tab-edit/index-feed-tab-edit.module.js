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
var index_feed_tab_edit_component_1 = require("./index-feed-tab-edit.component");
var forms_1 = require("@angular/forms");
var modules_select_module_1 = require("../../../runner-components/modules-select/modules-select.module");
var IndexFeedTabEditModule = (function () {
    function IndexFeedTabEditModule() {
    }
    return IndexFeedTabEditModule;
}());
IndexFeedTabEditModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            modules_select_module_1.ModulesSelectModule
        ],
        declarations: [index_feed_tab_edit_component_1.IndexFeedTabEditComponent],
        exports: [index_feed_tab_edit_component_1.IndexFeedTabEditComponent]
    })
], IndexFeedTabEditModule);
exports.IndexFeedTabEditModule = IndexFeedTabEditModule;
//# sourceMappingURL=index-feed-tab-edit.module.js.map