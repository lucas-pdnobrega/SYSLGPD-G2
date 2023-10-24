import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services/documents.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  private _documentNames: string[];
  private _selectedDocuments: string[];
  private _hasBeenSent: boolean
  private _documentFilePaths: any


  constructor(private documentService: DocumentService) {
    this._documentNames = [];
    this._selectedDocuments = [];
    this._hasBeenSent = false;
    this._documentFilePaths = []
  }

  ngOnInit() {
    this.documentService.getDocumentNames().subscribe(data => {
      this._documentNames = data;
    });
  }

  get documentNames(): string[] {
    return this._documentNames;
  }

  localizarSelecionados(documentName: string): number{
    return this._selectedDocuments.findIndex((name) => name === documentName);
  }

  addSelectedDocument(documentName: string) {
    if ((<HTMLInputElement>event?.target).checked) {
      this._selectedDocuments.push(documentName);
      this._documentFilePaths[documentName] = this.documentService.getDocumentFilePath(documentName);
    } else {
      let index = this.localizarSelecionados(documentName);
      if (index >= 0) {
        this._selectedDocuments.splice(index, 1);
        delete this._documentFilePaths[documentName];
      }
    }
    console.log(this._selectedDocuments);
  }

  onClick() {
    this._hasBeenSent = true
  }

  get hasBeenSent() {
    return this._hasBeenSent
  }

  get selectedDocuments() {
    return this._selectedDocuments
  }

  get documentFilePaths() {
    return this._documentFilePaths
  }
}
