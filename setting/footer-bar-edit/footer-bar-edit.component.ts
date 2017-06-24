import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-footer-bar-edit',
  templateUrl: './footer-bar-edit.component.html',
  styleUrls: ['./footer-bar-edit.component.scss']
})
export class FooterBarEditComponent implements OnInit {

  @Input() data: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  @Output() onBackground: EventEmitter<any> = new EventEmitter()
  @Output() onDelete: EventEmitter<any> = new EventEmitter()
  @Output() onDefault: EventEmitter<any> = new EventEmitter()
  @Input() index: number = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }
  showLinkSelect:boolean = false;
  linkSelect(){
    this.showLinkSelect = !this.showLinkSelect;
  }

  onLinkSelect(e){
    this.data.link = e.link;
    this.data.active = false;
    this.showLinkSelect = false;
  }
  showIconSelect: boolean = false;
  iconSelect(){
      this.showIconSelect = !this.showIconSelect
  }

  onIconSelect(e: any){
    this.data.icon = e;
    console.log(e)
    this.showIconSelect = false;
  }

  save(){
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
