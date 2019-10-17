import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ItemListComponent} from "../../components/item-list/component";
import {ActivatedRoute} from "@angular/router";
import {DataProvider} from "../../services/data.provider";
import {Store} from "@ngrx/store";
import {StoreActions} from "../../reducers/store/store.actions";

@Component({
  selector: 'app-details',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class DetailsComponent implements OnInit {
  count = 0;
  title = 'store';
  data_subscription;
  details;

  constructor(private router: ActivatedRoute, private dataProvider: DataProvider, private store: Store<any>) {}

  ngOnInit(): void {
    console.log(this.dataProvider.details);
    this.router.params.subscribe((value => {
      this.store.select('store')
        .subscribe((state) => {
          console.log(state)
          this.setData(state.selected_item)
        })
      this.store.dispatch(StoreActions.GetItem({ id: value.id }));

      // let details = this.dataProvider.getDetails(parseInt(value.id));
      // console.log(value.id)
      // console.log(details)
      // this.setData(details);
    }))
  }

  ngOnDestroy(): void {
    // this.data_subscription.unsubscribe()
  }

  setData(data) {
    this.details = data;

    // console.log(this.details)
    // this.changeDetectorRef.markForCheck()
  }
}
