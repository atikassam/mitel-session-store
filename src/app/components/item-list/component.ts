import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

interface ItemSchema {
  [key: string]: any
  name: string,
  description: string,
  price: number,
  count: number
}


@Component({
  selector: 'app-item-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: []
})
export class ItemListComponent {
  @Output() onClickItem: EventEmitter<any> = new EventEmitter();

  items: ItemSchema[] = [
    {
      _id: 1,
      name: "Test item 1",
      description: "this item is a test item",
      price: 900,
      count: 100
    },
    {
      _id: 2,
      name: "Test item 2",
      description: "this item is a test item",
      price: 900,
      count: 100
    },
    {
      _id: 3,
      name: "Test item 3",
      description: "this item is a test item",
      price: 900,
      count: 100
    }
  ]
}
