import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  private _documentNames: Array<string>;

  constructor() {
    this._documentNames = new Array<string>();

    this.http.get('assets/docs.json').subscribe(data => {
      this.docsData = data;
      console.log(this._documentNames);
    });
  }

  get documentNames(): Array<string> {
    return this._documentNames;
  }
}
