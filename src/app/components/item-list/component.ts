import {Component, EventEmitter, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {ItemComponent} from "../item/component";

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
  // @Output() onClickItem: EventEmitter<any> = new EventEmitter();

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


  @ViewChild(ItemComponent, { static: true }) item_list: ItemComponent;
  @ViewChildren(ItemComponent) items_c: QueryList<ItemComponent>;

  ngAfterViewInit(): void {
    // console.log(this.items.callFucFromOtherCOmponent())
    console.log(this.items_c.toArray())
    this.items_c.changes.subscribe(v => console.log(v))
  }

  callFucFromOtherCOmponent() {
    alert('Called')
  }
}
