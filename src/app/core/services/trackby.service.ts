import { Injectable } from '@angular/core';

import { IBook } from '../../shared/IBook';

@Injectable()
export class TrackByService {

  book(index: number, book: IBook) {
    return book.id;
  }

  


}
