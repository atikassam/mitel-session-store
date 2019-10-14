import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class DataProvider {

  details = [
    {
      _id: 1,
      image: "http://image.link",
      name: "Test item 1",
      description: "this item is a test item",
      price: 900,
      count: 100,
      last_update: 1234567890,
      category: "unknown",
      last_updated_by: "User name"
    },
    {
      _id: 2,
      image: "http://image.link",
      name: "Test item 2",
      description: "this item is a test item",
      price: 900,
      count: 100,
      last_update: 1234567890,
      category: "unknown",
      last_updated_by: "User name"
    },
    {
      _id: 3,
      image: "http://image.link",
      name: "Test item 3",
      description: "this item is a test item",
      price: 900,
      count: 100,
      last_update: 1234567890,
      category: "unknown",
      last_updated_by: "User name"
    }
  ]


  getData(id): Observable<any> {
    return new Observable(( subscriber ) => {
      let data = this.details.find((data) => data._id === id)

      subscriber.next(data);
    })
  }
}
