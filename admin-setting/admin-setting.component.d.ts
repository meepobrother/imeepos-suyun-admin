import { OnInit } from '@angular/core';
import { RunnerUtilService } from "imeepos-runner-components";
export declare class AdminSettingComponent implements OnInit {
    util: RunnerUtilService;
    grids: any[];
    grids2: any[];
    grids3: any[];
    constructor(util: RunnerUtilService);
    ngOnInit(): void;
}
