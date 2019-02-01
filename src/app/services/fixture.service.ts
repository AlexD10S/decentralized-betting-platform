import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Fixture } from '../models/fixture';
import { FIXTURES } from '../data/mock-fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private fixturesUrl = 'api/fixtures';  // URL to web api

  constructor(private http: HttpClient) { }

  getFixtures():  Observable<Fixture[]> {
    // return of(FIXTURES);
    return this.http.get<Fixture[]>(this.fixturesUrl)
      .pipe(
        tap(_ => console.log('fetched fixtures')),
        catchError(this.handleError('getFixtures', []))
      );
  }

  getFixture(id: number): Observable<Fixture> {
    const url = '${this.fixturesUrl}/${id}';
    return this.http.get<Fixture>(url).pipe(
      tap(_ => console.log('fetched fixture id=${id}')),
      catchError(this.handleError<Fixture>(`getFixture id=${id}`))
    );
    // return of(FIXTURES.find(fixture => fixture.id === id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
