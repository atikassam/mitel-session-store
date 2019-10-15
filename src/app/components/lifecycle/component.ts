import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {DataProvider} from "../../services/data.provider";



@Component({
  selector: 'app-item',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnChanges {
  @Input() item
  // @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  constructor(private dataProvider: DataProvider) {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  onClickItem() {
    this.dataProvider.showDetails(this.item._id)
  }
}
