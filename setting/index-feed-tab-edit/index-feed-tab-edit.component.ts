import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-index-feed-tab-edit',
  templateUrl: './index-feed-tab-edit.component.html',
  styleUrls: ['./index-feed-tab-edit.component.scss']
})
export class IndexFeedTabEditComponent implements OnInit {
  @Input() data: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  @Output() onBackground: EventEmitter<any> = new EventEmitter()
  @Output() onDelete: EventEmitter<any> = new EventEmitter()
  @Output() onDefault: EventEmitter<any> = new EventEmitter()
  @Input() index: number = 0;
  constructor() { }

  ngOnInit() {
  }


  onSelect(e){
    this.data.mtitle = e.title;
    this.data.code = e.code;
    this.showModuleSelect = false;
  }

  save(){
    this.data['display'] = this.data['display'] ? this.data['display'] : new Date().getTime()
    this.onSave.emit(this.data);
  }

  delete(){
    this.onDelete.emit(this.index);
  }

  default(){
    this.onDefault.emit(this.data)
  }

  showModuleSelect: boolean = false;
  moduleSelect(){
    this.showModuleSelect = !this.showModuleSelect;
  }

  _onBackground(){
    this.onBackground.emit()
  }

}
