import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ItemComponent} from "./components/item/component";
import {ItemListComponent} from "./components/item-list/component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  count = 0;
  show = true;
  title = 'store';
  selected_item: any;

  @ViewChild(ItemListComponent, { static: true }) item_list: ItemListComponent;
  @ViewChildren(ItemListComponent) items: QueryList<ItemListComponent>;

  ngAfterViewInit(): void {
    // console.log(this.items.callFucFromOtherCOmponent())
    console.log(this.items.toArray()[1])
    this.items.changes.subscribe(v => console.log(v))
  }

  showDetails($event) {
    this.selected_item = $event;
  }
}
