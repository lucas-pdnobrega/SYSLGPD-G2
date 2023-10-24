import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services/documents.service';
import { HttpClient } from '@angular/common/http';

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
  private _companyName: string


  constructor(private documentService: DocumentService, private http: HttpClient) {
    this._documentNames = [];
    this._selectedDocuments = [];
    this._hasBeenSent = false;
    this._documentFilePaths = []
    this._companyName = 'IFPB'
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

  async baixar(documentName: string) {
    const content: any = await this.http.get(this.documentService.getDocumentFilePath(documentName), { responseType: 'text' }).toPromise();

    // Realize a substituição no conteúdo do arquivo MD.
    const modifiedContent = content.replace(/<Nome da Empresa>/g, this._companyName);

    // Crie um Blob com o conteúdo modificado.
    const blob = new Blob([modifiedContent], { type: 'text/markdown' });

    // Crie um objeto URL para o Blob.
    const url = window.URL.createObjectURL(blob);

    // Crie um elemento de âncora para fazer o download.
    const a = document.createElement('a');
    a.href = url;
    a.download = `${documentName}.md`;

    // Simule um clique no link para iniciar o download.
    a.click();

    // Libere a URL do objeto Blob.
    window.URL.revokeObjectURL(url);
  }
}
