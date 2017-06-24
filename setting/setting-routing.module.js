"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'admin/setting/footer-bar',
        loadChildren: 'app/admin/setting/footer-bar/footer-bar.module#FooterBarModule'
    },
    {
        path: 'admin/setting/index-feed-tab',
        loadChildren: 'app/admin/setting/index-feed-tab/index-feed-tab.module#IndexFeedTabModule'
    },
    {
        path: 'admin/setting/index-nav',
        loadChildren: 'app/admin/setting/index-nav/index-nav.module#IndexNavModule'
    },
    {
        path: 'admin/setting/index-hots',
        loadChildren: 'app/admin/setting/index-hots/index-hots.module#IndexHotsModule'
    },
    {
        path: 'admin/setting/index-advs',
        loadChildren: 'app/admin/setting/index-advs/index-advs.module#IndexAdvsModule'
    }
];
var SettingRoutingModule = (function () {
    function SettingRoutingModule() {
    }
    return SettingRoutingModule;
}());
SettingRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], SettingRoutingModule);
exports.SettingRoutingModule = SettingRoutingModule;
//# sourceMappingURL=setting-routing.module.js.map