import { OnInit } from '@angular/core';
import { RunnerUtilService } from "imeepos-runner-components";
export declare class AdminIndexComponent implements OnInit {
    util: RunnerUtilService;
    items: any[];
    grids: any[];
    constructor(util: RunnerUtilService);
    ngOnInit(): void;
}
