import { OnInit } from '@angular/core';
import { SettingService } from "services-components";
import { RunnerUtilService } from "imeepos-runner-components";
import { Router } from "@angular/router";
export declare class IndexFeedTabComponent implements OnInit {
    util: RunnerUtilService;
    setting: SettingService;
    router: Router;
    items: any[];
    show: any;
    data: any;
    index: number;
    constructor(util: RunnerUtilService, setting: SettingService, router: Router);
    ngOnInit(): void;
    init(): void;
    onDefault(i: any): void;
    onSave(): void;
    onDelete(): void;
    getTrackBy(item: any): any;
    add(): void;
    edit(item: any, index: number): void;
}
