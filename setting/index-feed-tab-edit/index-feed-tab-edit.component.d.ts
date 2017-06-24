import { EventEmitter, OnInit } from '@angular/core';
export declare class IndexFeedTabEditComponent implements OnInit {
    data: any;
    onSave: EventEmitter<any>;
    onBackground: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onDefault: EventEmitter<any>;
    index: number;
    constructor();
    ngOnInit(): void;
    onSelect(e: any): void;
    save(): void;
    delete(): void;
    default(): void;
    showModuleSelect: boolean;
    moduleSelect(): void;
    _onBackground(): void;
}
