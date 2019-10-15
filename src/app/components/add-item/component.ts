import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AddItemComponent {
  add_item_form = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  item: any = {}

  onSubmit() {
    console.log(this.item)
  }
}
