import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DataProvider} from "../../../services/data.provider";



@Component({
  selector: 'app-cds',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ChildTestCDSComponent implements OnInit {
  time = 0;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.time++
      // this.changeDetectorRef.markForCheck()
    }, 1000)
  }
}
