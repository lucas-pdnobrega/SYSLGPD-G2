import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importe o operador 'map' do RxJS

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
}
