import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ItemListComponent} from "../../components/item-list/component";
import {BehaviorSubject, interval, Observable, of} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  count = 0;
  show = true;
  title = 'store';
  selected_item: any;

  @ViewChild(ItemListComponent, { static: true }) item_list: ItemListComponent;
  @ViewChildren(ItemListComponent) items: QueryList<ItemListComponent>;

  ngOnInit(): void {
    //
    // let on_message_source = new BehaviorSubject('');
    // on_message_source.pipe(
    //   map((a) => b),
    //   mergeMap((b) => c),
    //   mergeMap((c) => d),
    // )
    //
    //
    //
    // let sources = [[], [], [], []];
    //
    // // t1
    // on_message_source.next('Data1')
    // on_message_source.subscribe((s) => sources[0].push(s))
    //
    //
    // on_message_source.next(`Data2, ${Date.now()}`)
    // on_message_source.subscribe((s) => sources[1].push(s))
    //
    // // on_message_source.subscribe('Data')
    // on_message_source.next('Data3')
    //
    // for( let source of sources)
    //   console.log(source, 'Source', sources.indexOf(source));
    //
    //
    // let observable_source = subscriber => {
    //
    //   setTimeout(() => subscriber.next(`observable_source, ${Date.now()}`), 1000)
    //   // setTimeout(() => subscriber.next(`observable_source, ${Date.now()}`), 3000)
    //   // setTimeout(() => subscriber.next(`observable_source, ${Date.now()}`), 5000)
    // };
    //
    // let on_message_observable = new Observable(observable_source);
    //
    // on_message_observable.subscribe((s) => sources[2].push(s))
    // on_message_observable.subscribe((s) => sources[3].push(s))


    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => {
        return interval(1000)
          .pipe(mergeMap(i => of(1, 3, 4, 6)))
      }),
    );


    result.subscribe(x => console.log(x));
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
