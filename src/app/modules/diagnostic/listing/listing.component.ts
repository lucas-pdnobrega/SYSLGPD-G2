import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  private _documentNames: Array<string>;

  constructor(private http: HttpClient) {
    this._documentNames = new Array<string>();
  }

  ngOnInit() {
    this.http.get('assets/docs.json').subscribe((data: any) => {
      this._documentNames = data.names;
      console.table(this._documentNames);
    });
  }

  get documentNames(): Array<string> {
    return this._documentNames;
  }
}
