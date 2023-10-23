import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  private _documentNames: Array<string>;

  constructor() {
    this._documentNames = new Array<string>();
  }

  get documentNames(): Array<string> {
    return this._documentNames;
  }
}
