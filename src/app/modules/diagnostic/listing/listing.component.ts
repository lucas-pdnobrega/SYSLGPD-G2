import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services/documents.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  private _documentNames: Array<string>;

  constructor(private documentService: DocumentService) {
    this._documentNames = new Array<string>();
  }

  ngOnInit() {
    this.documentService.getDocumentNames().subscribe(data => {
      this._documentNames = data;
      console.log(this._documentNames);
    });
  }

  get documentNames(): Array<string> {
    return this._documentNames;
  }
}
