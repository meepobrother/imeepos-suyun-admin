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
var IndexFeedTabEditComponent = (function () {
    function IndexFeedTabEditComponent() {
        this.data = {};
        this.onSave = new core_1.EventEmitter();
        this.onBackground = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.onDefault = new core_1.EventEmitter();
        this.index = 0;
        this.showModuleSelect = false;
    }
    IndexFeedTabEditComponent.prototype.ngOnInit = function () {
    };
    IndexFeedTabEditComponent.prototype.onSelect = function (e) {
        this.data.mtitle = e.title;
        this.data.code = e.code;
        this.showModuleSelect = false;
    };
    IndexFeedTabEditComponent.prototype.save = function () {
        this.data['display'] = this.data['display'] ? this.data['display'] : new Date().getTime();
        this.onSave.emit(this.data);
    };
    IndexFeedTabEditComponent.prototype.delete = function () {
        this.onDelete.emit(this.index);
    };
    IndexFeedTabEditComponent.prototype.default = function () {
        this.onDefault.emit(this.data);
    };
    IndexFeedTabEditComponent.prototype.moduleSelect = function () {
        this.showModuleSelect = !this.showModuleSelect;
    };
    IndexFeedTabEditComponent.prototype._onBackground = function () {
        this.onBackground.emit();
    };
    return IndexFeedTabEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IndexFeedTabEditComponent.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IndexFeedTabEditComponent.prototype, "onSave", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IndexFeedTabEditComponent.prototype, "onBackground", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IndexFeedTabEditComponent.prototype, "onDelete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IndexFeedTabEditComponent.prototype, "onDefault", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], IndexFeedTabEditComponent.prototype, "index", void 0);
IndexFeedTabEditComponent = __decorate([
    core_1.Component({
        selector: 'suyun-index-feed-tab-edit',
        templateUrl: './index-feed-tab-edit.component.html',
        styleUrls: ['./index-feed-tab-edit.component.scss']
    }),
    __metadata("design:paramtypes", [])
], IndexFeedTabEditComponent);
exports.IndexFeedTabEditComponent = IndexFeedTabEditComponent;
//# sourceMappingURL=index-feed-tab-edit.component.js.map