import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemComponent {
  @Input() item
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()


  onClickItem() {
    this.onClick.emit(this.item._id)
  }
}
