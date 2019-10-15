import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output, ViewChildren
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  @Input() id:string;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  data_subscription;

  details: ItemDetailsSchema;
  constructor(private dataProvider: DataProvider, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.data_subscription = this.dataProvider.onData(this.setData.bind(this))
  }

  ngOnDestroy(): void {
    this.data_subscription.unsubscribe()
  }

  setData(data) {
    this.details = data;

    // console.log(this.details)
    this.changeDetectorRef.markForCheck()
  }
}
