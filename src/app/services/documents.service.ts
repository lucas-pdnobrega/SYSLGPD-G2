import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) { }

  getDocumentNames(): Observable<string[]> {
    return this.http.get<string[]>('assets/docs.json').pipe(
      map((data: any) => data.names)
    );
  }

  getDocumentFilePath(documentName: string): string {
    // Construa o caminho do arquivo com base no nome do documento.
    return `assets/docs/${documentName}/${documentName}.md`;
  }

  getDocumentContent(documentName: string): Observable<string> {
    const filePath = this.getDocumentFilePath(documentName);
    return this.http.get(filePath, { responseType: 'text' });
  }

}
