import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private http = inject(HttpClient);

  private apiUrl = 'https://01.fy25ey01.64mb.io/';

  getGridData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(delay(2000));
  }
}
