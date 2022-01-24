import { Component, OnInit,OnDestroy, ComponentRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IBook } from '../../shared/IBook';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit,OnDestroy {
  subscription= new Subscription();
  book: IBook | null = null;
  mapEnabled: boolean = false;
  mapComponentRef: ComponentRef<any> = {} as ComponentRef<any>;




  constructor(private route: ActivatedRoute, 
    private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent?.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.subscription.add( this.dataService.getBook(id)
          .subscribe((book: IBook) => {
            this.book = book;
           
          }));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}   


}
