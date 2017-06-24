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
var FooterBarEditComponent = (function () {
    function FooterBarEditComponent() {
        this.data = {};
        this.onSave = new core_1.EventEmitter();
        this.onBackground = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.onDefault = new core_1.EventEmitter();
        this.index = 0;
        this.showLinkSelect = false;
        this.showIconSelect = false;
        this.showModuleSelect = false;
    }
    FooterBarEditComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    FooterBarEditComponent.prototype.linkSelect = function () {
        this.showLinkSelect = !this.showLinkSelect;
    };
    FooterBarEditComponent.prototype.onLinkSelect = function (e) {
        this.data.link = e.link;
        this.data.active = false;
        this.showLinkSelect = false;
    };
    FooterBarEditComponent.prototype.iconSelect = function () {
        this.showIconSelect = !this.showIconSelect;
    };
    FooterBarEditComponent.prototype.onIconSelect = function (e) {
        this.data.icon = e;
        console.log(e);
        this.showIconSelect = false;
    };
    FooterBarEditComponent.prototype.save = function () {
        this.onSave.emit(this.data);
    };
    FooterBarEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.index);
    };
    FooterBarEditComponent.prototype.default = function () {
        this.onDefault.emit(this.data);
    };
    FooterBarEditComponent.prototype.moduleSelect = function () {
        this.showModuleSelect = !this.showModuleSelect;
    };
    FooterBarEditComponent.prototype._onBackground = function () {
        this.onBackground.emit();
    };
    return FooterBarEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FooterBarEditComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FooterBarEditComponent.prototype, "onSave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FooterBarEditComponent.prototype, "onBackground", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FooterBarEditComponent.prototype, "onDelete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FooterBarEditComponent.prototype, "onDefault", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FooterBarEditComponent.prototype, "index", void 0);
FooterBarEditComponent = __decorate([
    core_1.Component({
        selector: 'suyun-footer-bar-edit',
        templateUrl: './footer-bar-edit.component.html',
        styleUrls: ['./footer-bar-edit.component.scss']
    }),
    __metadata("design:paramtypes", [])
], FooterBarEditComponent);
exports.FooterBarEditComponent = FooterBarEditComponent;
//# sourceMappingURL=footer-bar-edit.component.js.map