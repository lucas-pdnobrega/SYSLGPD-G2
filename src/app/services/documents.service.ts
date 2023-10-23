import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor() { }

  readDocumentNames(): Array<string> {
    const path = require('path');
    const fs = require('fs');
    const documentNames = new Array<string>();

    const directoryPath = path.join(__dirname, 'Documents');

    fs.readdir(directoryPath, (err, files) => {
      if (err) throw new Error('Unable to scan directory: ' + err);
      files.forEach((file) => {
        documentNames.push(file);
      });
    });
    return documentNames;
  }
}
