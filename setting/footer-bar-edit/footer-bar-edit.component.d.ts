import { EventEmitter, OnInit } from '@angular/core';
export declare class FooterBarEditComponent implements OnInit {
    data: any;
    onSave: EventEmitter<any>;
    onBackground: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onDefault: EventEmitter<any>;
    index: number;
    constructor();
    ngOnInit(): void;
    showLinkSelect: boolean;
    linkSelect(): void;
    onLinkSelect(e: any): void;
    showIconSelect: boolean;
    iconSelect(): void;
    onIconSelect(e: any): void;
    save(): void;
    delete(): void;
    default(): void;
    showModuleSelect: boolean;
    moduleSelect(): void;
    _onBackground(): void;
}
