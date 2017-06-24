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
var index_feed_tab_routing_module_1 = require("./index-feed-tab-routing.module");
var index_feed_tab_component_1 = require("./index-feed-tab.component");
var alion_module_1 = require("../../../runner-components/alion/alion.module");
var index_feed_tab_edit_module_1 = require("../index-feed-tab-edit/index-feed-tab-edit.module");
var IndexFeedTabModule = (function () {
    function IndexFeedTabModule() {
    }
    return IndexFeedTabModule;
}());
IndexFeedTabModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            index_feed_tab_routing_module_1.IndexFeedTabRoutingModule,
            alion_module_1.AlionModule,
            index_feed_tab_edit_module_1.IndexFeedTabEditModule
        ],
        declarations: [index_feed_tab_component_1.IndexFeedTabComponent]
    })
], IndexFeedTabModule);
exports.IndexFeedTabModule = IndexFeedTabModule;
//# sourceMappingURL=index-feed-tab.module.js.map