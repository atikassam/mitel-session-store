import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ItemComponent} from "./components/item/component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'store';
  selected_item: any;

  @ViewChildren(ItemComponent) items: QueryList<ItemComponent>;

  ngAfterViewInit(): void {
    // console.log()
  }

  showDetails($event) {
    this.selected_item = $event;
  }
}
