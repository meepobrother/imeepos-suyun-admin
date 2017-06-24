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
var index_advs_routing_module_1 = require("./index-advs-routing.module");
var index_advs_component_1 = require("./index-advs.component");
var IndexAdvsModule = (function () {
    function IndexAdvsModule() {
    }
    return IndexAdvsModule;
}());
IndexAdvsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            index_advs_routing_module_1.IndexAdvsRoutingModule
        ],
        declarations: [index_advs_component_1.IndexAdvsComponent]
    })
], IndexAdvsModule);
exports.IndexAdvsModule = IndexAdvsModule;
//# sourceMappingURL=index-advs.module.js.map