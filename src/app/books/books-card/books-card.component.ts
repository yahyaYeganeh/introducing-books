import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { IBook } from '../../shared/IBook';
import { TrackByService } from '../../core/services/trackby.service';

@Component({
  selector: 'cm-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: [ './books-card.component.css' ],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksCardComponent implements OnInit {

  @Input() books: IBook[] = [];

  constructor(public trackbyService: TrackByService) { }

  ngOnInit() {

  }

}

