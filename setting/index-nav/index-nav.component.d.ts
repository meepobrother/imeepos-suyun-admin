import { OnInit } from '@angular/core';
import { SettingService } from "services-components";
import { RunnerUtilService } from "imeepos-runner-components";
export declare class IndexNavComponent implements OnInit {
    setting: SettingService;
    util: RunnerUtilService;
    items: any[];
    constructor(setting: SettingService, util: RunnerUtilService);
    ngOnInit(): void;
    init(): void;
    add(): void;
    edit(item: any): void;
}
