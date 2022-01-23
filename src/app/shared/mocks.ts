
import { Type } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, UrlSegment, Params, Data, Route, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { IBook } from './IBook';
import { IPagedResults } from './IPagedResults';
export class MockDataService {
    constructor() {}

    getBook(id: number): Observable<IBook> {
        if (id === 1) {
            return of(books.slice(0, 1)[0]);
        } else {
            return of({} as IBook);
        }
    }

    getBooksPage(page: number, pageSize: number): Observable<IPagedResults<IBook[]>> {
        const topVal = pageSize,
            skipVal = page,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;
        let top = (isNaN(topVal)) ? 10 : skip + (+topVal);

        if (top > books.length) {
            top = skip + (books.length - skip);
        }

        return of({
            totalRecords: books.length,
            results: books.slice(skip, top)
        });
    }

    getBooks(): Observable<IBook[]> {
        return of(books);
    }
}

export class MockActivatedRoute implements ActivatedRoute {
    snapshot: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    url: Observable<UrlSegment[]> = {} as Observable<UrlSegment[]>;
    params: Observable<Params> = {} as Observable<Params>;
    queryParams: Observable<Params> = {} as Observable<Params>;
    fragment: Observable<string> = {} as Observable<string>;
    data: Observable<Data> = {} as Observable<Data>;
    outlet: string = '';
    component: Type<any> | string = '';
    routeConfig: Route = {} as Route;
    root: ActivatedRoute = {} as ActivatedRoute;
    parent: ActivatedRoute = {} as ActivatedRoute;
    firstChild: ActivatedRoute = {} as ActivatedRoute;
    children: ActivatedRoute[] = [];
    pathFromRoot: ActivatedRoute[] = [];
    paramMap: Observable<ParamMap> = {} as Observable<ParamMap>;
    queryParamMap: Observable<ParamMap> = {} as Observable<ParamMap>;
    toString(): string {
        return '';
    }
}

export function getActivatedRouteWithParent(params: any[]) {
    const route = new MockActivatedRoute();
    route.parent = new MockActivatedRoute();
    if (params) {
        for (const param of params) {
            // var keyNames = Object.keys(param);
            route.parent.params = of(param);
        }
    }

    return route;
}

export const books = [
       {
            id: 1,
            title: "Book 1",
            author: "author 1" ,
            shortDescription: "Short description",
            cover: "image1.jpg",
            fullDescription: "full Description",
            linkToBuy: "www.google.com"
          
        },
        {
            id: 2,
            title: "Book 2",
            author: "author 2" ,
            shortDescription: "Short description 2",
            cover: "image2.jpg",
            fullDescription: "full Description 2",
            linkToBuy: "www.google.com\2"
          
        },
        {
            id: 3,
            title: "Book 3",
            author: "author 3" ,
            shortDescription: "Short description 3",
            cover: "image3.jpg",
            fullDescription: "full Description 3",
            linkToBuy: "www.google.com\3"
          
        },
        {
            id: 4,
            title: "Book 4",
            author: "author 4" ,
            shortDescription: "Short description 4",
            cover: "image4.jpg",
            fullDescription: "full Description 4",
            linkToBuy: "www.google.com\4"
          
        }
        ,
        {
            id: 5,
            title: "Book 5",
            author: "author 5" ,
            shortDescription: "Short description 5",
            cover: "image5.jpg",
            fullDescription: "full Description 5",
            linkToBuy: "www.google.com\5"
          
        } ,
        {
            id: 6,
            title: "Book 6",
            author: "author 6" ,
            shortDescription: "Short description 6",
            cover: "image6.jpg",
            fullDescription: "full Description 6",
            linkToBuy: "www.google.com\6"
          
        },
        {
            id: 7,
            title: "Book 7",
            author: "author 7" ,
            shortDescription: "Short description 7",
            cover: "image7.jpg",
            fullDescription: "full Description 7",
            linkToBuy: "www.google.com\7"
          
        },
        {
            id: 8,
            title: "Book 8",
            author: "author 8" ,
            shortDescription: "Short description 8",
            cover: "image8.jpg",
            fullDescription: "full Description 8",
            linkToBuy: "www.google.com\8"
          
        },
        {
            id: 9,
            title: "Book 9",
            author: "author 9" ,
            shortDescription: "Short description 9",
            cover: "image9.jpg",
            fullDescription: "full Description 9",
            linkToBuy: "www.google.com\9"
          
        },
        {
            id: 10,
            title: "Book 10",
            author: "author 10" ,
            shortDescription: "Short description 10",
            cover: "image10.jpg",
            fullDescription: "full Description 10",
            linkToBuy: "www.google.com\10"
          
        },
        {
            id: 11,
            title: "Book 11",
            author: "author 11" ,
            shortDescription: "Short description 11",
            cover: "image11.jpg",
            fullDescription: "full Description 11",
            linkToBuy: "www.google.com\11"
          
        },
        {
            id: 12,
            title: "Book 12",
            author: "author 12" ,
            shortDescription: "Short description 12",
            cover: "image12.jpg",
            fullDescription: "full Description 12",
            linkToBuy: "www.google.com\12"
          
        }

    
];
