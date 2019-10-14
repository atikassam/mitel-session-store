import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {DataProvider} from "../../services/data.provider";



@Component({
  selector: 'app-item',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemComponent {
  @Input() item
  // @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  constructor(private dataProvider: DataProvider) {}

  onClickItem() {
    this.dataProvider.showDetails(this.item._id)
  }
}
