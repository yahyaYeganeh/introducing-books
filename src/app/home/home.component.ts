import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';

import { LoggerService } from '../core/services/logger.service';
import { IBook } from '../shared/IBook';
import { IPagedResults } from '../shared/IPagedResults';

@Component({
    selector: 'cm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    latestBooks: IBook[] = [];
    title: string = '';
    searchText: string = '';
    constructor(private dataService: DataService,
      private logger: LoggerService
         ) { }
  

    ngOnInit() {
        this.getLatestBooks() ;
        this.title = 'Latest books';
       
    }
    getLatestBooks() {
   
        this.dataService.getLastestBooks(3)
            .subscribe((response: IPagedResults<IBook[]>) => {
            
              this.latestBooks =  response.results;
             
            },
            (err: any) => this.logger.log(err),
            () => this.logger.log('getLatestBooks() retrieved books for 3: ' ));
      }
      
}
