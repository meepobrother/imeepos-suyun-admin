import { OnInit } from '@angular/core';
import { RunnerUtilService } from "imeepos-runner-components";
import { SettingService } from "services-components";
export declare class FooterBarComponent implements OnInit {
    util: RunnerUtilService;
    setting: SettingService;
    items: any[];
    index: number;
    constructor(util: RunnerUtilService, setting: SettingService);
    ngOnInit(): void;
    showEdit: boolean;
    data: any;
    edit(e: any, index: number): void;
    add(): void;
    onDefault(d: any): void;
    onDelete(e: any): void;
    onSave(): void;
    onBackground(): void;
    initFooter(): void;
}
