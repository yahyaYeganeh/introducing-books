import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SorterService } from '../../core/services/sorter.service';
import { TrackByService } from '../../core/services/trackby.service';
import { IBook } from '../../shared/IBook';

@Component({
  selector: 'cm-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksGridComponent implements OnInit {

  @Input() books: IBook[] = [];

  constructor(private sorterService: SorterService, public trackbyService: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
    this.books = this.sorterService.sort(this.books, prop);
  }

}
