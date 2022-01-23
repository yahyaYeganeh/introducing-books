
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IBook } from '../../shared/IBook';
import { IPagedResults } from '../../shared/IPagedResults';
import { IApiResponse } from '../../shared/IApiResponse';

import { UtilitiesService } from './utilities.service';

@Injectable()
export class DataService {
    baseUrl = this.utilitiesService.getApiUrl();
    bookBaseUrl = this.baseUrl + '/api/books';
    books: IBook[] = [];


    constructor(private http: HttpClient, private utilitiesService: UtilitiesService) { 
        
     }

    getBooksPage(page: number, pageSize: number,searchData:string=""): Observable<IPagedResults<IBook[]>> {
        
        var serchstring="";
        if( searchData!="")
            serchstring=`/${searchData}`;
        return this.http.get<IBook[]>(

            `${this.bookBaseUrl}/page/${page}/${pageSize}${serchstring}`,
            { observe: 'response' })
            .pipe(
                map(res => {
                    const xInlineCount = res.headers.get('X-InlineCount');
                    const totalRecords = Number(xInlineCount);
                    const books = res.body as IBook[];
                  
                    return {
                        results: books,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }
    getLastestBooks(count: number): Observable<IPagedResults<IBook[]>> {
        return this.http.get<IBook[]>(
            `${this.bookBaseUrl}/?page=0&size=${count}&order=Id,desc`,
            { observe: 'response' })
            .pipe(
                map(res => {
                    const xInlineCount = res.headers.get('X-InlineCount');
                    const totalRecords = Number(xInlineCount);
                    const books = res.body as IBook[];
                  
                    return {
                        results: books,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }
    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.bookBaseUrl)
            .pipe(
                map(books => {
                  
                    return books;
                }),
                catchError(this.handleError)
            );
    }

    getBook(id: number): Observable<IBook> {
        return this.http.get<IBook>(this.bookBaseUrl + '/' + id)
            .pipe(
                map(book => {
                  
                    return book;
                }),
                catchError(this.handleError)
            );
    }



   

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError(() => errMessage);
        
        }
        return throwError(() => error || ' server error');
    }

    


}
