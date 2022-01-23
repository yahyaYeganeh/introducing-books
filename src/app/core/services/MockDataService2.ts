
import { Injectable, Type } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, UrlSegment, Params, Data, Route, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { IBook } from '../../shared/IBook';
import { IPagedResults } from '../../shared/IPagedResults';
import { FilterService } from './filter.service';

@Injectable()
export class MockDataService2 {
    constructor(private filterService :FilterService) {
   
    }

    getBook(id: number): Observable<IBook> {
        if (id !== undefined) {
            return of(this.books.find((item: IBook) => { 
                return item.id==id;
            }) as IBook);
        } else {
            return of({} as IBook);
        }
    }

    getBooksPage(page: number, pageSize: number,searchData:string=""): Observable<IPagedResults<IBook[]>> {
        const topVal = pageSize,
            skipVal = page,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;
        let top = (isNaN(topVal)) ? 10 : skip + (+topVal);
        var filteredBooks=[];
        if (searchData && this.books) {
            searchData = searchData.toUpperCase();
            const props = ['title', 'author', 'shortDescription', 'fullDescription'];
            filteredBooks = this.filterService.filter<IBook>(this.books, searchData, props);
        }
         else {
           filteredBooks = this.books;
        } 
        if (top > filteredBooks.length) {
            top = skip + (filteredBooks.length - skip);
        }

        return of({
            totalRecords: filteredBooks.length,
            results: filteredBooks.slice(skip, top)
        });
    }

    getLastestBooks(count: number): Observable<IPagedResults<IBook[]>> {
        
       
        if (count>0 &&  count< this.books.length) {
            return of({
                totalRecords: this.books.length,
                results: this.books.slice(this.books.length-count, this.books.length)
            });
        }

        return of({
            totalRecords: this.books.length,
            results: this.books
        });
    }
    getBooks(): Observable<IBook[]> {
        return of(this.books);
    }



   books = [
       {    id: 1,
            title: "Book 1",
            author: "Author 1" ,
            shortDescription: "Short description",
            cover: "image1.jpg",
            fullDescription: "Full description",
            linkToBuy: "www.google.com"
        },
        {    id: 2,
            title: "Book 2",
            author: "Author 2" ,
            shortDescription: "Short description 2",
            cover: "image2.jpg",
            fullDescription: "Full description 2",
            linkToBuy: "www.google.com"
        },
        {    id: 3,
            title: "Book 3",
            author: "Author 3" ,
            shortDescription: "Short description 3",
            cover: "image3.jpg",
            fullDescription: "Full description 3",
            linkToBuy: "www.google.com"
        },
        {    id: 4,
            title: "Book 4",
            author: "Author 4" ,
            shortDescription: "Short description 4",
            cover: "image4.jpg",
            fullDescription: "Full description 4",
            linkToBuy: "www.google.com"
        },
        {    id: 5,
            title: "Book 5",
            author: "Author 5" ,
            shortDescription: "Short description 5",
            cover: "image5.jpg",
            fullDescription: "Full description 5",
            linkToBuy: "www.google.com"
        },
        {    id: 6,
            title: "Book 6",
            author: "Author 6" ,
            shortDescription: "Short description 6",
            cover: "image6.jpg",
            fullDescription: "Full description 6",
            linkToBuy: "www.google.com"
        },
        {    id: 7,
            title: "Book 7",
            author: "Author 7" ,
            shortDescription: "Short description 7",
            cover: "image7.jpg",
            fullDescription: "Full description 7",
            linkToBuy: "www.google.com"
        },
        {    id: 8,
            title: "Book 8",
            author: "Author 8" ,
            shortDescription: "Short description 8",
            cover: "image8.jpg",
            fullDescription: "Full description 8",
            linkToBuy: "www.google.com"
        },
        {    id: 9,
            title: "Book 9",
            author: "Author 9" ,
            shortDescription: "Short description 9",
            cover: "image9.jpg",
            fullDescription: "Full description 9",
            linkToBuy: "www.google.com"
        },
        {    id: 10,
            title: "Book 10",
            author: "Author 10" ,
            shortDescription: "Short description 10",
            cover: "image10.jpg",
            fullDescription: "Full description 10",
            linkToBuy: "www.google.com"
        },
        {    id: 11,
            title: "Book 11",
            author: "Author 11" ,
            shortDescription: "Short description 11",
            cover: "image11.jpg",
            fullDescription: "Full description 11",
            linkToBuy: "www.google.com"
        },
        {    id: 13,
            title: "Book 13",
            author: "Author 13" ,
            shortDescription: "Short description 13",
            cover: "image13.jpg",
            fullDescription: "Full description 13",
            linkToBuy: "www.google.com"
        },
        {    id: 14,
            title: "Book 14",
            author: "Author 14" ,
            shortDescription: "Short description 14",
            cover: "image14.jpg",
            fullDescription: "Full description 14",
            linkToBuy: "www.google.com"
        },
        {    id: 15,
            title: "Book 15",
            author: "Author 15" ,
            shortDescription: "Short description 15",
            cover: "image15.jpg",
            fullDescription: "Full description 15",
            linkToBuy: "www.google.com"
        }
    
];
}