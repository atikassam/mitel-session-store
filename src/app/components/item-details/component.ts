import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DataProvider} from "../../services/data.provider";

interface ItemDetailsSchema {
  _id: number,
  image: string,
  name?: string,
  description: string,
  price: number,
  count: number,
  last_update: number
  category: string,
  last_updated_by: string
}


@Component({
  selector: 'app-item-details',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  @Input() id:string;
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  data_subscription;

  details: ItemDetailsSchema;
  constructor(private dataProvider: DataProvider) {}

  ngOnInit(): void {
    this.data_subscription = this.dataProvider.getData(this.id)
      .subscribe(this.setData.bind(this))
  }

  ngOnDestroy(): void {
    this.data_subscription.unsubscribe()
  }

  setData(data) {
    this.details = data
  }
}
