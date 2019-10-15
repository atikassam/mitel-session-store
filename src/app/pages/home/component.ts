import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {DataProvider} from "../../services/data.provider";



@Component({
  selector: 'app-container',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ContainerComponent {
  constructor(private dataProvider: DataProvider) {}
}
