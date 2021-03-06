import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ApiService} from "./api.service";

@Injectable()
export class DataProvider {
  private show_details: Subject<any> = new Subject()

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
  constructor(public  apiService: ApiService) {}

  getDetails(id) {
    let data = this.details.find((data) => data._id === id);
    return data
  }

  showDetails(id) {
    this.apiService.getItems().subscribe(console.log)
    let data = this.getDetails(id)
    this.show_details.next(data);
  }

  onData(cb): Subscription {
    return this.show_details.subscribe(cb)
  }
}
