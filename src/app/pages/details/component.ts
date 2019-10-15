import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ItemListComponent} from "../../components/item-list/component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class DetailsComponent implements AfterViewInit, OnInit {
  count = 0;
  show = true;
  title = 'store';
  selected_item: any;

  @ViewChild(ItemListComponent, { static: true }) item_list: ItemListComponent;
  @ViewChildren(ItemListComponent) items: QueryList<ItemListComponent>;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((value => {
      console.log(value)
    }))
  }

  ngAfterViewInit(): void {
    // console.log(this.items.callFucFromOtherCOmponent())
    console.log(this.items.toArray()[1])
    this.items.changes.subscribe(v => console.log(v))
  }

  showDetails($event) {
    this.selected_item = $event;
  }
}
