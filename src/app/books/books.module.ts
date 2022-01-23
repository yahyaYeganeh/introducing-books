import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BooksCardComponent } from './books-card/books-card.component';
import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  imports: [BooksRoutingModule, SharedModule],
  exports:[BooksCardComponent],
  declarations: [BooksRoutingModule.components]
})
export class BooksModule { }
