import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksCardComponent } from './books-card/books-card.component';
import { BooksGridComponent } from './books-grid/books-grid.component';


const routes: Routes = [
  { path: '', component: BooksComponent }
 
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BooksRoutingModule {
  static components = [ BooksComponent, BooksCardComponent, BooksGridComponent ];
}
