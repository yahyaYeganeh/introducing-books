import {
  Component, OnInit,
  ComponentRef
} from '@angular/core';

import { DataService } from '../core/services/data.service';
import { IBook } from '../shared/IBook';
import { IPagedResults } from '../shared/IPagedResults';
import { FilterService } from '../core/services/filter.service';
import { LoggerService } from '../core/services/logger.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'cm-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  title: string = '';
  filterText: string = '';
  books: IBook[] = [];
  displayMode: DisplayModeEnum = DisplayModeEnum.Card;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;
  mapComponentRef: ComponentRef<any> = {} as ComponentRef<any>;
  _filteredBooks: IBook[] = [];

  get filteredBooks() {
    return this._filteredBooks;
  }

  set filteredBooks(value: IBook[]) {
    this._filteredBooks = value;

  }
  searchtext = "";

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private filterService: FilterService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.title = 'Books';
    this.filterText = 'Filter Books:';
    this.displayMode = DisplayModeEnum.Card;
    this.route.parent?.params.subscribe((params: Params) => {

      this.searchtext = params["search"];
      console.log(this.searchtext);
      if (this.searchtext && this.searchtext != undefined) {
        this.getBooksPage(1, this.searchtext);

      }
      else {
        this.getBooksPage(1);
      }
    });


  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getBooksPage(page, this.searchtext);
  }

  getBooksPage(page: number, textSearch = "") {

    this.dataService.getBooksPage((page - 1) * this.pageSize, this.pageSize, textSearch)
      .subscribe((response: IPagedResults<IBook[]>) => {

        this.books = this.filteredBooks = response.results;
        this.totalRecords = response.totalRecords;
      },
        (err: any) => this.logger.log(err),
        () => this.logger.log('getBooksPage() retrieved books for page: ' + page));
  }

  filterChanged(data: string) {

    if (data && this.books) {
      data = data.toUpperCase();
      const props = ['title', 'author', 'shortDescription', 'fullDescription'];
      this.filteredBooks = this.filterService.filter<IBook>(this.books, data, props);
    } else {
      this.filteredBooks = this.books;
    }
  }






}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1
}
