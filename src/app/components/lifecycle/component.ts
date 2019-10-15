import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {DataProvider} from "../../services/data.provider";



@Component({
  selector: 'app-lifecycle',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() item
  // @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  constructor(private dataProvider: DataProvider) {}

  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChanges', changes.item)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
