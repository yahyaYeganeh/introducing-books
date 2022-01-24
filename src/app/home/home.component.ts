import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../core/services/data.service';

import { LoggerService } from '../core/services/logger.service';
import { IBook } from '../shared/IBook';
import { IPagedResults } from '../shared/IPagedResults';

@Component({
    selector: 'cm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

    latestBooks: IBook[] = [];
    title: string = '';
    searchText: string = '';
    subscription= new Subscription();
    constructor(private dataService: DataService,
      private logger: LoggerService
         ) { }
  

    ngOnInit() {
        this.getLatestBooks() ;
        this.title = 'Find and read about the best books';
       
    }
    getLatestBooks() {
   
         this.subscription =this.dataService.getLastestBooks(3)
            .subscribe((response: IPagedResults<IBook[]>) => {
            
              this.latestBooks =  response.results;
             
            },
            (err: any) => this.logger.log(err),
            () => this.logger.log('getLatestBooks() retrieved books for 3: ' ));
            
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
    }   
}
