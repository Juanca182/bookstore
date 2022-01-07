import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTBooksResponse } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = 'https://gutendex.com/books';

  constructor( private http: HttpClient) { }

  loadBooks(): Observable<RESTBooksResponse> {
    const url = `${ this.apiUrl }`
    return this.http.get<RESTBooksResponse>( url );
  }

  searchBook( term: string): Observable<RESTBooksResponse> {

    const url = `${ this.apiUrl }?search=${ term }`
    return this.http.get<RESTBooksResponse>( url );
  }

  getBookById( id: string): Observable<RESTBooksResponse> {

    const url = `${ this.apiUrl }?ids=${ id }`
    return this.http.get<RESTBooksResponse>( url );
  }

}
